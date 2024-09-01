import React, {useState} from 'react'
import ToatalScore from './ToatalScore'
import Numberplate from './Numberplate'
import styled from 'styled-components'
import Roledice from './Roledice'
import Rules from './Rules'
import { Button, OutlineButton } from "../styled/Button";

export default function Gameplay() {
  const [score, setScore] = useState(0);
  const [setNumber, setClickedValue] = useState();
  const [currentDice, setDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (!setNumber) {
      setError("You have not selected any number");
      return;
    }

    const Number = generateRandomNumber(1, 7);
    setDice((prev) => Number);

    if (setNumber === Number) {
      setScore((prev) => prev + Number);
    } else {
      setScore((prev) => prev - 2);
    }

    setClickedValue(undefined);
  }
const resetScore = () => {
  setScore(0);
}

  return (
    <Container>
        <div className='flex'>
      <ToatalScore score={score} />
      <Numberplate 
       error={error}
        setError={setError}
       setNumber={setNumber} setClickedValue={setClickedValue}/>
    </div>
    <Roledice currentDice={currentDice} setDice={roleDice}/>
    <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>

      {showRules && <Rules />}
    </Container>
  )
}



const Container=styled.main`

.flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    

}
.btns {
    margin-top:3px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap:5px;
  }

`;
