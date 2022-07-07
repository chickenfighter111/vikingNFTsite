import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import video from "../static/media/vid.mp4";

class ProjectIntro extends Component {
  render() {
    return (
      <Container id="introduction" className="introContainer">
        <Row>
          <h2>En route vers le valhalla</h2>
        </Row>
        <Row>
          <Container>
            <p>Point A</p>
          </Container>
        </Row>
        <Row className="Image">
          <video autoPlay={true} loop={true} muted>
            <source src={video} type="video/mp4" />
          </video>
        </Row>
        <Row>
          <Container>
            <p>Point B</p>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default ProjectIntro;
