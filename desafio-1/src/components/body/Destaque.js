import React from 'react'
import styled from "styled-components";
import imgFundo from '../../imagens/destaque/fundo.png';
import {Play2} from 'styled-icons/icomoon/';


const Destaque = (props) => {
  return (
    <>
      <DestaqueCSS>
	  {/*Table usada para separar o icone dos textos*/}
		 <TabelaMenu>
		  <LinhaMenu>
			<ColunaMenu>
				
			</ColunaMenu>
			
			<ColunaMenu >
				<IconePlay/>
			</ColunaMenu>
			
		  </LinhaMenu>
		</TabelaMenu> 
	  </DestaqueCSS>
   </>
  )
}

const LinhaMenu = styled.tr`
  width:100%;
`

const ColunaMenu = styled.td`
  width: 50%;
  text-align:center;
`
const TabelaMenu = styled.table`
	width:100%;
	height:100%;
	border-collapse: collapse;
`

const IconePlay = styled(Play2)`
	border-radius: 150px;
	max-width:150px;
	border: 4px solid;
	padding:25px;
	border-color:white;
	color: white;
	transition: padding 0.3s;
	&:hover{
		color:#B5F7ED;
		max-width:150px;
		padding: 5px;
		border-color:#B5F7ED;
	}
`

const DestaqueCSS = styled.div`
  background-image: linear-gradient(to right, rgba(24, 34, 34,1.0), rgba(24, 34, 34,1.0) 10%, rgba(24, 34, 34,0.1) 90%),
  linear-gradient(to top, rgba(24, 34, 34,1.0), rgba(24, 34, 34,0.0) 20%),
  url(${imgFundo});
  height:600px;
  background-position: right; 
  background-repeat: no-repeat;
  background-size: cover;
  
`;

export default Destaque
