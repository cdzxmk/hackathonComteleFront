import React, { Component } from 'react';
import './styles.css';
import Navbar from '../../components/navbar/Navbar';
import Chart from 'chart.js';


export default class AreaLogada extends Component {

  componentDidMount(){
    this.criaGrafico("euro");
    this.criaGrafico("dolar");
  }

  criaGrafico = (idCanvas)=>{
    new Chart(document.getElementById(idCanvas), {
      type: 'line',
      data: {
        labels: [1,1.5,1.7,2,2.5,3,3.5,4,4.5,5,'Reais'],
        datasets: [{ 
            data: [2.30,2.90,3.20,4.10],
            label: "Dolar",
            borderColor: "#3e95cd",
            fill: false
          }, { 
            data: [2.80,3.0,3.40,4.45],
            label: "Euro",
            borderColor: "#8e5ea2",
            fill: false
          }, { 
            data: [3.30,2.30,2.50,5.10],
            label: "Libra",
            borderColor: "#da2",
            fill: false
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Exemplo de Cotações'
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
            <div className="moeda">
              <h4 className="title-moeda"><img style={{width:"70px",heigth:"70px"}}className="responsive-img" alt="Money" src={"./assets/dolar.png"}/>EURO</h4>
              <canvas id="euro" className="responsive-graphic"></canvas>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
