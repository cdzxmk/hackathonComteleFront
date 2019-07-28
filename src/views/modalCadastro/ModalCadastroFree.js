import React, { Component } from 'react';
import './styles.css';
import {IMaskInput} from 'react-imask';


export default class ModalCadastroFree extends Component {
    
    componentDidMount(){
        
    }
    
    render() {

    return (
        <div id="modalCadastroFree" className="modal modalFree">
            <div className="modal-content modalPlano">
                <h4 className="title-box">Free</h4>
                <i style={{color:"#63b8b2"}} className="medium material-icons">assignment_late</i>
                <div className="row">
                    <form className="col s12">
                        <div style={{marginTop:"2%"}}className="row">
                            <div className="input-field col s12">
                            <i className="material-icons prefix">account_circle</i>
                            <input placeholder="Nome" id="first_name" type="text" className="validate"/>
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
                                <IMaskInput mask={'(00) 00000-0000'} id="phone" type="tel" className="validate"/>
                                <label htmlFor="phone">Telefone</label>
                            </div>
                        </div>
                        <div className="row">
                          <div className="input-field col s12">
                              <i className="material-icons prefix">folder_shared</i>
                              <IMaskInput mask={'000.000.000-00'} id="cpf" type="text" className="validate"/>
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
    );
  }
}
