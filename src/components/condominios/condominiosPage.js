"use strict";
var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var CondominioStore = require("../../stores/condominioStore");
var CondominioList = require("./condominioList");

var CondominiosPage = React.createClass({
    
    getInitialState: function(){
        
        console.log("CondominiosPage getInitialState");

        return {
            condominios: CondominioStore.getAllCondominios()
        };
    },
    
    componentWillMount : function(){
        CondominioStore.addChangeListener(this._onChange);
    },
    componentWillUnmount : function(){
        CondominioStore.removeChangeListener(this._onChange);
    },
    
    _onChange : function(){
        console.log("onChange condominioPage");
        this.setState({ condominios: CondominioStore.getAllCondominios() });
    },
    
    render: function(){
        
        return (
            <div className="container">
               <h1 className="page-header">Condomínios</h1>
               <Link to="addCondominio" className="btn btn-default">Adicionar Condomínio</Link>
               <CondominioList 
                    condominios={this.state.condominios}/>   
            </div>    
        );
    }
});

module.exports = CondominiosPage;