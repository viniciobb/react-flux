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

var CondominioApi = {
	getAllCondominios: function() {
		//return _clone(authors); 
		return fetch('http://localhost:1337/localhost:3000/api-condominio/condominios')
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
	
	
	saveCondominio: function(condominio) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/condominio',
			{
				method: 'post',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(condominio)
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

	updateCondominio: function(condominio) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/condominios/'+condominio.id,
			{
				method: 'put',
				headers: {
					'Accept': 'application/json, text/plain, */*',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(condominio)
				
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

	

	deleteCondominio: function(id) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/localhost:3000/api-condominio/condominios/'+id,
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
		
	},

	buscaEndereco: function(cep) {
		
		//pretend an ajax call to web api is made here
		return fetch('http://localhost:1337/api.postmon.com.br/v1/cep/'+cep,
			{
				method: 'get',
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
				return resposta;
			}  
		})
		  .catch(function(error) {
			console.log('There has been a problem with your fetch CEP operation: ' + error.message);
		  });
		
	}


};

module.exports = CondominioApi;