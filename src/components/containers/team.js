import { Component } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import t1 from "../static/media/team/t1.jpg";
import t2 from "../static/media/team/t2.png";
import t3 from "../static/media/team/t3.png";

const TeamMembers = [
  {
    name: "RagnarSOL",
    role: "Founder",
    pp: t1,
  },
  {
    name: "Bjorn_SOL",
    role: "Co-founder & DEV",
    pp: t2,
  },
  {
    name: "Floki.sol",
    role: "Marketing",
    pp: t3,
  }
];

export default class Team extends Component {
  render() {
    return (
      <Container className="teamContainer" id="team">
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
      </Container>
    );
  }
}
