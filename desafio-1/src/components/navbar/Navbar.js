import React from 'react'
import styled from "styled-components";
import { animated } from "react-spring";

import Logo from './Logo';
import Pesquisa from './Pesquisa';
import UserMenu from './UserMenu';


const Navbar = (props) => {
  return (
    <>
      <NavBar>
        <FlexContainer>
			<Logo />
			<Pesquisa />
			<UserMenu />
        </FlexContainer>
      </NavBar>
   </>
  )
}

//position: fixed;
const NavBar = styled(animated.nav)`
  width: 100%;
  top: 0;
  left: 0;
  background: #223131;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  display: flex;
  margin: auto;
  height: 60px;
`;


export default Navbar
