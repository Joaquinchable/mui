import React from 'react';
import './App.css';
// import GridResposive from './Components/Grid';
import Forma from './Components/Forma';
import Header from './Components/Header';
import Container from '@material-ui/core/Container';
function App() {
  return (
    <div>
        <Header/>
        <Container>
          <Forma/>
        </Container>
    </div>
  );
}

export default App;
