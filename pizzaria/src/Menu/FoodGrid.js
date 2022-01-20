import styled from "styled-components"
import { Title } from "../Styles/title"



export const FoodGrid = styled.div`

display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 20px;

`

export const FoodLabel = styled.div`
position: absolute;
border-radius: 5px;
background-color: rgba(255,255,255, 0.5);
padding: 5px;
transition: 1s;
&:hover{
    background-color: rgba(255,255,255, 1);
    transition: 1s;
}


`

export const Food = styled(Title)`

fonte-size: 50px;
height: 150px;
padding: 10px;
background-image: url("img/pizza1.png");
background-position: center;
background-size: cover;
background-color: rgbd(233, 227, 206, 0.8);
filter: contrast(75%);
border: 5px solid rgba(215,216,215, 0.1);
border-radius: 7px;
box-shadow: 0px 0px 10px 0px grey;
transition: 1s;
&:hover{
    border: 5px solid rgba(215,216,215, 0.9);
    transition: 1s;
    cursor: pointer;
    height: 160px;
    
}





`