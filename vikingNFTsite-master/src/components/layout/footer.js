import { Container, Row } from 'react-bootstrap';
import { Component } from 'react';

export default class Footer extends Component{

    render(){
        return (
         
            <div className="globalfooter">
            <Row>
              
              <a href="https://twitter.com/ChickenFCnft">
                <img
                  //src={logo}
                  alt="React Bootstrap logo"
                  style={{ margin: "auto", width: "100%", height: "100%" }}
                />
              </a>
            </Row>
           
            <Container
              className="text-center text-dark p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2022 Copyright:
              <a className="text-dark" href="/">
               Viking NFT
              </a>
            </Container>
            </div>
         
       
        );
    }
}