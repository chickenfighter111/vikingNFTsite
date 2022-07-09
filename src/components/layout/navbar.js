import React, { Component } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Badge } from "react-bootstrap";

const MenuItems = [
  {
    title: "Home",
    cName: "home1",
    id: "welcomeContainer",
    eventKey: "1",
  },
  {
    title: "Introduction",
    cName: "intro1",
    id: "introduction",
    eventKey: "2",
  },
  {
    title: "Roadmap",
    cName: "road1",
    id: "roadmap",
    eventKey: "3",
  },
  {
    title: "Team",
    cName: "team1",
    id: "team",
    eventKey: "4",
  }
];

export default class MyNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect className="anav" fixed="top" expand="lg">
        <Nav className="m-auto Navigation aToggle">
          <Navbar.Toggle/>
          <Navbar.Collapse id="basic-navbar-nav">
            {MenuItems.map((item, idx) => {
              return (
                  <Link
                    activeClass="activeNavLink"
                    to={item.id}
                    spy={true}
                    smooth={true}
                    exact={true}
                    offset={-80}
                    duration={3000}
                  >
                    <Nav.Link
                  className={item.cName}
                  key={idx}
                  eventKey={item.eventKey}
                >
               
                  {item.title}
                
                </Nav.Link>
                  </Link>
              );
            })}
                 <Nav.Link
                  className="team1"
                  eventKey="5"
                >
                  Staking
                  <Badge className="rdbage" pill>Live</Badge>
                </Nav.Link>
                <Nav.Link
                  className="team1"
                  eventKey="6"
                >
                  Sniping
                  <Badge pill  className="zbadge">Coming soon!</Badge>
                </Nav.Link>
            <Nav.Link eventKey="7"
            href="https://twitter.com/SoValhallaNFT">
              <a className="logo-item fab fa-twitter fa-2x" href="https://twitter.com/SoValhallaNFT">{null}</a>
            </Nav.Link>
            <Nav.Link eventKey="8" href="https://twitter.com/SoValhallaNFT">
              <a className=" logo-item fab fa-discord fa-2x" href="https://twitter.com/SoValhallaNFT">{null}</a>
            </Nav.Link>
          </Navbar.Collapse>
        </Nav>
      </Navbar>
    );
  }
}
