"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var ActionTypes = require("../constants/actionTypes");
var AuthorApi = require("../api/authorApi");


var InitializeActions = {
    initApp: function(){
        
        //var authors = AuthorApi.getAllAuthors();
        //console.log("response authors :" + authors);
        
        AuthorApi.getAllAuthors().then(function(responseAuthors){
            console.log(responseAuthors);
            
            Dispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                initialData : {
                    authors: responseAuthors
                }
            });

        });

        
        
    }
}

module.exports = InitializeActions;