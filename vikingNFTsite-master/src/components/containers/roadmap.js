import { Component } from 'react';
import { Container, Card, ListGroup, Row, Col } from 'react-bootstrap';

const RoadMapItems= [
    {
        title: "Phase 1",
        items: [
            "Date: Late February",
            "Launch of chicken fight club NFTs:",
            "1500 animated Eggs will be released on the Solana blockchain which will later hatch into chickens.",
            "Minting : -whitelist Pre mint and public sale-whitelist: 2 NFTs per wallet",
            "Post Mint : Holders Verification",
            "Reveal day : Chicken figthers eggs will be Hatched and released in the Arena."
        ],
        sw: true
    }, 
    {
        title: "Phase 2",
        items: [
            "Date: March 2022",
            "Launching our breeding protocol on the website.",
            "You will need 2 Chicken Fighters and 150 $KAI to being able to breed one EGG, the same EGG canx² be hatched with 70 $KAI to become an Degen Chick.",
            "Degen Chick supply : 3333",
            "What is an Degen Chick? Our Degen Chick is our gen2 from our collection that will have great utility in our near future.",
        ],
        sw: false
    },
    {
        title: "Phase 3",
        items: [
            "Date: Late March 2022 / Early April 2022.",
            "Launch merchandise e-store on the website.",
            "We will release Merch NFTs, which can be exchange for physical Merch on the website. Merch NFTs will be priced for 30$ in Solana value."
        ],
        sw: true
    }, 
    {
        title: "Phase 4",
        items: [
            "Date: Mid/Late April 2022.",
            "As you can see on the sneak peek, our 1/1 unique chickens will be at first the only weapon wielders.",
            "We will release an exclusive weapons collection of 300 supply. ",
            "Fusion engine: You will be to able merge an exclusive weapon with any of your chickens.The process will cost 100$KAI"
        ],
        sw: false
    },
    {
        title: "Phase 5",
        items: [
            "Date: Mid/Late April 2022.",
            "Gamification"
        ],
        sw: true
    },  

];

export default  class RoadMap extends Component{


    render(){
        return(
            <Container>
                <Row>
                    <Col>
                        <p>Norvege</p>
                    </Col>
                    <Col>
                        <p>Traverser</p>
                    </Col>
                    <Col>
                        <p>Montagne</p>
                    </Col>
                </Row>
            </Container>
        )
      }
}