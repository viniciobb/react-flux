"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var CondominioApi = require("../api/condominioApi");
var actionTypes = require("../constants/actionTypes");

var CondominioActions = {


    

    createCondominio: function(condominio){
       
        CondominioApi.saveCondominio(condominio).then(function(newCondominio){

            Dispatcher.dispatch({
                actionType: actionTypes.CREATE_CONDOMINIO,
                condominio: newCondominio
            });

        });
    },
 
    //SAVE_STATE_CONDOMINIO: null,
    //GET_STATE_CONDOMINIO: null,    

    saveStateCondominio: function(condominio){
        //CondominioApi.updateCondominio(condominio).then(function(updatedCondominio){
            Dispatcher.dispatch({
                actionType: actionTypes.SAVE_STATE_CONDOMINIO,
                condominio: condominio
            });

        //});
        
    },

    updateCondominio: function(condominio){
        CondominioApi.updateCondominio(condominio).then(function(updatedCondominio){
            Dispatcher.dispatch({
                actionType: actionTypes.UPDATE_CONDOMINIO,
                condominio: updatedCondominio
            });

        });
        
    },

    deleteCondominio: function(id){
        
        CondominioApi.deleteCondominio(id).then(function(response){

            Dispatcher.dispatch({
                actionType: actionTypes.DELETE_CONDOMINIO,
                id: response.id
            });

        });
        
    }

    

};

module.exports = CondominioActions;