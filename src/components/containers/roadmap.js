import { Container } from "react-bootstrap";
import m from "../static/media/mmm.PNG";

const RoadMap = () => {
  return (
     
        <Container className="roadmapContainer" id="roadmap">
          <h2 className="aTitle">Soldiers of Valhalla Roadmap</h2>
          <img className="roadMapImg" src={m}  alt=""/>
        </Container>
  );
};

export default RoadMap;
