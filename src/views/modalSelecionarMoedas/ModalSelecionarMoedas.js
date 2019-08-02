import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css'

export default class ModalSelecionarMoedas extends Component {
  
  componentDidMount(){ 
    this.carregaMoedas();
  }

  state = {
    moedas : [],
  }

  carregaMoedas = async () =>{
    // const response = await api.get('/url');
    const response = await api;
    this.setState({moedas:response.data});
  }
  
  render() {
    return(
        <div id="modalSelecionarMoedas" className="modal">
            <div className="modal-content">
        <h4>Moedas Favoritas</h4>
            <p>Favorite suas moedas prediletas para receber atualizações constantes!</p>
            <div className="moedas-content">
              {this.state.moedas.map((coin)=>{
              return(
                <label>
                  <input id={coin.sigla + "Check"} type="checkbox" />
                  <span style={{marginRight:"10px", paddingLeft:"20px"}}>{coin.sigla}</span>
                </label>
              )
              })}
            </div>
        </div>
        <div className="modal-footer">
          <a href="#!" className="modal-close waves-effect waves-green btn-flat">Favoritar<i style={{color:"#ffd600"}} className="material-icons">star</i></a>
        </div>
    </div>
    );
  }
}


