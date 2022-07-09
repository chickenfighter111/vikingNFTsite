import { Container, Badge, Row, Nav } from "react-bootstrap";
import m from "../static/media/mmm.PNG";

const RoadMap = () => {
  return (
    <Container className="roadmapContainer" id="roadmap">
      <h2 className="aTitle">Soldiers of Valhalla Roadmap</h2>
      <Row>
        <img className="roadMapImg" src={m} alt="" />
      </Row>
        <Container>
        <Badge pill className="road12 zzbadge">
          <Nav.Link>
            <h1 className="badgeTxt">Plunder Map V2 coming soon</h1>
          </Nav.Link>
        </Badge>
        </Container>
    </Container>
  );
};

export default RoadMap;
