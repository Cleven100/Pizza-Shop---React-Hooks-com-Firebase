import react from 'react'
import React from 'react'
import styled from 'styled-components'

const Dialog = styled.div`
width: 500px;
height: 500px;
background-color: white;
position: fixed;
top: 75px;
z-index: 7;
max-height: calc(100%-100px);
left: calc(50% - 250px);

`



const DialogShadow = styled.div`
position: fixed;
height: 100%;
width: 100%;
top: 0px;
background-color: black;
opacity: 0.7;
z-index: 6;

`

export function FoodDialog(){
    return <>
     <DialogShadow/>
     <Dialog>
         Test Dialog
     </Dialog>
    
     
    
    </>
}