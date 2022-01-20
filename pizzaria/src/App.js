import React, {useState} from "react";
import { createGlobalStyle } from 'styled-components'
import './index.css'
import { Navbar } from "./Navbar/Navbar";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { Banner } from './Banner/Banner'
import { Menu } from "./Menu/Menu";

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

 
    const[openFood, setOpenFood] = useState()

    return(
      <div>
        <GlobalStyle/>
        <FoodDialog/>
        <Navbar/>
       
        <Banner/>
         
        <div>{openFood}</div>
        <Menu setOpenFood={setOpenFood}/>
       
      </div>
    )
  }



export default App;
