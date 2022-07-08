import React from "react";
import { Component } from "react";
import { Container } from "react-bootstrap";
import logo from "../static/media/V.png";


export default class Titre extends Component {
  render() {
    return (
      <Container className="welcomeContainer">
        <h1 className="titleText">
          <Container>
          <p class="gradient-text">Soldiers of  <img className="logoVK" src={logo}/>alhalla</p>
          </Container>
          
        </h1>
      </Container>
    );
  }
}
