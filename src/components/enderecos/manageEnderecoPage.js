"use strict";
var React = require('react');
var Router = require('react-router');
var EnderecoForm = require('./enderecoForm');
var CondominioStore = require("../../stores/condominioStore");
var EnderecoActions = require("../../actions/enderecoActions");

var Toastr = require("toastr");

var ManageEnderecoPage = React.createClass({

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
       
        console.log("componentWillMount managerEndereco");
        console.log(this.props.params.idCondominio);

        if(this.props.params.idEndereco && this.props.params.idCondominio){
            
            this.setState({endereco: CondominioStore.getEnderecoCondominioById(this.props.params.idCondominio, this.props.params.idEndereco)});
        }

    },
        
    setEnderecoState: function(event){ // called for every key press
        var field = event.target.name;
        var value = event.target.value;
        this.state.endereco[field] = value;
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

        EnderecoActions.createEndereco(this.state.endereco, this.props.idCondominio);
        
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
             errors={this.state.errors} />
        ); 
    }

});

module.exports = ManageEnderecoPage; 