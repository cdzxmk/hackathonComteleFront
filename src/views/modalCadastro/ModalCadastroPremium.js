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
            <div class="row">
                <form class="col s12">
                    <div style={{marginTop:"2%"}}class="row">
                        <div class="input-field col s12">
                        <i class="material-icons prefix">account_circle</i>
                        <input placeholder="Ex: João Silva" id="first_name" type="text" class="validate"/>
                            <label for="first_name">Nome e Sobrenome</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">mail</i>
                            <input id="email" type="email" class="validate"/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">lock</i>
                            <input id="password" type="password" class="validate"/>
                            <label for="password">Senha</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            <i class="material-icons prefix">phone</i>
                            <input id="phone" type="tel" class="validate"/>
                            <label for="phone">Telefone</label>
                        </div>
                    </div>
                    <div class="row">
                          <div class="input-field col s12">
                              <i class="material-icons prefix">folder_shared</i>
                              <input id="cpf" type="text" class="validate"/>
                              <label for="cpf">CPF</label>
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
