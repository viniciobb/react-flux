"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
    render: function(){
        return (
            <div className="jumbotron">
                <h1>HeyCondominio Administration</h1>                
                <p> um lugar único para acessar seu condomínio - visite nosso Face.</p>
                <Link to="about" className="btn btn-primary btn-lg">Saiba mais</Link>
            </div>
        );
    }

});

module.exports = Home; 