"use strict";
var React = require('react');
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;


var routes = (
    <Route name="app" path="/" handler={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')}/>
        <Route name="authors" handler={require('./components/authors/authorPage')}/>
        <Route name="addAuthor" path="author" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="addCondominio" path="condominio" handler={require('./components/condominios/manageCondominioPage')}/>
        <Route name="addEndereco" path="condominio/:idCondominio/endereco"  handler={require('./components/enderecos/manageEnderecoPage')}/>
        <Route name="manageAuthor" path="author/:id" handler={require('./components/authors/manageAuthorPage')}/>
        <Route name="manageCondominio" path="condominio/:id" handler={require('./components/condominios/manageCondominioPage')}/>
        <Route name="manageEndereco" path="condominio/:idCondominio/endereco/:idEndereco" handler={require('./components/enderecos/manageEnderecoPage')}/>
        <Route name="about" handler={require('./components/about/aboutPage')}/>
        <Route name="condominios" handler={require('./components/condominios/condominiosPage')}/>
        <NotFoundRoute handler={require('./components/notFoundPage')}/>
        <Redirect from="about-us" to="about"/>
        <Redirect from="awthors" to="authors"/>
        <Redirect from="about*" to="about"/>
    </Route>
);

module.exports = routes;

