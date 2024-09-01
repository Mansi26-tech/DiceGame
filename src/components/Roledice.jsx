import React, { useState } from 'react'
import styled from 'styled-components'
import Gameplay from './Gameplay'

const Roledice = ({currentDice,setDice}) => {
    

    
  return (
    <Diceconatiner>
    <div className='dice' onClick={setDice}>
          <img src={`/images/dice_${currentDice}.png`} alt='dice'/>
    </div>
    <p>Click on dice to roll</p>
    
    </Diceconatiner>

  )
}
export default Roledice;

const Diceconatiner =styled.div`
display: flex;
flex-direction: column;
align-items: center;
 justify-content: center;
 .dice
 {
    cursor: pointer;
 }
 p
 {
      
    font-size: 24px;
    font-weight: 500px;
 }
`;
