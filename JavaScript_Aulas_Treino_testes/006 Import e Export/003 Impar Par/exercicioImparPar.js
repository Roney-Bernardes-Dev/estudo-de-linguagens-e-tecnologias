const {gets, print} = require('./funcoes_Auxiliares_Impar_Par');

const numerosSorteados = gets();
let menorValorEcontrado = null;
let maiorValorEcontrado = null;

for (let i = 0; i < numerosSorteados; i++) {
    const numeroImparSorteado = gets();
    const numeroParSorteado = gets();

    if (numeroImparSorteado % 2 === 1 && numeroImparSorteado > menorValorEcontrado) {
        if (menorValorEcontrado === null) {
            menorValorEcontrado = numeroImparSorteado;
        }
        menorValorEcontrado = numeroImparSorteado;
        print(`Menor número Par encontrado é: ${numeroImparSorteado}`);
    } else if (numeroParSorteado % 2 === 0 && numeroParSorteado > maiorValorEcontrado) {
        if (maiorValorEcontrado === null) {
            maiorValorEcontrado = numeroParSorteado;
        }
        maiorValorEcontrado = numeroParSorteado;
        print(`Maior número Par encontrado é: ${numeroParSorteado}`);
    }
}