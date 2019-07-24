import React, { Component } from 'react';

// import { Container } from './styles';

// Import Materialize
import M from "materialize-css";
import './styles.css';

export default class Navbar extends Component {

    componentDidMount(){
        M.AutoInit();
    }

    render() {
        return(
            <div>
                <nav>
                    <div className="nav-wrapper brown darken-3">
                        <a href="#!" className="brand-logo center">Logo</a>
                        <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="sass.html">Entrar</a></li>
                            <li><a href="badges.html">Cadastrar</a></li>
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="sass.html">Entrar</a></li>
                    <li><a href="badges.html">Cadastrar</a></li>
                </ul>
            </div>
        );
    }
}
