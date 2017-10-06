"use strict";
var React = require('react');
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");

/**
 * Prop Validation
 * Props são enviadas de um componente para os filhos e elas não mudam
 * Controllers views são componentes espertos que buscam os dados na api e passam os dados para 
 * os componentes filhos dummies como props
 * 
 * Props validation
 * 
 */

var AuthorsPage = React.createClass({
    
    getInitialState: function(){
        return {
            authors: []
        };

    },
    componentDidMount: function(){
        if (this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },
    
    render: function(){
        
        return (
            <div>
               <h1>Authors</h1>
               <AuthorList authors = {this.state.authors}/>   
            </div>    
        );
    }
});

module.exports = AuthorsPage;