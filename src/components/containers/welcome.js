import { Container, Row, Col } from 'react-bootstrap';
import { Component } from 'react';
import Carousel from 'better-react-carousel'

class WelcomeContainer extends Component{

    render(){
        return(
                <Container id="welcomeContainer">
                    <Row>
                        <Col className='colGauche'>
                        </Col>
                        <Col className='colCentre'>
                            <h3> Soldiers Of Valhalla!</h3>
                        </Col>
                        <Col className='colDroite'>
                        </Col>
                    </Row>
                    <Row>
                        <Container>
                            <Carousel cols={3} rows={1} gap={1}autoplay={3000} loop={true} hideArrow={true} mobileBreakpoint={200}>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=1" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=1" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=2" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=1" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img width="100%" src="https://picsum.photos/800/600?random=3" />
                                </Carousel.Item>
                            </Carousel>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                </Container>
        )
    }
}

export default (WelcomeContainer);