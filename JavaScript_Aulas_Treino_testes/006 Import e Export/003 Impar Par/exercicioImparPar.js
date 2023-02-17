const {gets, print} = require('./funcoes_Auxiliares_Impar_Par');

const numerosSorteados = gets();
let menorValorEcontrado = null;
let maiorValorEcontrado = null;

for (let i = 0; i < numerosSorteados; i++) {
    const numeroImparSorteado = gets();
    const numeroparSorteado = gets();

    if (numeroImparSorteado % 2 === 1 && numeroImparSorteado > menorValorEcontrado) {
        menorValorEcontrado = numeroImparSorteado;
        print(`Menor número Par encontrado é: ${numeroImparSorteado}`);
    } else if (numeroparSorteado % 2 === 0 && numeroparSorteado > maiorValorEcontrado) {
        maiorValorEcontrado = numeroparSorteado;
        print(`Maior número Par encontrado é: ${numeroparSorteado}`);
    }
}