"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ParentTypes = require("../constants/parentTypes");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var _ = require("lodash");
var CHANGE_EVENT = "change";

var _enderecos = []; // outside the export module
var _initialized = false;

// take an empty object, take the emitEmitter.prototype and 
// add everything on the last object
var EnderecoStore = assign({}, EventEmitter.prototype,{
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);        
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);        
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    
    getEnderecos: function(){
        
        return _enderecos;
    },

    getInitialized: function(){
        
        return _initialized;
    }

});

Dispatcher.register(function(action){
    switch(action.actionType){
        // this is the part that varies...

        
        case ActionTypes.CLEAN_ENDERECO:
            _enderecos = [];
            _initialized = false;
            EnderecoStore.emitChange();
            break;
        
        case ActionTypes.INIT_ENDERECO:
            _enderecos = action.enderecos;
            _initialized = true;
            EnderecoStore.emitChange();
            break;
        
        case ActionTypes.CREATE_ENDERECO:
            _enderecos.push(action.endereco);
            EnderecoStore.emitChange();
        break;
            
            
            
    }
});

module.exports = EnderecoStore;