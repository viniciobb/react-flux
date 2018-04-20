"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var EventEmitter = require("events").EventEmitter;
var assign = require("object-assign");
var _ = require("lodash");
var CHANGE_EVENT = "change";

var _condominios = []; // outside the export module


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
        
        if(_condominios)
            return  _.find(_condominios, {id : id});
    },
    
    getEnderecosCondominio: function(condominioId){
        
        if(_condominios){

             var condominio = _.find(_condominios, {id : condominioId});
             
             return condominio.enderecos;

        }else{

            return;

        }
                    
    }
    


});

Dispatcher.register(function(action){
    switch(action.actionType){
        // this is the part that varies...
        
        case  ActionTypes.INITIALIZE_CONDOMINIO:
            _condominios = action.initialData.condominios;
            CondominioStore.emitChange();
            break;
        
        case ActionTypes.CREATE_CONDOMINIO:
            _condominios.push(action.condominio);
            CondominioStore.emitChange();
            break;

        case ActionTypes.UPDATE_CONDOMINIO:
            var existingCondominio = _.find(_condominios, {id : action.condominio.id});
            var existingCondominioIndex = _.indexOf(_condominios, existingCondominio);
            _condominios.splice(existingCondominioIndex,1,action.condominio);
            CondominioStore.emitChange();
            break;

        case ActionTypes.DELETE_CONDOMINIO:
            var existingCondominio = _.find(_condominios, {id : action.id});
            var existingCondominioIndex = _.indexOf(_condominios, existingCondominio);
            _condominios.splice(existingCondominioIndex,1);
            CondominioStore.emitChange();
            break;
        
        
            


        case ActionTypes.BUSCA_ENDERECO:

            var enderecoModel = {
                logradouro: action.endereco.logradouro, 
                siglaFederacao: action.endereco.estado,
                cep: action.endereco.cep,
                bairro: action.endereco.bairro,
                cidade: action.endereco.cidade,
                numero: 0,
                complemento : ""
            };
        
            var existingCondominio = _.find(_condominios, {id : action.id});
            var existingCondominioIndex = _.indexOf(_condominios, existingCondominio);
            condominios[existingCondominioIndex].enderecos.push(enderecoModel);
            CondominioStore.emitChange();
            break;    
    }
});

module.exports = CondominioStore;