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
	
	async componentDidMount() {
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
	    .then((response) => response.json())
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
			 this.setState({erro: error})
			 console.log(this.state.erro)
			});
	};
	
	
	
  render() {
	  //caso não tenha carregando as informacoes da api, mostra carregando
	if(this.state.carregando) {
		return 'Loading...'
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
	  />  
	 </div>
	)
  }
}

export default ListagemUsuarios