import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import Carousel from "better-react-carousel";
import logo from "../static/media/0.png";
import logo1 from "../static/media/1.png";
import logo2 from "../static/media/2.png";
import logo3 from "../static/media/3.png";
import logo4 from "../static/media/4.png";
import logo5 from "../static/media/5.png";
import logo6 from "../static/media/6.png";
import logo7 from "../static/media/7.png";
import logo9 from "../static/media/9.png";
import logo10 from "../static/media/10.png";
import logo11 from "../static/media/11.png";
import logo12 from "../static/media/12.png";
import logo13 from "../static/media/13.png";
import logo14 from "../static/media/14.png";
import logo15 from "../static/media/15.png";
import logo16 from "../static/media/16.png";

import Titre from "./titre";

class WelcomeContainer extends Component {
  render() {
    return (
      <Container id="welcomeContainer">
        <Titre />
        <Row>
          <Container>
            <div className="image">
              <Carousel
                className="Carrousel"
                cols={4}
                rows={1}
                gap={1}
                autoplay={2000}
                loop={true}
                hideArrow={true}
                mobileBreakpoint={200}
              >
                <Carousel.Item>
                  <img width="100%" src={logo} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo1} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo2} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo3} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo4} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo5} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo6} />
                </Carousel.Item>
                <Carousel.Item>
                  <img width="100%" src={logo7} />
                </Carousel.Item>
              </Carousel>

              <Row>
                <Container>
                  <div className="image2">
                    <Carousel
                      className="Carrousel"
                      cols={4}
                      rows={1}
                      gap={1}
                      autoplay={2000}
                      loop={true}
                      hideArrow={true}
                      mobileBreakpoint={200}
                    >
                      <Carousel.Item>
                        <img width="100%" src={logo9} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo10} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo11} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo12} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo13} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo14} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo15} />
                      </Carousel.Item>
                      <Carousel.Item>
                        <img width="100%" src={logo16} />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </Container>
              </Row>
            </div>
          </Container>
        </Row>
      </Container>
    );
  }
}

export default WelcomeContainer;
