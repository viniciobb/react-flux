"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var _ = require("lodash");
var CHANGE_EVENT = "change";

var _authors = []; // outside the export module

// take an empty object, take the emitEmitter.prototype and 
// add everything on the last object
var AuthorStore = assign({}, EventEmitter.prototype,{
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);        
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);        
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    getAllAuthors: function(){
        console.log("getAllAuthors authorStore" + _authors);
        return _authors;        
    },

    getAuthorById: function(id){
        console.log("getAuthorById authorStore" + _authors);
        if(_authors)
            return _.find(_authors, {id : id});
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        // this is the part that varies...
        
        case  ActionTypes.INITIALIZE:
            console.log("initialized");
            _authors = action.initialData.authors;
            AuthorStore.emitChange();
            break;
        
        case ActionTypes.CREATE_AUTHOR:
            console.log("CREATE_AUTHOR in authorStore" + action.author);
            _authors.push(action.author);
            console.log("CREATE_AUTHOR in authorStore" + _authors);
            AuthorStore.emitChange();
            break;

        case ActionTypes.UPDATE_AUTHOR:
            console.log("update_AUTHOR in authorStore" + action.author);
            var existingAuthor = _.find(_authors, {id : action.author.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex,1,action.author);
            AuthorStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR:
            
            var existingAuthor = _.find(_authors, {id : action.id});
            var existingAuthorIndex = _.indexOf(_authors, existingAuthor);
            _authors.splice(existingAuthorIndex,1);
            AuthorStore.emitChange();
            break;    
    }
});

module.exports = AuthorStore;