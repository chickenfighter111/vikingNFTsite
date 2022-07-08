import { Container } from "react-bootstrap";
import "./App.css";
import WelcomeContainer from "./components/containers/welcome";
import IntroContainer from "./components/containers/intro";
import RoadMapContainer from "./components/containers/roadmap";
import TeamContainer from "./components/containers/team";
import React, { useState, useEffect } from "react";
import { BsFillFileArrowUpFill } from "react-icons/bs";
import { animateScroll as scroll } from "react-scroll";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Container className="App">
      <Container className="componentsContainer">
        <WelcomeContainer />
        <IntroContainer />
        <RoadMapContainer />
        <TeamContainer />
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <BsFillFileArrowUpFill />
        </button>
      )}
      </Container>
    </Container>
  );
};

export default App;
