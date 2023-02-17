const {gets, print} = require('./funcoes_Auxiliares_Impar_Par');

const numerosSorteados = gets();
let menorValorEcontrado = null;
let maiorValorEcontrado = null;

for (let i = 0; i < numerosSorteados; i++) {
    const numeroImparSorteado = gets();
    const numeroParSorteado = gets();

    if (numeroImparSorteado % 2 === 1 && menorValorEcontrado === null && numeroImparSorteado > menorValorEcontrado) {
        menorValorEcontrado = numeroImparSorteado;
        menorValorEcontrado = numeroImparSorteado;
        print(`Menor número Par encontrado é: ${numeroImparSorteado}`);
    } else if (numeroParSorteado % 2 === 0 && maiorValorEcontrado === null && numeroParSorteado > maiorValorEcontrado) {
        maiorValorEcontrado = numeroParSorteado;
        maiorValorEcontrado = numeroParSorteado;
        print(`Maior número Par encontrado é: ${numeroParSorteado}`);
    }
}