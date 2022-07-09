import { Container, Badge, Row } from "react-bootstrap";
import m from "../static/media/mmm.PNG";

const RoadMap = () => {
  return (
    <Container className="roadmapContainer" id="roadmap">
      <h2 className="aTitle">Soldiers of Valhalla Roadmap</h2>
      <Row>
        <img className="roadMapImg" src={m} alt="" />
      </Row>
        <Badge pill className="zzbadge">
          <h5>Plunder Map V2 coming soon</h5>
        </Badge>
    </Container>
  );
};

export default RoadMap;
