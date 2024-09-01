import React, { useState } from 'react';
import styled from 'styled-components';
import Startgame from './components/startgame';
import Gameplay from './components/Gameplay';



function App() {
  const [isGameStarted, setGameIsStarted] = useState(false);

  const toggleToStartTheGame = () => {
    setGameIsStarted(true);
  };

  return (
    <>
      {isGameStarted ? <Gameplay /> : <Startgame toggle={toggleToStartTheGame} />}
    </>
  );
}

export default App;