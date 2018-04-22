"use strict";
var React = require('react');
var Input = require("../common/textInput");
var EnderecoForm = React.createClass({
    
    propTypes: {
        endereco: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onBusca: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
        
    render: function(){
        return (
            <form>
                
                <h1>Formulário Endereço</h1>   
                
                    <Input 
                        label="CEP"
                        name="cep"
                        onChange={this.props.onChange}
                        value={this.props.endereco.cep}
                        error={this.props.errors.cep}
                    />
                
                <button type="submit" onClick={this.props.onBusca} className="btn btn-primary mb-2">Buscar</button>
            
            

                <Input 
                    label="Logradouro"
                    name="logradouro"
                    onChange={this.props.onChange}
                    value={this.props.endereco.logradouro}
                    error={this.props.errors.logradouro}
                />
                
                <Input 
                    label="Numero"
                    name="numero"
                    onChange={this.props.onChange}
                    value={this.props.endereco.numero}
                    error={this.props.errors.numero}
                />
                <Input 
                    label="Bairro"
                    name="bairro"
                    onChange={this.props.onChange}
                    value={this.props.endereco.bairro}
                    error={this.props.errors.bairro}
                />
                <Input 
                    label="Complemento"
                    name="complemento"
                    onChange={this.props.onChange}
                    value={this.props.endereco.complemento}
                    error={this.props.errors.complemento}
                />
                 <Input 
                    label="Cidade"
                    name="cidade"
                    onChange={this.props.onChange}
                    value={this.props.endereco.cidade}
                    error={this.props.errors.cidade}
                />
                <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-primary mb-2"/>
            </form>               
        ); 
    }

});

module.exports = EnderecoForm;  