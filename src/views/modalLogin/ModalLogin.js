import React, { Component } from 'react';
import './styles.css'
import {IMaskInput} from 'react-imask';


export default class ModalLogin extends Component {
  render() {
    return (
        <div id="modalLogin" className="modal modalFree">
            <div className="modal-content modalPlano">
                <h4 className="title-box">Free</h4>
                <i style={{color:"#63b8b2"}} className="medium material-icons">assignment_late</i>
                <div className="row">
                    <form className="col s12">
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
