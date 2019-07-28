import React, { Component } from 'react';
import './styles.css'
// import { Container } from './styles';

export default class ModalCadastroPremium extends Component {
  render() {
      return(
        <div id="modalCadastroPremium" className="modal modalPremium">
        <div className="modal-content modalPlano">
            <h4 className="title-box">Premium</h4>
            <i style={{color:"#ffd600"}} className="medium material-icons">insert_chart</i>
            <div className="row">
                <form className="col s12">
                    <div style={{marginTop:"2%"}}className="row">
                        <div className="input-field col s12">
                        <i className="material-icons prefix">account_circle</i>
                        <input placeholder="Ex: João Silva" id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">Nome e Sobrenome</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mail</i>
                            <input id="email" type="email" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input id="password" type="password" className="validate"/>
                            <label htmlFor="password">Senha</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input id="phone" type="tel" className="validate"/>
                            <label htmlFor="phone">Telefone</label>
                        </div>
                    </div>
                    <div className="row">
                          <div className="input-field col s12">
                              <i className="material-icons prefix">folder_shared</i>
                              <input id="cpf" type="text" className="validate"/>
                              <label htmlFor="cpf">CPF</label>
                          </div>
                    </div>
                </form>
            </div>
        </div>
        <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Cadastrar</a>
        </div>
    </div>
      )
  }
}
