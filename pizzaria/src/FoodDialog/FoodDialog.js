
import React from 'react'
import styled from 'styled-components'
import { FoodLabel } from '../Menu/FoodGrid'
import { pizzaRed } from '../Styles/colors'
import { Title } from '../Styles/title'
import { formatPrice } from '../Data/FoodData'
import { QuantityInput } from './QuantityInput'
import { useQuantity } from '../Hooks/useQuantity'
import { Toppings } from './Toppings'



const Dialog = styled.div`
width: 500px;
height: 700px;
background-color: white;
position: fixed;
top: 75px;
z-index: 7;
max-height: calc(100%-100px);
left: calc(50% - 250px);
display: flex;
flex-direction: column;
border-radius: 5px;

`
export const ConfirmButton = styled.div`


margin: 10px;
color: white;
height: 20px;
border-radius: 5px;
padding: 10px;
text-align: center;
width: 200px;
cursor: pointer;
background-color: ${pizzaRed}
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
export const DialogContent = styled.div`

min-height: 420px;
box-shadow: -2px 0px 10px 0px grey;
text-align: center;
border-radius: 5px;




`


export const DialogFooter = styled.div`

display: flex;
justify-content: center;
`






const DialogBanner = styled.div`
min-height: 200px;
margin-bottom: 20px;
background-image: URL("img/pizza1.png");
background-position: center;
background-size: cover;
border-radius: 5px;

`

const DialogBannerName = styled(FoodLabel)`
top: 75px;
font-size: 30px;
padding: 10px;
`


 export function getPrice(order){
        return order.quantity * order.price;
    }

 

 

export function FoodDialogContainer({openFood, setOpenFood, setOrders, orders}){
    const quantity = useQuantity(openFood && openFood.quantity)
    function close(){
      setOpenFood();
    }

    if(!openFood) return null;

    const order = {
       ...openFood,
       quantity: quantity.value
    }

   

    function addToOrder(){
     setOrders([...orders, order]);
     close();
    }


    return (
        <>
     <DialogShadow onClick={close}/>
     <Dialog>
         <DialogBanner img={openFood}>

             <DialogBannerName>{openFood.name}</DialogBannerName>

         </DialogBanner>

         <DialogContent>
             <QuantityInput  quantity={quantity}/>
             
         </DialogContent>

         

         <DialogFooter>
                 <ConfirmButton onClick={addToOrder}>
                 Adicionar ao Carrinho
                 </ConfirmButton> 
         </DialogFooter>
        
     </Dialog>
     </>
    )
     
    
    
}

export function FoodDialog(props){
     if(!props.openFood) return null;

     return <FoodDialogContainer {...props} />
}