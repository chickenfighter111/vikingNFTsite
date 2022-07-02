import React, { Component } from 'react';
import {Link} from 'react-scroll';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MenuItems= [
    {
        title: "Home",
        cName: "nav-item",
        id: "welcome"
    }, 
    {
        title: "Introduction",
        cName: "nav-item",
        id: "introduction"
    },
    {
        title: "Roadmap",
        cName: "nav-item",
        id: "roadmap"
    },
    {
        title: "Team",
        cName: "nav-item",
        id: "team"
    }
];



export default class MyNavbar extends Component {
    render(){
        return(
            <Nav className="me-auto justify-content-center anav" >
            {MenuItems.map((item, idx) => {
                        return( 
                            <Nav.Link className={item.cName} key={idx} >
                                <Link
                                activeClass='active'
                                to={item.id}
                                spy={true}
                                smooth={true}
                                exact= {true}
                                offset={0}
                                duration={1000}
                                >
                                    {item.title}
                                </Link>
                            </Nav.Link >
                              )
                    })}
            </Nav>
        )
    }
}