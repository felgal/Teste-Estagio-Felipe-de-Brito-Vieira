import React, { Component } from "react";
import styled from "styled-components";
import {Menu} from "styled-icons/boxicons-regular"

import imgPerfil from '../../imagens/navbar/perfil.png';

class UserMenu extends React.Component{
	 constructor(){
        super();

        this.state = {
           aberto: false
        };
		
		this.abreMenu = this.abreMenu.bind(this);
		this.fechaMenu = this.fechaMenu.bind(this);
    };
	
	abreMenu(){
		this.setState({aberto: true})
	}
	fechaMenu(){
		this.setState({aberto: false})
	}
	
	render() {
		return(
			<AparenciaMenu aberto={this.state.aberto}>
				<InformacoesUsuario>
					<table>
						<tr>
							<th>
								<Image src={imgPerfil} />
							</th>
							<th>
								<TextoMenu>
									Usuário teste
								</TextoMenu>
								<TextoCodigo>
									016.672.131-05
								</TextoCodigo>
							</th>
							<th>
								<IconeMenu />
							</th>
						</tr>
					</table>
					
				</InformacoesUsuario>
			</AparenciaMenu> 
		)
	}
}

export default UserMenu

export const IconeMenu = styled(Menu)`
  max-width:37px;
  color: #28F3BD;
  margin-left:55px;
`;

const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
  float: left;
  margin-right:15px;
`;


const TextoMenu = styled.div`
  color:#B5F7ED;
  textAlign: center;
  font-size: 16px;
  font-weight: 300;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;
  

const TextoCodigo = styled.div`
  color:#B5F7ED;
  opacity:0.5;
  text-align: center;
  font-size: 11px;
  fontWeight: Semibold;
  letter-spacing:2.45px;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;


const InformacoesUsuario = styled.div`
	margin-top:auto;
	textAlign: center;
	margin-bottom:auto;
	min-width:200px;
`

const AparenciaMenu = styled.div`
	padding-left: 20px;
	padding-right: 30px;
	display: flex;
	margin-left: auto;
	background: #1F2D2E 0% 0% no-repeat padding-box;
`;
