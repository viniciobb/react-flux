"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var actionTypes = require("../constants/actionTypes");

var AuthorActions = {

    createAuthor: function(author){
       
            AuthorApi.saveAuthor(author).then(function(newAuthor){

            Dispatcher.dispatch({
                actionType: actionTypes.CREATE_AUTHOR,
                author: newAuthor
            });

        });


    },

    updateAuthor: function(author){
        AuthorApi.updateAuthor(author).then(function(updatedAuthor){
            Dispatcher.dispatch({
                actionType: actionTypes.UPDATE_AUTHOR,
                author: updatedAuthor
            });

        });
        
    },

    deleteAuthor: function(id){
        
        AuthorApi.deleteAuthor(id).then(function(response){

            Dispatcher.dispatch({
                actionType: actionTypes.DELETE_AUTHOR,
                id: response.id
            });

        });
        
    }

};

module.exports = AuthorActions;