const {gets, print} = require('../funcoes_Auxiliares');

const numerosSorteados = gets();
let maiorValorEcontrado = 0;

for (let i = 0; i < numerosSorteados; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEcontrado) {
        maiorValorEcontrado = numeroSorteado;
    }
}

print(maiorValorEcontrado)