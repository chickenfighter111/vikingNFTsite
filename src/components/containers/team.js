import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import pp from "../static/media/team/pp.jpg";

const TeamMembers = [
  {
    name: "King CFC#0205",
    role: "Team",
    pp: pp,
  },
  {
    name: "MoonDrag0nz CFC#1248",
    role: "Team",
    pp: pp,
  },
  {
    name: "SpYro#1830",
    role: "Moderator",
    pp: pp,
  },
  {
    name: "DouilleHeinz#9010",
    role: "Dev",
    pp: pp,
  },
  {
    name: "SaMMi3#1758",
    role: "Moderator ",
    pp: pp,
  },
];

export default class Team extends Component {
  render() {
    return (
      <Container className="introContainer">
        <Container id="team">
          <h2>Team</h2>
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
                          width={288}
                          height={288}
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
      </Container>
    );
  }
}
