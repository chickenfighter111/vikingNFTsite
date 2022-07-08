import { Container } from "react-bootstrap";
import { Element } from "react-scroll";
import m from "../static/media/mm.png";

const RoadMap = () => {
  return (
      <Element name="roadmap">
        <Container className="roadmapContainer">
          <h2 className="aTitle">Soldiers of Valhalla Roadmap</h2>
          <img className="roadMapImg" src={m}  alt=""/>
        </Container>
      </Element>
  );
};

export default RoadMap;
