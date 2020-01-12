import React from 'react'
import styled from "styled-components";
import { animated } from "react-spring";



const Navbar = (props) => {
  return (
    <>
      <NavBar>
        <FlexContainer>
          <NavLinks>
            <a href="/">link n1</a>
            <a href="/">link n2</a>
            <a href="/">link n3</a>
            <a href="/">link n4</a>
          </NavLinks>
        </FlexContainer>
      </NavBar>
   </>
  )
}


const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;



export default Navbar
