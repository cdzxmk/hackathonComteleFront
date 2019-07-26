import React, { Component } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './styles.css';
// import { Container } from './styles';

export default class views extends Component {
  render() {
    return(
      <div className="background">
        <Navbar/>
        <div className="money">
          <div>
            <h1 className="anuncio-cash">Analise<br/> Cotações</h1>
          </div>
          <img className="responsive-img" src={"./assets/render-carteira.png"} alt="Cash"></img>
        </div>
      </div>
    );
  }
}
