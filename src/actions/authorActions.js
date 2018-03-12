"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var actionTypes = require("../constants/actionTypes");

var AuthorActions = {

    createAuthor: function(author){
        
        // var newAuthor = AuthorApi.saveAuthor(author);
        // console.log("Created new author" + newAuthor);
        // console.log("Dispatch");
        // // hey dispatcher, go tell alll the stores that an author was just created
        // Dispatcher.dispatch({
        //     actionType: actionTypes.CREATE_AUTHOR,
        //     author: newAuthor
        // });
            AuthorApi.saveAuthor(author).then(function(newAuthor){
            console.log("Created new author");
            console.dir(newAuthor);
            console.log("Dispatch");

            Dispatcher.dispatch({
                actionType: actionTypes.CREATE_AUTHOR,
                author: newAuthor
            });

        });


    },

    updateAuthor: function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    },

    deleteAuthor: function(id){
        
        AuthorApi.deleteAuthor(id);
        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_AUTHOR,
            id: id
        });
    }

};

module.exports = AuthorActions;