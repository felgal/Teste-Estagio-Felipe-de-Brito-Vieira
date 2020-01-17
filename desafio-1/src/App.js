import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Destaque from "./components/body/Destaque";
import GlobalStyle from './styles/Global';
import styled from "styled-components";


//por enquanto apenas um navbar, precisa alterar o navbar conforme o modelo(submenu de perfil e pesquisa) e inserir o resto dos components do site aqui
class App extends Component {
  render() {
    return (
      <>
		<BodyCSS>
			<GlobalStyle />
			<Navbar/>
			<Destaque/>
		</BodyCSS>
      </>
    )
  }
}

const BodyCSS = styled.body`
  background: #182222;
  height:100vh;
`;

export default App