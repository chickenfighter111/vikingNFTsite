import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Element } from "react-scroll";
import pp from "../static/media/team/pp.jpg";

const TeamMembers = [
  {
    name: "King CFC",
    role: "Team",
    pp: pp,
  },
  {
    name: "Zmk.sol",
    role: "Team",
    pp: pp,
  },
  {
    name: "Sing",
    role: "Dev",
    pp: pp,
  },
  {
    name: "DouilleHeinz",
    role: "Artist",
    pp: pp,
  }
];

export default class Team extends Component {
  render() {
    return (
      <Container className="teamContainer" id="team">
        <Element name="team">
          <Container>
            <h2 className="aTitle">Team</h2>
            <Container>
              <Container>
                <Row>
                  {TeamMembers.map((item, idx) => {
                    return (
                      <Col
                        style={{
                          width: "18rem",
                          margin: "auto",
                          align: "center",
                        }}
                      >
                        <Card className="teamCard" key={idx}>
                          <Card.Img
                            variant="top"
                            src={item.pp}
                            className="cardImg"
                          />
                          <Card.Body>
                            <Card.Title>{item.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {item.role}
                            </Card.Subtitle>
                          </Card.Body>
                        </Card>
                      </Col>
                    );
                  })}
                </Row>
              </Container>
            </Container>
          </Container>
        </Element>
      </Container>
    );
  }
}
