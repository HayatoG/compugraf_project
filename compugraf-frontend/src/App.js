import './App.css';
import { Formik, Field, ErrorMessage } from 'formik';
import { Form } from 'formik';
import 'bulma/css/bulma.min.css';
import React, { Component } from 'react';
import validacoes from './validacoes'
import api from './api';

class App extends Component {

  state = {
    pessoas: [],
  }

  async componentDidMount(){
    const response = await api.get('pessoa/');

    //console.log(response.data)

    this.setState({pessoas: response.data});
  }


  render() {

    const { pessoas } = this.state;

    return (
      <div className="container">
        <h1 class="title is-1 has-text-centered">Cadastro de Pessoas</h1>
          <Formik initialValues={{email: ""}}
            onSubmit={validacoes.handleClickRegistro}
            validationSchema={validacoes.validationRegistro}>
            <Form class="box" className="cadastro-form">
              <div className="cadastro-form-group">
                  <label>Nome:</label>
                  <Field name="nome" className="form-field" placeholder="Ex: João" />
                  <ErrorMessage component="span" name="nome" className="form-error"/>
                <div class="columns">
                  <div class="column is-half">
                    <label>Sobrenome:</label>
                    <Field name="sobrenome" className="form-field" placeholder="Ex: da Silva" />
                    <ErrorMessage component="span" name="sobrenome" className="form-error"/>
                  </div>
                  <div class="column">
                    <label>CPF:</label>
                    <Field name="cpf" className="form-field" placeholder="Ex: da Silva" />
                    <ErrorMessage component="span" name="cpf" className="form-error"/>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-one-quarter">
                    <label>Nacionalidade:</label>
                    <Field name="nacionalidade" className="form-field" placeholder="Ex: Brasileira" />
                    <ErrorMessage component="span" name="nacionalidade" className="form-error"/>
                  </div>
                  <div class="column">
                      <label>CEP:</label>
                      <Field name="cep" className="form-field" placeholder="Ex: 01011-100" />
                      <ErrorMessage component="span" name="cep" className="form-error"/>
                    </div>
                    <div class="column">
                      <label>Estado:</label>
                      <Field name="estado" className="form-field" placeholder="Estado" />
                      <ErrorMessage component="span" name="estado" className="form-error"/>
                    </div>
                    <div class="column">
                      <label>Cidade:</label>
                      <Field name="cidade" className="form-field" placeholder="Ex: São Paulo" />
                      <ErrorMessage component="span" name="cidade" className="form-error"/>
                    </div>
                </div>
                <label>Logradouro:</label>
                <Field name="logradouro" className="form-field" placeholder="Ex: Rua Boa Vista 253" />
                <ErrorMessage component="span" name="logradouro" className="form-error"/>
                <div class="columns">
                  <div class="column is-half">
                    <label>Email:</label>
                    <Field name="email" className="form-field" placeholder="Ex: email@email.com" />
                    <ErrorMessage component="span" name="email" className="form-error"/>
                  </div>
                  <div class="column">
                    <label>Telefone:</label>
                    <Field name="telefone" className="form-field" placeholder="Ex: (11) 2020-3030" />
                    <ErrorMessage component="span" name="telefone" className="form-error"/>
                  </div>
                </div>
              </div>
              <button class="button is-primary" type="submit">Cadastrar</button>
            </Form>
          </Formik>
        <section class="hero bd-hero bd-is-basic">
        <div class="container">
          <h1 class="title is-1">Gerenciamento de Pessoas</h1>
          <div>
              {pessoas.map(pessoa => (
                <div class="box is-3" key={pessoa._id}>
                  <h2>Nome: {pessoa.nome}</h2>
                    <div class="buttons is-right">
                      <button class="button is-info" onClick={console.log(pessoa.cep)}>Consultar</button>
                    </div>
                </div>
              ))}
          </div>
        </div>
        </section>
      </div>
    );
  }
}

export default App;
