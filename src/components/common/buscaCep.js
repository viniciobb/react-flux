"use strict";
var React = require('react');
var BuscaCep = React.createClass({

    propTypes: {
        onBusca:  React.PropTypes.func.isRequired,
        error:    React.PropTypes.object,
        onChange: React.PropTypes.func.isRequired
    },


    
    render: function(){
        
        var wrapperClass = 'form-inline';
        if(this.props.error && this.props.error.length > 0){
            wrapperClass += " " + "has-error";
        }
        
        return (
            <div className={wrapperClass}>
                
                <div className="form-group ">
                    <input 
                        type="text" 
                        onChange={this.props.onChange} 
                        name={this.props.name}
                        value={this.props.value}
                        ref={this.props.name}
                        className="form-control" 
                        placeholder={this.props.label} />
                       <div className="input">{this.props.error}</div>
                </div>
                <button type="submit" onClick={this.props.onBusca} className="btn btn-default">Buscar Cep</button>
            </div> 

        ); 
    }

});

module.exports = BuscaCep; 