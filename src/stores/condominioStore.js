"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var _ = require("lodash");
var CHANGE_EVENT = "change";
var _condominios = []; // outside the export module
var existingCondominioIndex = 0;

// take an empty object, take the emitEmitter.prototype and 
// add everything on the last object
var CondominioStore = assign({}, EventEmitter.prototype,{
    
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);        
    },
    
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);        
    },
    
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    getAllCondominios: function(){
        return _condominios;        
    },

    getCondominioById: function(id){
        return _.find(_condominios, {id : id});
    }
});


var getIndexOfExisting = function(array, id){
    var existing = _.find(array, {id : id});
    return _.indexOf(array, existing);
};

//var existingCondominio = _.find(_condominios, {id : action.author.id});
//var existingCondominioIndex = _.indexOf(_condominios, existingCondominio);

Dispatcher.register(function(action){
    switch(action.actionType){
        // this is the part that varies...
        
        case  ActionTypes.INITIALIZE:
            _condominios = action.initialData.authors;
            CondominioStore.emitChange();
            break;
        
        case ActionTypes.CREATE_AUTHOR:
            _condominios.push(action.author);
            CondominioStore.emitChange();
            break;

        case ActionTypes.UPDATE_AUTHOR:
            existingCondominioIndex = getIndexOfExisting(_condominios,action.author.id);
            _condominios.splice(existingCondominioIndex,1,action.author);
            CondominioStore.emitChange();
            break;

        case ActionTypes.DELETE_AUTHOR:
            existingCondominioIndex = getIndexOfExisting(_condominios,action.author.id);
            _condominios.splice(existingCondominioIndex,1);
            CondominioStore.emitChange();
            break;    
    }
});

module.exports = CondominioStore;