import { Container } from 'react-bootstrap'
import './App.css';

import  WelcomeContainer from './components/containers/welcome';
import  IntroContainer from './components/containers/intro';
import  RoadMapContainer from './components/containers/roadmap';
import  TeamContainer from './components/containers/team';

function App() {
  return (
    <Container className="App">
      <Container className='componentsContainer'>
        <WelcomeContainer/>
        <IntroContainer/>
        <RoadMapContainer/>
        <TeamContainer/>
      </Container>
    </Container>
  );
}

export default App;
