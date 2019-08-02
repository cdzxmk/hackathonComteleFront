import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/Navbar';
import Chart from 'chart.js';
import api from '../../services/api';
import ModalSelecionarMoedas from '../modalSelecionarMoedas/ModalSelecionarMoedas';

export default class AreaLogada extends Component {

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

  criaGrafico = (idCanvas,dias,cotacoes,nomeDaMoeda)=>{
    setTimeout(() => {
      new Chart(document.getElementById(idCanvas), {
        type: 'line',
        data: {
          labels: dias,
          datasets: [{ 
              data: cotacoes,
              label: nomeDaMoeda,
              borderColor: "#3e95cd",
              fill: false
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: 'Cotação por dia'
          },
          responsive:true
        }
      });
    }, 1);
  }

  render() {
    return(
      <main>
        <div className="background-areaLogada">
          <Navbar logged={true}/>
          <div className="title-areaLogada">
            <h1 className="title">MOEDAS</h1>
          </div>
          <div className="content-areaLogada">
            {this.state.moedas.map((coin)=>{
              return(
                <div key={coin.sigla} className="moeda">
                  <h4 className="title-moeda"><img style={{width:"70px",heigth:"70px"}}className="responsive-img" alt="Money" src={"./assets/dolar.png"}/>{coin.sigla}</h4>
                  <canvas id={coin.tipo} className="responsive-graphic"></canvas>
                  {
                    this.criaGrafico(coin.tipo,coin.dias,coin.cotacoes,coin.nome)
                  }
                </div>
              );
            })}
          </div>
        </div>
        <ModalSelecionarMoedas/>
      </main>
    );
  }
}
