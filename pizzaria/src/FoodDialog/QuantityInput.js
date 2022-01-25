import React from "react";
import styled from "styled-components";
import { pizzaRed } from "../Styles/colors";




const QuantityInputStyled = styled.input`

font-size: 18px;
width: 20px;
text-align: enter;
border: none;
outline: none;
`

const IncrementContainer = styled.div`
display: flex;
height: 24px;
padding: 20px;



`



const IncrementButton = styled.div`
width: 25px;
color: #f44336;
font-size: 20px;
text-align: center;
cursor: pointer;
line-height: 23px;
margin: 0px 15px;
border: 1px solid #f44336;
border: 1px solid ${pizzaRed};
${({ disable }) =>
disable && 
` opacity: 0.5;
   pointer-events: none;

`
}&:hover {
    background-color: #ffe3e3;
}



`

export function QuantityInput({quantity}){
    return (
      
   <IncrementContainer>
       <div>Quantidade: </div>
       <IncrementButton onClick ={() => {
           quantity.setValue(quantity.value - 1)
       
       }} disable={quantity.value === 1}> -   </IncrementButton>
       <br/>
     <QuantityInputStyled {...quantity}/>
      <IncrementButton onClick ={() => {
           quantity.setValue(quantity.value + 1)
       }
        }>+ </IncrementButton>
    </IncrementContainer>
    )
}