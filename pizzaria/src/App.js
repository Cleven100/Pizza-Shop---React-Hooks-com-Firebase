import React, {useState} from "react";
import { createGlobalStyle } from 'styled-components'
import './index.css'
import { Navbar } from "./Navbar/Navbar";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Banner } from './Banner/Banner'
import { Menu } from "./Menu/Menu";
import { Order } from "./Order/Order";
import { useOpenFood } from "./Hooks/useOpenFood";
import {useOrders} from "./Hooks/useOrders";

const GlobalStyle = createGlobalStyle`
html{
 margin: -25px 0 0 0;
}
body{
  margin: 0 !important;
  padding: 0;
  font-family: 'Roboto', sans-serif;
 }
 
 h1, h2 , h3{
  font-family: 'Oswald', sans-serif;S
 }

`

function App(){

 
    const openFood = useOpenFood()
    const orders = useOrders()

    return(
      <div>
        <GlobalStyle/>
        <FoodDialog {...openFood} {...orders}/>
        <Navbar/>
        <Order {...orders}/>
        <Banner/>
        <Menu {...openFood}/>
       
      </div>
    )
  }



export default App;
