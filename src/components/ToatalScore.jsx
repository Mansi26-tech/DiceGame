import React, { useContext } from 'react';
import styled from 'styled-components';
import Gameplay from './Gameplay';



const ToatalScore = ({score}) => {
   
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default ToatalScore;

const ScoreContainer=styled.div`
   max-width: 200px;
   text-align: center;
   margin-top: -30px;
   margin-left: 30px;
   
 h1{
     
     
     /* line-height: 100px; */
     font-size:100px;
     margin-bottom: -20px;  
 }
 p
{ 
    font-size: 24px;
    font-weight: 500px;
}

`;

