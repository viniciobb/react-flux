"use strict";
var React = require('react');
var Input = require("../common/textInput");
var EnderecosPage = require("../enderecos/enderecosPage");
var FacilitiesPage = require("../facilities/facilitiesPage");
var CondominioForm = React.createClass({
    
    propTypes: {
        condominio: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },
        
    render: function(){
        return ( 
            <div className="container">
                <form>
                <h1 className="page-header">Formulário Condomínio</h1>
                    <Input 
                        label="Nome"
                        name="nome"
                        onChange={this.props.onChange}
                        value={this.props.condominio.nome}
                        error={this.props.errors.nomeCondominio}
                    />
                    <Input 
                        label="CNPJ"
                        name="cnpj"
                        onChange={this.props.onChange}
                        value={this.props.condominio.cnpj}
                        error={this.props.errors.cnpj}
                    />
                    <Input 
                        label="Quantidade de Apartamentos"
                        name="quantidadeApartamentos"
                        onChange={this.props.onChange}
                        value={this.props.condominio.quantidadeApartamentos}
                        error={this.props.errors.quantidadeApartamentos}
                    />
                    <Input 
                        label="Quantidade de Blocos"
                        name="quantidadeBlocos"
                        onChange={this.props.onChange}
                        value={this.props.condominio.quantidadeBlocos}
                        error={this.props.errors.quantidadeBlocos}
                    />
                    <Input 
                        label="Quantidade de Elevadores"
                        name="quantidadeElevadores"
                        onChange={this.props.onChange}
                        value={this.props.condominio.quantidadeElevadores}
                        error={this.props.errors.quantidadeElevadores}
                    />
                    <Input 
                        label="Quantidade de Vagas"
                        name="quantidadeVagas"
                        onChange={this.props.onChange}
                        value={this.props.condominio.quantidadeVagas}
                        error={this.props.errors.quantidadeVagas}
                    />

                    <EnderecosPage
                        idCondominio={this.props.condominio.id}
                        getEnderecos={this.props.getEnderecos}
                        qtdeEndereco={1}
                    />

                    <FacilitiesPage
                        idCondominio={this.props.condominio.id}
                        getFacilities={this.props.getFacilities}
                    />

                    <input type="submit" value="Save" onClick={this.props.onSave} className="btn btn-default"/>
                </form>               
            </div>    
        ); 
    }

});

module.exports = CondominioForm;  