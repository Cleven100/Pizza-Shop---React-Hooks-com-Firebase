import styled from "styled-components"
import React from 'react'
import { pizzaRed  } from "../Styles/colors"
import { Title } from "../Styles/title"

const NavbarStyled = styled.div`
font-size: 0.8em;
margin: 0;

background-color: ${pizzaRed};
position: fixed;
width: 100%;
z-index: 3;


`

const Logo = styled(Title)`

font-size: 4em;
color: white;
text-shadow: 1px 1px 4px #380502;
margin: 10px 0 -9px 10px;
padding: 10px


`

export function Navbar() {
    return (
        <div>
          <NavbarStyled>
              <Logo>
                  Pizzaria 🍕
              </Logo>    
            
          </NavbarStyled>
        </div>
    )
        
}