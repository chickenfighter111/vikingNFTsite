import React, {Component, useEffect } from 'react';
import {Link} from 'react-scroll';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MenuItems= [
    
  {
        title: "Home",
        cName: "nav-item home1",
        id: "welcome"
    }, 
    {
        title: "Introduction",
        cName: "nav-item intro1",
        id: "introduction"
    },
    {
        title: "Roadmap",
        cName: "nav-item road1",
        id: "roadmap"
    },
    {
        title: "Team",
        cName: "nav-item team1",
        id: "team"
    }
];

export default class MyNavbar extends Component {
    render(){
        return (
          <Navbar className='anav' fixed="top">
            <Container>
              <Nav className="me-auto justify-content-center Navigation">
                <Navbar.Collapse id="basic-navbar-nav">
                  {MenuItems.map((item, idx) => {
                    return (
                      <Nav.Link className={item.cName} key={idx}>
                        <Link
                          activeClass="active"
                          to={item.id}
                          spy={true}
                          smooth={true}
                          exact={true}
                          offset={0}
                          duration={1000}
                        >
                          {item.title}
                        </Link>
                      </Nav.Link>
                    );
                  })}
                </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar>
        );
    }
}