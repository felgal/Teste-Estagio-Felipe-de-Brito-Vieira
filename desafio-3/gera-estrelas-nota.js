
//funcao que retorna as estrelas da nota
function avaliacao(notaFilme) {

	//maximo de estrelas para o codigo
	MaxEstrelas = 5
	
	//separa a nota em decima e inteiro
	var notaInteira = Math.trunc(notaFilme)
	var notaDecimal = notaFilme - notaInteira
	//vetor de estrelas e a quantidade de estrelas vazias
	var estrelasVazias = MaxEstrelas - notaInteira
	var estrelas = []

	//preenche de estrelas cheias no array com base na nota
	for (i = 0; i < notaInteira; i++) {
	  estrelas.push("star")
	}

	//se tiver parte decimal e for superior ou igual a 0.5, remove uma estrela vazia e adiciona meia estrela
	if(notaDecimal>=0.5){
		estrelasVazias-=1
		estrelas.push("star_half")
	}

	//preenche as estrelas vazias
	for (i = 0; i < estrelasVazias; i++) {
	  estrelas.push("star_border")
	}
	
	return estrelas
}

print(avaliacao(3.8))