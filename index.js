//segundo desafio de lógica do Felipão

function getRankingBalance(victories, defeats) {
    let balance = victories - defeats
    return balance
}

function calculateLevelPlayer(victories) {
    let levelPlayer = ""
    if (victories >= 0 && victories <= 10) {
        levelPlayer = "Ferro"
    } else if (victories >= 11 && victories <= 20) {
        levelPlayer = "Bronze"
    } else if (victories >= 21 && victories <= 50) {
        levelPlayer = "Prata"
    }else if(victories >= 51 && victories <= 80){
        levelPlayer = "Ouro"
    }else if(victories >= 81 && victories <= 90){
        levelPlayer = "Diamante"
    }else if(victories >= 91 && victories <= 100){
        levelPlayer = "Lendário"
    }else if(victories >= 101){
        levelPlayer = "Imortal"
    }else{
        levelPlayer = "Número de vitórias inválido para classificação!"
    }

    return levelPlayer
}

function showPlayerInformation (victories, defeats) {
    let balance = getRankingBalance(victories, defeats)
    let level = calculateLevelPlayer(victories)
    
    console.log(`O Herói tem saldo de ${balance} e está no nível ${level}`)
}

showPlayerInformation(-1, 2)