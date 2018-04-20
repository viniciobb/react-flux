"use strict";
var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var EnderecoList = require("./enderecoList");
var EnderecoStore = require("../../stores/enderecoStore");
var EnderecoActions = require("../../actions/enderecoActions");


var EnderecosPage = React.createClass({

    propTypes: {
        getEnderecos: React.PropTypes.func.isRequired
    },
    
    getInitialState: function(){

        var enderecos = [];

        console.log(this.props.idCondominio); 

        if(this.props.idCondominio){
            
            if(!EnderecoStore.getInitialized()){
                enderecos = this.props.getEnderecos(); 
                EnderecoActions.carregaEnderecos(enderecos);

            }else{
                enderecos = EnderecoStore.getEnderecos();
            }

        }

        return {
            enderecos
        };
    },
    
    componentWillMount : function(){
        EnderecoStore.addChangeListener(this._onChange);
    },
    componentWillUnmount : function(){
        EnderecoStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function(){
        console.log("onChange enderecoPage");
        this.setState({ enderecos: EnderecoStore.getEnderecos() });
    },
    
    render: function(){
        
        return (
            <div>
               <h1>Endereços</h1>
               <Link to="addEndereco" params={{idCondominio: this.props.idCondominio}} className="btn btn-default">Adicionar Endereço</Link>
               <EnderecoList 
                    enderecos={this.state.enderecos}
                />   
            </div>    
        );
    }
});

module.exports = EnderecosPage;