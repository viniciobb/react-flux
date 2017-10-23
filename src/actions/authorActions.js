"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var AuthorApi = require("../api/authorApi");
var actionTypes = require("../constants/actionTypes");

var AuthorActions = {

    createAuthor: function(author){
        
        var newAuthor = AuthorApi.saveAuthor(author);
        console.log("Created new author" + newAuthor);
        console.log("Dispatch");
        // hey dispatcher, go tell alll the stores that an author was just created
        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_AUTHOR,
            author: newAuthor
        });
    },

    updateAuthor: function(author){
        var updatedAuthor = AuthorApi.saveAuthor(author);
        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_AUTHOR,
            author: updatedAuthor
        });
    }

};

module.exports = AuthorActions;