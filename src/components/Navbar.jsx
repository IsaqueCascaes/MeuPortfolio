import { Component } from "react";
import logo from "../assets/formato-html.png";

import "../css/navbar.css";

export default class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <nav>
          <a href="../App.jsx">
            <img src={logo} alt="" />
          </a>
          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "#navbar active" : "navbar"}
            >
              <li>
                <a>Inicio</a>
              </li>
              <li>
                <a href="#SobreMim">Sobre mim</a>
              </li>
              <li>
                <a>Projetos</a>
              </li>
              <li>
                <a>Contato</a>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleclick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
        </nav>
      </>
    );
  }
}
