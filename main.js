//segundo desafio de lógica do Felipão

function obterSaldoRanqueadas(vitorias, derrotas) {
    let saldo = vitorias - derrotas
    return saldo
}

function calcularNivelJogador(vitorias) {
    let nivelJogador = ""
    if (vitorias <= 10) {
        nivelJogador = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivelJogador = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivelJogador = "Prata"
    }else if(vitorias >= 51 && vitorias <= 80){
        nivelJogador = "Ouro"
    }else if(vitorias >= 81 && vitorias <= 90){
        nivelJogador = "Diamante"
    }else if(vitorias >= 91 && vitorias <= 100){
        nivelJogador = "Lendário"
    }else if(vitorias >= 101){
        nivelJogador = "Imortal"
    }else{
        nivelJogador = "Erro: nível de jogador inválido!"
    }

    return nivelJogador
}

function exibirInformacoesDoJogador (vitorias, derrotas) {
    let saldo = obterSaldoRanqueadas(vitorias, derrotas)
    let nivel = calcularNivelJogador(vitorias)
    
    console.log(`O Herói tem saldo de ${saldo} e está no nível ${nivel}`)
}

exibirInformacoesDoJogador(35, 9)