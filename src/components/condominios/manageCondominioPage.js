"use strict";
var React = require('react');
var Router = require('react-router');
var CondominioForm = require('./condominioForm');
var CondominioStore = require("../../stores/condominioStore");
var EnderecoStore = require("../../stores/enderecoStore");
var CondominioActions = require("../../actions/condominioActions");
var EnderecoActions = require("../../actions/enderecoActions");

var Toastr = require("toastr");

var ManageCondominioPage = React.createClass({
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
    
    // componentWillUnmount : function(){
    //     EnderecoStore.removeChangeListener(this._onChange);
    // },
    
    // _onChange : function(){
    //     console.log("onChange EnderecoStore");
    //     this.state.condominio.enderecos = EnderecoStore.getEnderecos();
    //     this.setState({ condominio: this.state.condominio });
    // },

    getInitialState: function(){
        console.log("getInitialState managerCondominio");
        return {
            condominio: {
    
                nome: '',
                cnpj: 0,
                quantidadeApartamentos: 0,
                quantidadeBlocos: 0,
                quantidadeElevadores: 0,
                quantidadeVagas: 0,
                id: 0,
                enderecos: []
                //facilities: [facilitySchema]
            
            },
            errors: {},
            dirty: false
        };
    },

    componentWillMount: function(){
       
        //EnderecoStore.addChangeListener(this._onChange);

        console.log("componentWillMount managerCondominio");
       
        var condominioId = this.props.params.id; // from the path /condominio/:id
        
        console.log(condominioId);

        if(condominioId){
            this.setState({condominio: CondominioStore.getCondominioById(condominioId)});
        }
        
        console.dir(this.state.condominio);
    },

     setCondominioState: function(event){ // called for every key press
        var field = event.target.name;
        var value = event.target.value;
        this.state.condominio[field] = value;
        console.log("typed : " + value);
        this.setState({ dirty: true });
        return this.setState({ condominio: this.state.condominio});
    },
    condominioFormIsValid: function(){
        var formIsValid = true;
        this.state.errors = {}; // clear any previous errors
        if(this.state.condominio.nome.length < 1){
            this.state.errors.firstName = "Name must be filled.";
            formIsValid = false;
        }

        if(this.state.condominio.cnpj.length < 3){
            this.state.errors.cnpj = "CNPJ must be filled.";
            formIsValid = false;
        }

        this.setState({errors: this.state.errors});
        return formIsValid;

    },

    getEnderecos: function(){
       
        return  CondominioStore.getEnderecosCondominio(this.props.params.id);

    },

    saveCondominio: function(event){
        event.preventDefault();
        if(!this.condominioFormIsValid()){
            return;
        }

        this.state.condominio.enderecos = EnderecoStore.getEnderecos();

        if(this.state.condominio.id)
        {
            CondominioActions.updateCondominio(this.state.condominio);

        }else{
            CondominioActions.createCondominio(this.state.condominio);
            console.log("saveCondominio");
        }

        EnderecoActions.cleanEndereco();
        
        this.setState({ dirty: false });
        console.log("setState");
        Toastr.success('Condominio saved.');
        console.log("toaster");
        this.transitionTo('condominios');

    },

    

    /**
     * creating reusable inputs
     * 
     */
    render: function(){
        return (
            <CondominioForm 
             condominio={this.state.condominio} 
             onChange={this.setCondominioState}
             onSave={this.saveCondominio}
             getEnderecos={this.getEnderecos}
             errors={this.state.errors} />
        ); 
    }

});

module.exports = ManageCondominioPage; 