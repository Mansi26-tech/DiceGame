import React, { useState } from 'react'
import styled from 'styled-components'
import ToatalScore from './ToatalScore';
import Gameplay from './Gameplay';

export default function Numberplate({ setError,error, setNumber,setClickedValue}) {
    const arrayNumber=[1,2,3,4,5,6];
    const numberSelectorHandler = (value) => {
      setClickedValue(value);
      setError("");
    };
  return (
    
     
    <NumberContainer>
    <p className='error'>{error}</p>
        <div   className='numberplate'>
          {
            arrayNumber.map((value,i)=>(
               <Box key={i} 
               isSelected={value==setNumber}
               onClick={()=>{numberSelectorHandler(value)}}>{value}</Box>
               
        ))
          }      
    </div>
    <p>Select Number</p>
    </NumberContainer>
   
    
  );
};

const NumberContainer=styled.div`
        margin-top: 52px;
        display: flex;
        flex-direction: column; 
        align-items: flex-end;
 .numberplate{
      display:flex;
      gap:10px;
}
p{
    
    font-size: 24px;
    font-weight: 500px;
}
`;


const Box=styled.div`
  height: 72px;
  width: 72px;
  border:1px solid black;
  display:grid;
  place-items:center;
  background-color: ${(props)=>(props.isSelected ? "black":"white")};
  color:${(props)=>(props.isSelected ? "white":"black")}; ;

`;
