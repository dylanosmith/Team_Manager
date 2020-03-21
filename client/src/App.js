import React from 'react';
import {Router} from '@reach/router';
import PlayersList from './components/PlayersList';
import PlayerForm from './components/PlayerForm';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      
        <PlayersList path="/" />
        <PlayerForm path="/player/add" />
      
      </Router>


    </div>
  );
}

export default App;
