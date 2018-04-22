"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CondominioStore = require("../../stores/condominioStore");
var EnderecoStore = require("../../stores/enderecoStore");

var EnderecoList = React.createClass({
    
    //<td><Link to="manageEndereco" params={{idCondominio: this.props.idCondominio, idEndereco: endereco.id }}>{endereco.logradouro}</Link></td>
    
    propTypes: {
        enderecos: React.PropTypes.array.isRequired
    },

    deleteCondominio: function(id, event){
        event.preventDefault();
        console.log(id);
        //CondominioActions.deleteCondominio(id);
        Toastr.success("Condominio Deleted");
    },

    render: function(){

        
        var createEnderecoRow = function(endereco, index){
            console.log(index);
            return (
                
                <tr key={index}>
                    <td>{endereco.logradouro}</td>                    
                    <td>{endereco.numero}</td>
                    <td>{endereco.bairro}</td>
                    <td>{endereco.cep}</td>
                </tr>
            );
        };
        
        return (
            <div>
                <table className="table">
                <thead>
                    <th>Delete</th>
                    <th>Logradouro</th>
                    <th>Numero</th>
                    <th>Bairro</th>
                    <th>CEP</th>
                </thead>    
                <tbody>
                    {this.props.enderecos.map(createEnderecoRow)}
                </tbody>
                </table>    
            </div>    
        );
    }
});

module.exports = EnderecoList;