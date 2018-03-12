"use strict";
var React = require('react');
var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback){
            if(!confirm('Are you sure you read a page that\'s this boring ?')){
                transition.about();

            }else{
                
                callback();
            }

        },

        willTransitionFrom: function(transition, component){
            if(!confirm('Are you sure you lead a page that\'s so exciting ??')){
                transition.about();
            }    
        }

    },
    
    render: function(){
        return (

            <div>
                <h1>About</h1>                
                <p>
                    this application uses the following technologies:
                    <ul>
                        <li>React</li>
                        <li>Reat Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>

        );
    }

});

module.exports = About; 