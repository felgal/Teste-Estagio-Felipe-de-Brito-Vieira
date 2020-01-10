# funcao que realiza a entrada dos valores pelo usuario
def recebeEntrada():
    # entrada de dados(quantidade de dinheiro a ser trocada e lista de moedas)
    quantDinheiro = int(input("Entre com a quantidade de centavos a ser trocada:"))
    denominacoesMoedas = input("Entre com a lista de denominacoes de moedas(Separado por virgula):")

    # ajeita a lista de moedas como um array
    try:
        denominacoesMoedas = denominacoesMoedas.split(",")
    except ValueError:
        print("Por favor, insira um valor valido de denominacao de moedas.")

    # converte o array de string em array de int
    for i in range(0, len(denominacoesMoedas)):
        try:
            denominacoesMoedas[i] = int(denominacoesMoedas[i].strip(" "))
        except ValueError:
            print("Por favor, insira um valor valido de denominacao de moedas.")
            raise

    return quantDinheiro, denominacoesMoedas


# funcao que ordena uma lista de maior para menor
def ordenaLista(lista):
    for i in range(0, len(lista)):
        for j in range(i + 1, len(lista)):
            if (lista[j] > lista[i]):
                temp = lista[i]
                lista[i] = lista[j]
                lista[j] = temp
    return lista


# funcao que remove as denominacoes de moedas maiores que a quantidade de dinheiro atual
def removeMoedasMaiores(quantDinheiro, denominacoesMoedas):
    # verifica a lista ordenada de maior a menor e quanto encontrar o primeiro valor menor ou igual a quantidade de dinheiro, ele
    # retorna o subvetor a partir desse ponto
    for i in range(0, len(denominacoesMoedas)):
        if (denominacoesMoedas[i] <= quantDinheiro):
            return denominacoesMoedas[i:]


#funcao recursiva para verificar as possiveis combinacoes de moedas, isso inclui casos como em que apenas a moeda média
# pode ser a melhor combinacao
#funcao retorna o valor gerado pela combinacao atual e os proximos valores de moedas a verificar
def recursivoQuantidadeMoedas(dinheiroAtual, valoresMoedas):
    #condicao de parada 1: Valor de moeda vazio, significa que a ultima moeda da lista pode ser usada mas nao e a melhor opcao
    if(valoresMoedas==[]):
        return dinheiroAtual,[]

    #se tiver apenas 1 valor de moeda, significa que ou ele cobre o dinheiro atual, ou ficara sobrando
    #retorno o total de dinheiro como 0, pois foi tudo coberto
    if (len(valoresMoedas) == 1 and dinheiroAtual % valoresMoedas[0] == 0):
        return 0,[dinheiroAtual / valoresMoedas[0]]
    #fica sobrando dinheiro para ser coberto
    #retorna dinheiro atual pois ainda nao foi coberto
    elif (valoresMoedas[0] > dinheiroAtual):
        return dinheiroAtual,[0]

    #funcao principal do loop
    else:
        #inicializa a quantidade minima de moedas e a listagem dessas moedas
        melhorMinimoMoedas = float('inf')
        #esse vetor indica a quantidade de moedas referente aos valores de valoresMoedas
        melhoresMoedas =[]
        #dinheiro restante no melhor caso
        melhorDinheiro = dinheiroAtual

        #variaveis para o loop
        quantidadeMoedaAtual=0
        dinheiroAtualTemp = dinheiroAtual

        #loop para verificar todas as quantidades da maior moeda, enquanto não passar o dinheiro que estou verificando
        while valoresMoedas[0]*quantidadeMoedaAtual <= dinheiroAtual:

            #calculo o novo dinheiro
            dinheiroAtualTemp = dinheiroAtual - valoresMoedas[0]*quantidadeMoedaAtual
            #chamo recursivamente com o novo dinheiro para encontrar a melhor quantidade de moedas para o resto delas
            dinheiroAtualTemp, quantidadeDeMoedas = recursivoQuantidadeMoedas(dinheiroAtualTemp,valoresMoedas[1:])

            #gero o vetor listando a quantidade de moedas(atual e da resposta da recursao)
            quantidadeDeMoedas = [quantidadeMoedaAtual] + quantidadeDeMoedas

            #verifico todas as moedas juntas cobrem o dinheiro atual, se sim, é uma possível resposta para o grupo atual
            somatorioQuantidadeDeMoedas = sum(quantidadeDeMoedas)
            if (dinheiroAtualTemp == 0 and somatorioQuantidadeDeMoedas < melhorMinimoMoedas):
                melhorMinimoMoedas = somatorioQuantidadeDeMoedas
                melhoresMoedas = quantidadeDeMoedas
                melhorDinheiro = dinheiroAtualTemp

            #repito o loop adicionando +1 moeda para a moeda atual
            quantidadeMoedaAtual+=1

        #retorno o melhor dinheiro gerado(importante para recursao) e sua quantidade de moedas
        return melhorDinheiro, melhoresMoedas


#prepara a saida para seguir o padrao passado
def geraSaida(moedas,valores):
    listagemMoedas = []
    for i in range(0,len(moedas)):
        if(moedas[i]>0):
            listagemMoedas.append((int(moedas[i]),valores[i]))
    return listagemMoedas


# funcao que realiza retorna o mínimo de moedas dado x e b
def troca(quantDinheiro, denominacoesMoedas):
    # transforma em uma lista ordenado de maior ao menor com apenas moedas menores que a quantidade de dinheiro
    denominacoesMoedas = ordenaLista(denominacoesMoedas)
    denominacoesMoedas = removeMoedasMaiores(quantDinheiro, denominacoesMoedas)

    # gera a listagem de moedas, se nao for possivel, melhoresMoedas sera []
    dinheiroFinal, melhoresMoedas = recursivoQuantidadeMoedas(quantDinheiro, denominacoesMoedas)


    #prepara a saida e printa
    listagemDeMoedasSaida = geraSaida(melhoresMoedas,denominacoesMoedas)
    print(listagemDeMoedasSaida)
    '''
    print(denominacoesMoedas)
    # para alcancar todos os casos, precisa verificar conjuntos de moedas removendo a de maior valor até remover todas.
    for moedaMaxima in range(0, len(denominacoesMoedas)):
        # variaveis temporarias para encontrar o minimo de moedas
        quantDinheiroAtual = quantDinheiro
        listaMoedasMinimasAtual = []
        quantMoedasMinimasAtual = 0

        print("/////////")
        # durante o loop, contamos a quantidade de moedas de maior valor possível, e removemos da quantidade total.
        # Repetindo esse loop até que o valor total seja 0 ou passar por todas as moedas
        for posMoedaAtual in range(moedaMaxima, len(denominacoesMoedas)):
            # pega a moeda atual do array
            moedaAtual = denominacoesMoedas[posMoedaAtual]

            print(moedaAtual)
            # calcula a quantidade de moedas atuais, elas precisam ser maior que 0 para indicar que e possivel usar a moeda
            quantMoedasAtual = int(quantDinheiroAtual / moedaAtual)  # divisao precisa ser int para evitar fracionario
            if (quantMoedasAtual > 0):
                # calculamos o novo valor do dinheiro e adicionamos a lista de mínimos atual
                quantDinheiroAtual = quantDinheiroAtual % moedaAtual
                quantMoedasMinimasAtual += quantMoedasAtual
                listaMoedasMinimasAtual.append((quantMoedasAtual, moedaAtual))

        # feito o loop, verificamos se a lista tem menos moedas que o mínimo anterior
        # tambem e necessario que a quantidade de dinheiro seja 0, indicando que a quantidade de dinheiro pode ser dividido nas moedas dadas.
        if (quantMoedasMinimasAtual < quantMoedasMinimas and quantDinheiroAtual == 0):
            print(listaMoedasMinimas)
            listaMoedasMinimas = listaMoedasMinimasAtual
            quantMoedasMinimas = quantMoedasMinimasAtual
    '''




# funcao principal
# x é a quantidade de dinheiro e b e a lista de denominacao de moedas
x, b = recebeEntrada()
troca(x,b)