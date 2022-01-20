import React from 'react'
import styled from 'styled-components'
import { foods } from '../Data/FoodData'
import { Food, FoodGrid, FoodLabel } from './FoodGrid'


const MenuStyled = styled.div`


height: 1000px;

margin:  2px 20px 50px 20px;

`



export function Menu({setOpenFood}){
return <MenuStyled>
        <h1>Menu</h1>
       <FoodGrid>
               {foods.map(food => (
                 
                  <Food onClick={() => {
                    setOpenFood(food.name)
                  }}>
                      <FoodLabel>{food.name}
                      </FoodLabel> 
                  </Food>
                  
                    ))}
        </FoodGrid>
       </MenuStyled>
}