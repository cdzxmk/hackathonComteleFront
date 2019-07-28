import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './styles.css';
import Chart from 'chart.js';
import {WOW} from 'wowjs';
import ModalCadastroPremium from '../modalCadastro/ModalCadastroPremium';
import ModalCadastroFree from '../modalCadastro/ModalCadastroFree';
// import { Container } from './styles';

export default class views extends Component {
 

  componentDidMount(){
    new WOW().init();
    this.criaGrafico();
  }

  criaGrafico = () =>{
    new Chart(document.getElementById("line-chart"), {
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
        <div className="background">
        <Navbar/>
        <div className="money">
          <div style={{marginRigth:"20%"}}>
              <h1 className="wow bounceInUp anuncio-cash">Analise<br/> Cotações</h1>
              <p className="wow bounceInUp anuncio-cash-body">Tenha controle <span style={{fontWeigth:"bold!important"}}>total</span> das taxas de <br/>câmbio com auxilio de analises e gráficos precisos.</p>
              <a href="#infos" className="waves-effect yellow accent-4 waves-light btn-large btn-main"><i className="material-icons right">insert_chart</i>Informações</a>
            </div>
            <img className="responsive-img" src={"./assets/render-carteira.png"} alt="Cash"></img>
          </div>
        </div>
        <div className="background-red">
           <div className="content">
            <h1 id="infos" className="wow bounceInUp anuncio-cash title-red">GRÁFICOS PARA<br/> ANÁLISES DE CÂMBIO</h1>
            <div className="box-graphics">
              <canvas id="line-chart" className="responsive-graphic"></canvas>
              <a href="#price" className="waves-effect yellow accent-4 waves-light btn-large btn-main"><i className="material-icons right">attach_money</i>Planos</a>
            </div>
           </div>
        </div>
        <div className="background-planos">
           <div id="price" className="main-box">
              <div style={{borderTop:"solid #ffd600 10px"}} className="wow fadeIn box-intern">
                <h1 className="title-box">PREMIUM</h1>
                <i style={{color:"#ffd600"}} className="medium material-icons">insert_chart</i>
                <h1 className="title-box"><small style={{fontWeigth:"0"}}>R$</small>7,50</h1>
                <p className="vantages">Acesso á Gráficos Real Time<i style={{color:"green"}} className="small material-icons">done</i></p>
                <p className="vantages">Envio de SMS para Notificação<i style={{color:"green"}} className="small material-icons">done</i></p>
                <p className="vantages">Favoritar Moedas<i style={{color:"green"}} className="small material-icons">done</i></p>
                <a disabled d="premium" href="#!" className="modal-trigger waves-effect yellow accent-4 waves-light btn-large btn-main"><i className="material-icons right">thumb_up</i>Tenho Interesse!</a>
                <small style={{fontWeight:"thin", color:"gray"}}className="vantages">Em breve</small>
              </div>
              <div style={{borderTop:"solid #63b8b2 10px"}}className="wow fadeIn box-intern">
              <h1 className="title-box">FREE</h1>
              <i style={{color:"#63b8b2"}} className="medium material-icons">assignment_late</i>
              <h1 className="title-box"><small style={{fontWeigth:"0"}}>R$</small>0,00</h1>
                <p className="vantages">Acesso á Gráficos Real Time<i style={{color:"green"}} className="small material-icons">done</i></p>
                <p className="vantages">Envio de SMS para Notificação <i style={{color:"green"}} className="small material-icons">done</i></p>
                <p className="vantages">Favoritar Moedas <i style={{color:"red"}} className="small material-icons">close</i></p>
                <a id="free" href="#modalCadastroFree" className="modal-trigger waves-effect  teal lighten-2 waves-light btn-large btn-main"><i className="material-icons right">thumb_up</i>Tenho Interesse!</a>
              </div>
           </div>
        </div>
        <ModalCadastroPremium/>
        <ModalCadastroFree/>
      </main>
    );
  }
}
