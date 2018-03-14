"use strict";

//This file is mocking a web API by hitting hard coded data.
var authors = require('./authorData').authors;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(author) {
	return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

// function postData(url, data) {
// 	// Default options are marked with *
// 	return fetch(url, {
// 	  body: JSON.stringify(data), // must match 'Content-Type' header
// 	  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
// 	  credentials: 'same-origin', // include, same-origin, *omit
// 	  headers: {
// 		'user-agent': 'Mozilla/4.0 MDN Example',
// 		'content-type': 'application/json'
// 	  },
// 	  method: 'POST', // *GET, POST, PUT, DELETE, etc.
// 	  mode: 'cors', // no-cors, cors, *same-origin
// 	  redirect: 'follow', // *manual, follow, error
// 	  referrer: 'no-referrer', // *client, no-referrer
// 	})
// 	.then(response => response.json()) // parses response to JSON
//   }




var AuthorApi = {
	getAllAuthors: function() {
		//return _clone(authors); 
		return fetch('http://localhost:1337/localhost:3000/api-condominio/authors')
  		.then(function(response) {
			if(response.ok) {
				return response.json().then(function(resposta) {
				  return resposta;
				});
			  } else {
				console.log('Network response was not ok.');
			  }
		  })
		  .catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		  });

	},

	getAuthorById: function(id) {
		var author = _.find(authors, {id: id});
		return _clone(author);
	},
	
	saveAuthor: function(author) {
		var id = _generateId(author);
		author.id = id;
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/author',
			{
				method: 'post',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(author)
			}
		).then(function(response) {
			if(response.ok) {
				return response.json().then(function(resposta) {
				  return resposta;
				});
			} else {
				console.log('Network response was not ok.');
			}  
		})
		  .catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		  });
		
	},

	updateAuthor: function(author) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/authors/'+author.id,
			{
				method: 'put',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(author)
				
			}
		).then(function(response) {
			if(response.ok) {
				return response.json().then(function(resposta) {
				  return resposta;
				});
			} else {
				console.log('Network response was not ok.');
			}  
		})
		  .catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		  });
		
	},

	

	deleteAuthor: function(id) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/authors/'+id,
			{
				method: 'delete',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				}
			}
		).then(function(response) {
			if(response.ok) {
				return response.json().then(function(resposta) {
				  return resposta;
				});
			} else {
				console.log('Network response was not ok.');
			}  
		})
		  .catch(function(error) {
			console.log('There has been a problem with your fetch operation: ' + error.message);
		  });
		
	}


};

module.exports = AuthorApi;