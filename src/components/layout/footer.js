import { Container, Row } from 'react-bootstrap';
import { Component } from 'react';
import logo from "../static/media/V.png";


export default class Footer extends Component{

    render(){
        return (
         
            <div className="globalfooter">
            <Container
              className="text-center text-dark p-3"
            >
              <Row>
              
              <a href="/">
                  <img
                    src={logo}
                    alt = ""
                    className="miniLogo"
                    style={{ margin: "auto", width: "100%", height: "100%" }}
                  />
                </a>
              </Row>
              © 2022 Copyright:
              <a className="text-dark" href="/">
               Viking NFT
              </a>
            </Container>
            </div>
         
       
        );
    }
}