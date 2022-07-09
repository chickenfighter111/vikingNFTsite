import { Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import video from "../static/media/vid.mp4";
import pointa from "../static/media/POINTA.jpg";
import pointb from "../static/media/POINTB.jpg";
import AOS from "aos";

import "aos/dist/aos.css";

const ProjectIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <Container className="introContainer" id="introduction">
        <Row>
          <h2 data-aos="zoom-in" data-aos-duration={500}>F*ck the WL meta , LFG to the Valhalla</h2>
        </Row>
        <Container data-aos="fade">
            <h3>We start here...</h3>
          </Container>
          <Container data-aos="fade-left">
            <img className="point_img" src={pointa} />
          </Container>
          <Container data-aos="fade-down">
            <h3>Then we sail...</h3>
          </Container>
        <Row className="onroad" data-aos="fade">
          <video autoPlay={true} loop={true} muted>
            <source src={video} type="video/mp4" />
          </video>
        </Row>
        <Container data-aos="fade-up">
            <h3>To Valhalla!</h3>
          </Container>
          <Container data-aos="fade-right">
            <img className="point_img" src={pointb} />
          </Container>
    </Container>
  );
};

export default ProjectIntro;
