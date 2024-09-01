
import React from 'react';
import styled ,{keyframes} from 'styled-components';

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div><DiceImage src='/images/dices 1.png'/></div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>play now</Button>
        </div>
    </Container>
  )
}

export default Startgame;

const fadeIn = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

const textBounce = keyframes`
0%, 100% {
    transform: translateY(0);
}
50% {
    transform: translateY(-10px);
}
`;

const Container=styled.div`
max-width:1180;
height: 100vh;
display:flex;
align-items: center;
justify-content: center;
margin:0 auto;

.content{

  display: flex;
        flex-direction: column; 
        align-items: flex-end; 
  h1 {
    font-size: 96px;
    white-space: nowrap;
    margin-bottom: 2px;
    &:hover{
      cursor: pointer;
    animation: ${fadeIn} 2s ease-in-out, ${textBounce} 1.5s ease infinite;}
  
 }}
`;
const Button=styled.button`
    border-radius:5px;
    color: white;
    padding: 10px 18px;
    min-width: 220px;
    background-color:#000000;
    border:none;   
    cursor: pointer;
    transition: 0.5s background ease-in;
    &:hover
    {
      background-color:#383838;
      border: 1px solid black;
      color:black;
      transition:0.3s background ease-in;
    }
    font-size: 16px;
    /* align-self: flex-end; */
   
 `;
 const rotate = keyframes`
 from {
     transform: rotate(0deg);
 }
 to {
     transform: rotate(360deg);
 }
`;

const bounce = keyframes`
 0%, 20%, 50%, 80%, 100% {
     transform: translateY(0);
 }
 40% {
     transform: translateY(-30px);
 }
 60% {
     transform: translateY(-15px);
 }
`;

const DiceImage = styled.img`
 width: 600px; /* Adjust size as needed */
 animation: ${rotate} 2s linear infinite, ${bounce} 3s ease infinite;
`;
