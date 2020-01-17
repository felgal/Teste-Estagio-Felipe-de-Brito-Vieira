import React, {Component} from 'react';
import ListagemUsuarios from './controle-de-usuarios/controleUsuarios'

class App extends Component {
  render() {
    return (
	<>
		<header className="App-header">
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </header>
		
		<ListagemUsuarios>
		</ListagemUsuarios>
	</>
    )
  }
}

export default App;
