
import React from 'react'
import styled from 'styled-components'
import { FoodLabel } from '../Menu/FoodGrid'


const Dialog = styled.div`
width: 500px;
height: 700px;
background-color: white;
position: fixed;
top: 75px;
z-index: 7;
max-height: calc(100%-100px);
left: calc(50% - 250px);
displey: flex;
flex-direction: column;


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
const DialogContent = styled.div`

min-height: 400px;




`


const DialogFooter = styled.div`
box-shadow: 0px -2px 10px 0px grey;
height: 80px;



`






const DialogBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
background-image: URL("img/pizza1.png");
background-position: center;
background-size: cover;

`

const DialogBannerName = styled(FoodLabel)`
top: 75px;
font-size: 30px;
padding: 10px;
`



export function FoodDialog({openFood, setOpenFood}){
    function close(){
      setOpenFood();
    }

    if(!openFood) return null;
    return (
        <>
     <DialogShadow onClick={close}/>
     <Dialog>
         <DialogBanner img={openFood}>

             <DialogBannerName>{openFood.name}</DialogBannerName>

         </DialogBanner>

         <DialogContent>

         </DialogContent>

         <DialogFooter>

         </DialogFooter>
        
     </Dialog>
     </>
    )
     
    
    
}