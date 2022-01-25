import React from 'react';
import styled from 'styled-components';
import { DialogContent, DialogFooter, CofirmButton, ConfirmButton } from '../FoodDialog/FoodDialog';
import { formatPrice } from '../Data/FoodData';
import { getPrice } from '../FoodDialog/FoodDialog';


let valor2;

const OrderStyled = styled.div`

position: fixed;
right: 0px;
top: 500px;
width: 300px;
background-color: white;
height: 50%;
z-index: 10;
box-shadow: 4px 0px 5px 4px grey;

`

const OrderContent = styled.div`

display: flex;
flex-direction: column;
padding: 20px;


`
const OrderContainer = styled.div`
padding: 10px 0px;
border-bottom: 1px solid grey;

`
const OrderItem = styled.div`

padding: 10px 0x;
display: grid;
grid-template-columns: 20px 150px 20px 60px;
justify-content: space-between;

`

const notVisible = styled.div`
visibility: hidden;
font-size: 150px;

`






export function Order({orders}){

     const subtotal = orders.reduce((total, order) => {
       
        return total + getPrice(order)

     }, 0)

    
    return( <OrderStyled>
       {orders.length === 0 ?  <OrderContent> Suas ordens estão aqui </OrderContent> :
        <OrderContent> 
            {" "}
            <OrderContainer> Suas Ordens:  </OrderContainer>
            { orders.map(order => (
                
               <OrderContainer>
                   
                  <OrderItem >
                        
                      <div>{order.quantity}</div>
                     <div>{order.name}</div> 
                     <div/>
                      <div >{formatPrice(getPrice(order))}</div>
                     
                      
                       
                      


                  </OrderItem >   
                 
               </OrderContainer>
              
             
            ))
               
           
            }
             <OrderContainer>
                 <OrderItem>
                     <div/>
                     <div>SubTotal: {formatPrice(subtotal)}</div>
                 </OrderItem>
             </OrderContainer>
       </OrderContent>}
         
       

       
            
            <DialogFooter>
                <ConfirmButton>Checkout</ConfirmButton>
            </DialogFooter>
        
    </OrderStyled>
    )
}