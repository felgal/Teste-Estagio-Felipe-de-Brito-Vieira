import React from 'react'
import styled from "styled-components";

import imgLogo from '../../imagens/navbar/logo.png';

const Logo = () =>{
	return(
		<Image src={imgLogo}/>
	)
}

export default Logo

const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
  margin: auto 0;
  padding: 14px;
  padding-right: 30px;
`;
