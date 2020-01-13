import React, { Component } from "react";
import styled from "styled-components";

class Pesquisa extends React.Component{
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
			<Busca aberto={this.state.aberto}>
				<IconePesquisa aberto={this.state.aberto} onClick={this.abrePesquisa}/>
				<TextoPesquisa aberto={this.state.aberto} placeholder="Pesquisar termos na plataforma"/>
				<IconeFechar aberto={this.state.aberto} onClick={this.fechaPesquisa}/>
			</Busca> 
		)
	}
}

export default Pesquisa


export const TextoPesquisa = styled.input`
  color: #28F3BD;
  background: rgba(0, 0, 0, 0);
  border: 0px;
  font-size: 12px;
  font: Regular 15px/24px Proxima Nova;
  display: inline;
  max-width: ${props => props.aberto ? "400px" : "0px"};
  min-width: ${props => props.aberto ? "240px" : "0px"};
  transition: max-width 0.3s,min-width 0.3s;
`;

export const IconePesquisa = styled(Search)`
  max-width:30px;
  margin:8px;
  &:hover{
		color:#B5F7ED;
  }
  color: ${props => props.aberto ? "#B5F7ED" : "#456060"};
    transition: all 0.3s;
`;

export const IconeFechar = styled(CloseCircle)`
  color: #456060;
  max-width:30px;
  float:right
  margin:8px;
  display: none;
  display: ${props => props.aberto ? "inline" : "none"};
    transition: all 0.3s;
`;


const Busca = styled.div`
	float: right;
	background: #344A4A 0% 0% no-repeat padding-box;
	border-radius: 100px;
	margin-top:auto;
	margin-bottom:auto;
	min-width: ${props => props.aberto ? "300px" : "10px"};
    transition: all 0.3s;
`;
