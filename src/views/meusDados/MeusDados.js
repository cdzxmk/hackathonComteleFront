import React, { Component } from 'react';
import './styles.css'
import Navbar from '../../components/navbar/Navbar';
import ModalCadastroFree from '../modalCadastro/ModalCadastroFree';

export default class MeusDados extends Component {
  render() {
    return (
      <main>
        <div className="background-areaLogada">
          <Navbar logged={true}/>
          <div className="content-dados">
              <div className="meus-dados">
                <h1 className="perfil-title">PERFIL</h1>
                <h1 className="title-type">FREE</h1>
                <hr/>
                <i title="Nome e Sobrenome" style={{color:"#63b8b2"}} class="small material-icons">account_circle</i>
                <h3 className="info-client">João da silva</h3>
                <i title="Email" style={{color:"#63b8b2"}} class="small material-icons">mail</i>
                <h3 className="info-client">joaodasilva@gmail.com</h3>
                <i title="Senha" style={{color:"#63b8b2"}} class="small material-icons">lock</i>
                <h3 className="info-client">********</h3>
                <i title="Telefone" style={{color:"#63b8b2"}} class="small material-icons">phone</i>
                <h3 className="info-client">(11) 95131-31231</h3>
                <i title="CPF" style={{color:"#63b8b2"}} class="small material-icons">folder_shared</i>
                <h3 className="info-client">562.845.483-84</h3>
                <a href="#modalCadastroFree" class="modal-trigger waves-effect waves-light btn">Atualizar</a>
              </div>
            </div>
          </div>
          <ModalCadastroFree update={true}/>
      </main>  
    );
  }
}
