"use strict";
var React = require('react');
var TextInput = React.createClass({

    render: function(){
        
        var wrapperClass = 'form-group';
        if(this.props.error && this.props.error.length > 0){
            wrapperClass += " " + "has-error";
        }
        
        return (
            <div className={wrapperClass}>
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <div className="field ">
                    <input type="text"
                    name={this.props.name}
                    className="form-control"
                    placeholder={this.props.label}
                    ref={this.props.name}
                    value={this.props.value}
                    onChange={this.props.onChange} />
                    <div className="input">{this.props.error}</div>
                </div>
            </div>
            
        ); 
    }

});

module.exports = TextInput; 