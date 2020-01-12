import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';


//por enquanto apenas um navbar, precisa alterar o navbar conforme o modelo(submenu de perfil e pesquisa) e inserir o resto dos components do site aqui
class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <GlobalStyle />
      </>
    )
  }
}

export default App