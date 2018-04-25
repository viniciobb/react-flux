"use strict";
var React = require('react');
var Router = require('react-router');
var EnderecoForm = require('./enderecoForm');
var EnderecoStore = require("../../stores/enderecoStore");
var EnderecoActions = require("../../actions/enderecoActions");

var Toastr = require("toastr");

var ManageEnderecoPage = React.createClass({

    
    componentWillUnmount : function(){
        EnderecoStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function(){
        console.log("onChange enderecoPage");
        this.setState({ endereco: EnderecoStore.getEndereco()});
    },

    getInitialState: function(){
        console.log("getInitialState ManageEnderecoPage");
        return {
            endereco: {
                logradouro: '',
                numero: 0,
                complemento: '',
                bairro: '',
                cep: 0,
                siglaFederacao: '',
                cidade: '',
                id: ''
            
            },
            errors: {},
            dirty: false
        };
    },

    buscaEndereco: function(){
        event.preventDefault();
        EnderecoActions.buscaEndereco(this.state.endereco.cep);
    },

    mixins: [
        Router.Navigation
    ],

    statics: {

        willTransitionFrom: function(transition, component){
            if( component.state.dirty && !confirm("Leave without saving ?")){
                transition.abort();
            }    
        }

    },

    componentWillMount: function(){
        
        EnderecoStore.addChangeListener(this._onChange);
       
        console.log("componentWillMount managerEndereco");
        console.log(this.props.params.idCondominio);
        console.log(this.props.params.idEndereco);
        

        if(this.props.params.idEndereco){
            
          this.setState({endereco: EnderecoStore.getEnderecoById(this.props.params.idEndereco)});

        }

    },
        
    setEnderecoState: function(event){ // called for every key press
        var field = event.target.name;
        var value = event.target.value;
        

        
        console.log("field : " + field);
        console.log("value : " + value);


        this.state.endereco[field] = value;

        console.dir(this.state.endereco);


        console.log("typed : " + value);
        this.setState({ dirty: true });
        return this.state.endereco;
    },
    
    saveEndereco: function(event){ 
        event.preventDefault();
        if(!this.enderecoFormIsValid()){
            return;
        }
        
        console.dir(this.state.endereco);

        if(this.props.params.idEndereco){

            EnderecoActions.updateEndereco(this.state.endereco, this.props.params.idEndereco);

        }else{

            EnderecoActions.createEndereco(this.state.endereco);

        }
               
        
        console.log(this.props.params.idCondominio);
        
        if(this.props.params.idCondominio)
            
            this.transitionTo('manageCondominio', {id: this.props.params.idCondominio});
            
        else{
            
            this.transitionTo('addCondominio');

        }    

    },


    enderecoFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors
        if(this.state.endereco.logradouro.length < 1){
            this.state.errors.logradouro = "logradouro must be filled.";
            formIsValid = false;
        }

        if(this.state.endereco.cep.length < 3){
            this.state.errors.cep = "CEP must be filled.";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;

    },

    
    /**
     * creating reusable inputs
     * 
     */
    render: function(){
        return (
            <EnderecoForm 
             endereco={this.state.endereco} 
             onChange={this.setEnderecoState}
             onSave={this.saveEndereco}
             onBusca={this.buscaEndereco}
             errors={this.state.errors} />
        ); 
    }

});

module.exports = ManageEnderecoPage; 