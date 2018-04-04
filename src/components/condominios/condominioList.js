"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var CondominioActions = require("../../actions/condominioActions");
var Toastr = require("toastr");

var CondominioList = React.createClass({
    propTypes: {
        condominios: React.PropTypes.array.isRequired
    },

    deleteCondominio: function(id, event){
        event.preventDefault();
        CondominioActions.deleteCondominio(id);
        Toastr.success("Condominio Deleted");
    },
    
    render: function(){
        
        var createCondominioRow = function(condominio){
            console.log("Rendering createCondominioRow");
            console.dir(condominio);
            return (
                <tr key={condominio.id}>
                    <td><a href="#" onClick={this.deleteCondominio.bind(this, condominio.id)}>Delete</a></td>
                    <td><Link to="manageCondominio" params={{id: condominio.id}}>{condominio.nome}</Link></td>
                    <td>{condominio.cnpj}</td>
                </tr>
            );
        };
        
        return (
            <div>
                <table className="table">
                <thead>
                    <th>Delete</th>
                    <th>Nome</th>
                    <th>CNPJ</th>
                </thead>    
                <tbody>
                    {this.props.condominios.map(createCondominioRow, this)}
                </tbody>
                </table>    
            </div>    
        );
    }
});

module.exports = CondominioList;