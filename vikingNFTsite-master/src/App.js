import { Container } from 'react-bootstrap'
import './App.css';
import  WelcomeContainer from './components/containers/welcome';
import  IntroContainer from './components/containers/intro';
import  RoadMapContainer from './components/containers/roadmap';
import  TeamContainer from './components/containers/team';
import  Titre from  './components/containers/titre';


function App() {
 
return (
  

  <Container className="App bg-containe">
      
      <Container className='componentsContainer'>
  
     <Titre/>
      <WelcomeContainer/>
    <IntroContainer/>
     <RoadMapContainer/>
        <TeamContainer/>
      </Container>
  
  </Container>
 

  
  );
}

export default App;
