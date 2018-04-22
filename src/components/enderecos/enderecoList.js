"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CondominioStore = require("../../stores/condominioStore");
var EnderecoStore = require("../../stores/enderecoStore");
var EnderecoActions = require("../../actions/enderecoActions");
var Toastr = require("toastr");

var EnderecoList = React.createClass({
    
    //<td><Link to="manageEndereco" params={{idCondominio: this.props.idCondominio, idEndereco: endereco.id }}>{endereco.logradouro}</Link></td>
    
    propTypes: {
        enderecos: React.PropTypes.array.isRequired
    },

    deleteEndereco: function(endereco, event){
        event.preventDefault();
        EnderecoActions.deleteEndereco(endereco);
        Toastr.success("Endereco Deleted" + endereco.logradouro);
    },

    render: function(){
        
        var createEnderecoRow = function(endereco, index){
            
            var idEndereco = ( endereco.id ? endereco.id : index);
            
            return (
                
                <tr>
                    <td><a href="#" onClick={this.deleteEndereco.bind(this, endereco)}>Delete</a></td>
                    <td><Link to="manageEndereco" params={{ idCondominio: this.props.idCondominio, idEndereco: idEndereco }}>{endereco.logradouro}</Link></td>
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
                    {this.props.enderecos.map(createEnderecoRow, this)}
                </tbody>
                </table>    
            </div>    
        );
    }
});

module.exports = EnderecoList;