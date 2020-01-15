import React from "react";
import styled from "styled-components";
import {Menu, Cube,MessageDots} from "styled-icons/boxicons-regular"
import {Star, ShareAlt} from "styled-icons/boxicons-solid/"
import {Gear} from "styled-icons/octicons/"

import imgPerfil from '../../imagens/navbar/perfil.png';

class UserMenu extends React.Component{
	 constructor(){
        super();

        this.state = {
           aberto: false
        };
		
		this.abreFechaMenu = this.abreFechaMenu.bind(this);
	 };
	
	abreFechaMenu(){
		this.setState({aberto: !this.state.aberto})
	}
	
	render() {
		const { aberto } = this.state;
		return(
			<AparenciaMenu aberto={this.state.aberto}>
				<InformacoesUsuario>
					{/*essa tabela gera o menu, a primeira sequencia de tr é o header*/}
					<table>
						{/* header contendo foto, informacoes básicas e o botão para abrir o menu*/}
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
								<IconeMenu onClick={this.abreFechaMenu} />
							</th>
						</tr>
					</table>
					
					{/* Esse é o menu dropdown em si*/}
					<DropDownMenu aberto={this.state.aberto}>
						<TabelaMenu cellspacing="10">
						
							<LinhaMenuMinhaConta aberto={this.state.aberto}>
								<ColunaMenuMinhaConta aberto={this.state.aberto} >
									<TextoMinhaConta aberto={this.state.aberto}>
											Minha Conta
									</TextoMinhaConta>
								</ColunaMenuMinhaConta>
							</LinhaMenuMinhaConta>
							
							
							<LinhaMenu aberto={this.state.aberto}>
								<ColunaMenu aberto={this.state.aberto} >
									<IconeProjetos aberto={this.state.aberto}/>
								</ColunaMenu>
								<ColunaMenu aberto={this.state.aberto} >
									<TextoOpcoesMenu aberto={this.state.aberto}>
											Meus Projetos
									</TextoOpcoesMenu>
								</ColunaMenu>
							</LinhaMenu>
						
							<LinhaMenu aberto={this.state.aberto}>
								<ColunaMenu aberto={this.state.aberto} >
									<IconeEstrela aberto={this.state.aberto}/>
								</ColunaMenu>
								<ColunaMenu aberto={this.state.aberto} >
									<TextoOpcoesMenu aberto={this.state.aberto}>
											Favoritos
									</TextoOpcoesMenu>
								</ColunaMenu>
							</LinhaMenu>
							
							<LinhaMenu aberto={this.state.aberto}>
								<ColunaMenu aberto={this.state.aberto} >
									<IconeMensagem aberto={this.state.aberto}/>
								</ColunaMenu>
								<ColunaMenu aberto={this.state.aberto} >
									<TextoOpcoesMenu aberto={this.state.aberto}>
											Mensagens
									</TextoOpcoesMenu>
								</ColunaMenu>
							</LinhaMenu>
							
							<LinhaMenu aberto={this.state.aberto}>
								<ColunaMenu aberto={this.state.aberto} >
									<IconeShareAlt aberto={this.state.aberto}/>
								</ColunaMenu>
								<ColunaMenu aberto={this.state.aberto} >
									<TextoOpcoesMenu aberto={this.state.aberto}>
											Compartilhados
									</TextoOpcoesMenu>
								</ColunaMenu>
							</LinhaMenu>
							
							<LinhaMenu aberto={this.state.aberto}>
								<ColunaMenu aberto={this.state.aberto} >
									<IconeGear aberto={this.state.aberto}/>
								</ColunaMenu>
								<ColunaMenu aberto={this.state.aberto} >
									<TextoOpcoesMenu aberto={this.state.aberto}>
											Configurações
									</TextoOpcoesMenu>
								</ColunaMenu>
							</LinhaMenu>
							
						</TabelaMenu>
					</DropDownMenu>
					
					
				</InformacoesUsuario>
			</AparenciaMenu> 
		)
	}
}

export default UserMenu





{/* CSS do dropdown do menu*/}

const IconeMensagem = styled(MessageDots)`
  max-width:40px;
  padding-left:20px;
  color: #28F3BD;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.3s, opacity 0.5s;
  position:absolute;
  margin-top:-10px;
`;
const IconeEstrela = styled(Star)`
  max-width:40px;
  padding-left:20px;
  color: #28F3BD;
  position:absolute;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.3s, opacity 0.5s;
  margin-top:-10px;
`;
const IconeShareAlt = styled(ShareAlt)`
  max-width:40px;
  padding-left:20px;
  color: #28F3BD;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.2s, opacity 0.5s;
  position:absolute;
  margin-top:-10px;
`;
const IconeGear = styled(Gear)`
  max-width:40px;
  padding-left:20px;
  color: #28F3BD;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.3s, opacity 0.5s;
  position:absolute;
  margin-top:-10px;
`;
const IconeProjetos = styled(Cube)`
  max-width:40px;
  padding-left:20px;
  color: #28F3BD;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.3s, opacity 0.5s;
  position:absolute;
  margin-top:-10px;
`;



const LinhaMenu = styled.tr`
  height: ${props => props.aberto ? "40px" : "0px"};
  visibility: ${props => props.aberto ? "visible" : "hidden"};
  transition: visibility 0.3s, height 0.3s;
  width:100%;
  &:hover{
		background:#172222;
		color: #28F3BD;
  }
  &:hover td div{
		color: #28F3BD;
  }
  td:first-child { width: 50px ;}
`

const ColunaMenu = styled.td`

		background:#28F5BE0;

`


const TabelaMenu = styled.table`
	width:100%;
  border-collapse: collapse;
`

const TextoOpcoesMenu = styled.div`
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: height 0.3s, opacity 0.5s;
  color:#B5F7ED;
  margin-top:-10px;
  textAlign: center;
  position:absolute;
  font-size: 16px;
  font-weight 400;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;



const LinhaMenuMinhaConta = styled.tr`
  height: ${props => props.aberto ? "30px" : "0px"};
  visibility: ${props => props.aberto ? "visible" : "hidden"};
  transition: all 0.3s;
`

const ColunaMenuMinhaConta = styled.tr`


`


const TextoMinhaConta = styled.div`
  color:#456060;
  position: absolute;
  padding-top:10px;
  padding-left:20px;
  opacity: ${props => props.aberto ? "1" : "0"};
  transition: all 0.5s;
  text-align: center;
  font-size: 10px;;
  fontWeight: Regular;
  letter-spacing:2.45px;
  font-family: "Proxima Nova", "Helvetica Neue", Helvetica, Arial, sans-serif;
`;


const DropDownMenu = styled.div`
	height: ${props => props.aberto ? "100%" : "0px"};
	background: #1F2D2E 0% 0% no-repeat padding-box;
    transition: min-height 0.3s, height 0.3s;
	
`





{/* CSS do header do menu*/}

const IconeMenu = styled(Menu)`
  max-width:50px;
  color: #28F3BD;
  margin-left:35px;
  padding-right: 20px;
`;

const Image = styled.img`
  max-height: 90%;
  max-width: 90%;
  float: left;
  margin-right:15px;
  padding-left: 20px;
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
	margin-top:10px;
	textAlign: center;
	margin-bottom:auto;
	min-width:200px;
`

const AparenciaMenu = styled.div`
	display: flex;
	margin-right: 30px;
	margin-left: auto;
	background: #1F2D2E 0% 0% no-repeat padding-box;
    transition: all 0.3s;
`;
