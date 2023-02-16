function escrevaNome(nome) {
    console.log('Meu nome é: ' + nome);
}

escrevaNome('Roney');

function anilisarIdade(idade) {
    if (idade < 18 ) {
        console.log('Você é menor de idade');
    } else if (idade >= 18 && idade <=35) {
        console.log('Você é um jovem');
    } else if (idade > 35 && idade <= 60) {
        console.log('Você é um Adulto');
    } else if (idade > 60) {
        console.log('Você é um Idoso');
    }
}

anilisarIdade(66);
