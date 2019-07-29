import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/Navbar';
import Chart from 'chart.js';
import api from '../../services/api';

export default class AreaLogada extends Component {

  componentDidMount(){ 
    this.carregaMoedas();
    this.criaGrafico('dolar');
  }

  carregaMoedas = async () =>{
    // const response = await api.get('/url');
    const response = await api;
    response.docs.map((moeda)=>{
      this.setState = moeda;
    })
  }

  criaGrafico = (idCanvas)=>{
    new Chart(document.getElementById(idCanvas), {
      type: 'line',
      data: {
        labels: [29,28,27,26,25],
        datasets: [{ 
            data: [2.50,3.20,3.40,3.10,2.80,4,4.14,3.70,3.10,5],
            label: "Dolar",
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
            <div className="moeda">
              <h4 className="title-moeda"><img style={{width:"70px",heigth:"70px"}}className="responsive-img" alt="Money" src={"./assets/dolar.png"}/>USD</h4>
              <canvas id="dolar" className="responsive-graphic"></canvas>
            </div>
            {console.log(this.state)}
          </div>
        </div>
      </main>
    );
  }
}
