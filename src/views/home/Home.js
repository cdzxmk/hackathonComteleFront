import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './styles.css';
import Chart from 'chart.js';
// import { Container } from './styles';

export default class views extends Component {
 

  componentDidMount(){
    
    var ctx = document.getElementById('myChart');
    var myDoughnutChart = new Chart(ctx, {
      type: 'doughnut',
      data:{
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433],
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      }
    });


  }


  render() {
    return(
      <main>
        <div className="background">
        <Navbar/>
        <div className="money">
          <div style={{marginRigth:"20%"}}>
              <h1 className="anuncio-cash">Analise<br/> Cotações</h1>
              <p className="anuncio-cash-body">Tenha controle <span style={{fontWeigth:"bold!important"}}>total</span> das taxas de <br/>câmbio com auxilio de analises e gráficos precisos.</p>
              <a href="#!" class="waves-effect yellow accent-4 waves-light btn-large btn-main"><i class="material-icons right">insert_chart</i>Informações</a>
            </div>
            <img className="responsive-img" src={"./assets/render-carteira.png"} alt="Cash"></img>
          </div>
        </div>
        <div className="background-red">
           <div className="content">
            <h1 className="anuncio-cash title-red">GRÁFICOS PARA<br/> ANÁLISES DE CÂMBIO</h1>
            <canvas id="myChart" style={{width:"400", height:"400"}}></canvas>
           </div>
        </div>
      </main>
    );
  }
}
