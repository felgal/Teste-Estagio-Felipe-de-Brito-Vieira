import React, {Component} from 'react';
import ListagemUsuarios from './controle-de-usuarios/listagemUsuarios'

class App extends Component {
  render() {
    return (
	<html>
		<header className="App-header">
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>
		
		<ListagemUsuarios>
		</ListagemUsuarios>
	</html>
    )
  }
}

export default App;
