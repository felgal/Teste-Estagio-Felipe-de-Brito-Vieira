import React, {Component} from 'react'
import MaterialTable from 'material-table'


class ListagemUsuarios extends Component {
	constructor() {
		super();
		this.state = {
			pagina: 0,
			quantPorPagina: 0,
			total: 0,
			totalPaginas: 0,
			usuariosJson: [],
			usuariosMaterialTable: [],
			erro:-1,
			carregando: true
		}
		
	}
	
	componentDidMount() {
		this.geraUsuariosNovos()
    };
	
	//funcao que gera todos os usuarios na tabela
	async geraUsuariosNovos(){
		await this.geraUsuarios(1);
		
		//Botei esse tempo porque acredito que mesmo esperando geraUsuarios, os setState dentro podem não ter terminado, pode ser por estar mal configurado também.
		await new Promise(resolve => { setTimeout(resolve, 1000); });
		this.setState({carregando: false});
	};
	
	
	
	//Ambas funções convertem as variaveis de usuarios de json para uma maneira aceitavel pelo material table
	createData(id, email, first_name, last_name, avatar) {
		return {id, email, first_name, last_name, avatar};
	};
	atualizaUsuariosTable(usuarios){
		this.state.usuariosJson.forEach((item, i) => {
			this.state.usuariosMaterialTable.push(this.createData(item.id, item.email, item.first_name,item.last_name,item.avatar));
		 });
	};
	
	//Essa função salva no state as informacoes da pagina passada, com os dados e informacoes gerais das paginas e valor por pagina
	geraUsuarios(pagina) {
  	    fetch("https://reqres.in/api/users?page="+pagina)
	    .then((response) =>{
			if (response.status !== 200) {
				console.log(response.status)
			} 
			else 
				return (response.json());
		})
	    .then((responseJson) => {
				this.setState({usuariosJson: Object.values(responseJson.data), 
				paginas: Object.values(responseJson.page),
				quantPorPagina: Object.values(responseJson.per_page),
				total: Object.values(responseJson.total),
				totalPaginas: Object.values(responseJson.total_pages),
				})
				this.atualizaUsuariosTable(this.state.usuariosJson)
				
				//lendo todos os dados do bd de uma vez, mas isso precisa ser modificado depois, para ler apenas uma página por vez, NÃO É ASSIM QUE DEVE SER FEITO, PRECISA SER FEITO USANDO ASYNC
				if(responseJson.page !== responseJson.total_pages){
					this.geraUsuarios(responseJson.page+1);
				}
				
			})
		.catch((error) => {
			 console.log("Erro")
			});
	};
	
	//Função responsável por atualizar o usuário, no momento, precisa de melhoria pois envia o request com todas as informações do usuário(Por isso o PATCH é usado)
	atualizaUsuario(infosUsuario){
		var infosUsuarioBody= this.createData(infosUsuario.id,infosUsuario.email,infosUsuario.first_name,infosUsuario.last_name,infosUsuario.avatar)
		console.log(JSON.stringify(infosUsuarioBody))
		fetch("https://reqres.in/api/users/"+infosUsuario.id, {method: 'PATCH', headers: new Headers({'Accept': 'application/json, text/plain, */*','Content-Type': 'application/json'}), body: JSON.stringify(infosUsuarioBody)})
	    .then((response) =>{
			console.log("Requsição PATCH feita: https://reqres.in/api/users/"+infosUsuario.id);
			console.log(response.status);
			if (response.status !== 200) {
				console.log("Erro no request");
			} 
			else 
				//Maneira mais eficiente seria atualizar só esta página, mas ainda precisa ser feito
				this.geraUsuariosNovos()
				return (response.json());
		})
		//isso serve apenas para verificar a resposta do body
		.then((responseJson) => {
			console.log(responseJson);
		})
		.catch((error) => {
			 console.log("Erro")
			});
	};
	
	
	//função responsável por fazer a requisição para remover o usuário e gerar a nova listagem de usuários caso tenha sido removido com sucesso, senão apenas mostra o erro no console.
	removeUsuario(idUsuario){
		fetch("https://reqres.in/api/users/"+idUsuario, {method: 'DELETE'})
	    .then((response) =>{
			if (response.status !== 200) {
				console.log("Requsição DELETE feita: https://reqres.in/api/users/"+idUsuario)
				console.log(response.status)
			} 
			else 
				//Maneira mais eficiente seria atualizando só esta página, mas ainda precisa ser feito
				this.geraUsuariosNovos()
		})

		.catch((error) => {
			 console.log("Erro")
			});
	};
	
  render() {
	  //caso não tenha carregando as informacoes da api, mostra carregando
	if(this.state.carregando) {
		return 'Carregando...'
	} 
    return (
	<div style ={{maxWidth: '100%'}}>
		<MaterialTable 
			columns = {[
			  {title: 'ID', field: 'id'},
			  {title: 'Avatar', field: 'avatar', render: rowData => <img src={rowData.avatar} style={{width: 50, borderRadius: '50%'}}/>},
			  {title: 'Nome', field: 'first_name'},
			  {title: 'Sobrenome', field: 'last_name'},
			  {title: 'Email', field: 'email'}
			]}
			data = {this.state.usuariosMaterialTable}
			title = "Listagem de Usuários"
			actions={[
			  {
				icon: 'delete',
				tooltip: 'Deletar Usuário',
				onClick: (event, rowData) => this.removeUsuario(rowData.id)
			  }
			]}
			//código padrão dado pela documentação do material-table para permitir os valores serem editados
			editable={{
			  onRowUpdate: (newData, oldData) =>
				new Promise((resolve, reject) => {
				  setTimeout(() => {
					{
						//Outro ponto de melhoria, ele atualiza todas as informações do usuário, seria bom verificar quais foram as mudanças antes de fazer o request
						this.atualizaUsuario(newData);
						const data = this.state.usuariosMaterialTable;
						const index = data.indexOf(oldData);
						data[index] = newData;
						this.setState(this.state.usuariosMaterialTable , () => resolve());
					}
					resolve()
				  }, 1000)
				}),
			}}
	  />  
	 </div>
	)
  }
}

export default ListagemUsuarios