"use strict"
var Dispatcher = require("../dispatcher/appDispatcher");
var CondominioApi = require("../api/condominioApi");
var actionTypes = require("../constants/actionTypes");
var Toastr = require("toastr");

var EnderecoActions = {


    buscaEndereco: function(cep){
        
        CondominioApi.buscaEndereco(cep).then(function(response){
            console.log("actions busca cep");
            console.dir(response);
            if(response){
                Dispatcher.dispatch({
                    actionType: actionTypes.BUSCA_ENDERECO,
                    endereco: response
                });

            }else{
                Toastr.warning("CEP não encontrado"); 
            }
            

        });
        
    },

    createEndereco: function(endereco){

        Dispatcher.dispatch({
            actionType: actionTypes.CREATE_ENDERECO,
            endereco: endereco
        });
    },

    cleanEndereco: function(){
        Dispatcher.dispatch({
            actionType: actionTypes.CLEAN_ENDERECO
        });
    },

    updateEndereco: function(endereco, index){
        Dispatcher.dispatch({
            actionType: actionTypes.UPDATE_ENDERECO,
            endereco: endereco,
            index : index
        });
    },

    deleteEndereco: function(endereco){
        Dispatcher.dispatch({
            actionType: actionTypes.DELETE_ENDERECO,
            endereco: endereco
        });
    },

    carregaEnderecos: function(enderecos){
        Dispatcher.dispatch({
            actionType: actionTypes.INIT_ENDERECO,
            enderecos: enderecos
        });
    }

    
    
    

    

    // updateEndereco: function(endereco){
    //     CondominioApi.updateEndereco(endereco).then(function(updatedEndereco){
    //         Dispatcher.dispatch({
    //             actionType: actionTypes.UPDATE_ENDERECO,
    //             condominio: updatedEndereco
    //         });

    //     });
        
    // },
    
    // deleteEndereco: function(id){
        
    //     Dispatcher.dispatch({
    //         actionType: actionTypes.DELETE_ENDERECO,
    //         id: id
    //     });
        
    // }


    

};

module.exports = EnderecoActions;