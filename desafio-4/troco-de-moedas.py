#funcao que realiza a entrada dos valores pelo usuario
def recebeEntrada():
    #entrada de dados(quantidade de dinheiro a ser trocada e lista de moedas)
    quantDinheiro = int(input("Entre com a quantidade de centavos a ser trocada:"))
    denominacoesMoedas = input("Entre com a lista de denominacoes de moedas(Separado por virgula):")

    #ajeita a lista de moedas como um array
    try:
        denominacoesMoedas = denominacoesMoedas.split(",")
    except ValueError:
        print("Por favor, insira um valor valido de denominacao de moedas.")

    #converte o array de string em array de int
    for i in range(0,len(denominacoesMoedas)):
        try:
            denominacoesMoedas[i] = int(denominacoesMoedas[i].strip(" "))
        except ValueError:
            print("Por favor, insira um valor valido de denominacao de moedas.")
            raise

    return quantDinheiro, denominacoesMoedas



#funcao que ordena uma lista de maior para menor
def ordenaLista(lista):
    for i in range(0,len(lista)):
        for j in range(i+1, len(lista)):
            if(lista[j]>lista[i]):
                temp = lista[i]
                lista[i] = lista[j]
                lista[j] = temp
    return lista


#funcao que remove as denominacoes de moedas maiores que a quantidade de dinheiro atual
def removeMoedasMaiores(quantDinheiro, denominacoesMoedas):
    #verifica a lista ordenada de maior a menor e quanto encontrar o primeiro valor menor ou igual a quantidade de dinheiro, ele
    #retorna o subvetor a partir desse ponto
    for i in range(0, len(denominacoesMoedas)):
        if(denominacoesMoedas[i]<=quantDinheiro):
            return denominacoesMoedas[i:]

#funcao que realiza retorna o mínimo de moedas dado x e b
def troca(quantDinheiro, denominacoesMoedas):
    #inicio das variáveis
    listaMoedasMinimas = []
    quantMoedasMinimas = float('inf') #valor maximo para a verificacao do minimo


    #transforma em uma lista ordenado de maior ao menor com apenas moedas menores que a quantidade de dinheiro
    denominacoesMoedas = ordenaLista(denominacoesMoedas)
    denominacoesMoedas = removeMoedasMaiores(quantDinheiro,denominacoesMoedas)


    #para alcancar todos os casos, precisa verificar conjuntos de moedas removendo a de maior valor até remover todas.
    for moedaMaxima in range(0,len(denominacoesMoedas)):
        #variaveis temporarias para encontrar o minimo de moedas
        quantDinheiroAtual = quantDinheiro
        listaMoedasMinimasAtual = []
        quantMoedasMinimasAtual = 0

        #durante o loop, contamos a quantidade de moedas de maior valor possível, e removemos da quantidade total.
        #Repetindo esse loop até que o valor total seja 0 ou passar por todas as moedas
        for posMoedaAtual in range(moedaMaxima,len(denominacoesMoedas)):
            #pega a moeda atual do array
            moedaAtual = denominacoesMoedas[posMoedaAtual]

            #calcula a quantidade de moedas atuais, elas precisam ser maior que 0 para indicar que e possivel usar a moeda
            quantMoedasAtual = int(quantDinheiroAtual / moedaAtual)  # divisao precisa ser int para evitar fracionario
            if(quantMoedasAtual>0):
                #calculamos o novo valor do dinheiro e adicionamos a lista de mínimos atual
                quantDinheiroAtual = quantDinheiroAtual%moedaAtual
                quantMoedasMinimasAtual += quantMoedasAtual
                listaMoedasMinimasAtual.append((quantMoedasAtual, moedaAtual))


        #feito o loop, verificamos se a lista tem menos moedas que o mínimo anterior
        #tambem e necessario que a quantidade de dinheiro seja 0, indicando que a quantidade de dinheiro pode ser dividido nas moedas dadas.
        if(quantMoedasMinimasAtual<quantMoedasMinimas and quantDinheiroAtual==0):

            listaMoedasMinimas= listaMoedasMinimasAtual
            quantMoedasMinimas=quantMoedasMinimasAtual

    print(listaMoedasMinimas)



#funcao principal
#x é a quantidade de dinheiro e b e a lista de denominacao de moedas
x,b = recebeEntrada()
troca(x,b)