"use strict";
var React = require('react');
var Input = require("../common/textInput");
var AuthorForm = React.createClass({
    
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
        
    render: function(){
        return ( 
            <form>
                <h1>Manage Author</h1>
                <Input 
                    label="First Name"
                    name="firstName"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName}
                />
                <Input 
                    label="Last Name"
                    name="lastName"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName}
                />
                <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
            </form>               
        ); 
    }

});

module.exports = AuthorForm;  