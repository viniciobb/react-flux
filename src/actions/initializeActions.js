"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var AuthorApi = require("../api/authorApi");
var CondominioApi = require("../api/condominioApi");


var InitializeActions = {
    initApp: function(){
        
        //var authors = AuthorApi.getAllAuthors();
        //console.log("response authors :" + authors);
        
        AuthorApi.getAllAuthors().then(function(responseAuthors){
            
            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                initialData : {
                    authors: responseAuthors
                }
            });

        });

        CondominioApi.getAllCondominios().then(function(responseCondominios){
            console.log("initialStateCondominio - initializeActions");
            console.dir(responseCondominios);
            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE_CONDOMINIO,
                initialData : {
                    condominios: responseCondominios
                }
            });

        });
        
    }
}

module.exports = InitializeActions;