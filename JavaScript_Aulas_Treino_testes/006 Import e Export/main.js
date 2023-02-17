const {gets, print} = require('./funcoes_Auxiliares');

const calcularMedia = gets()

if (calcularMedia < 5.5) {
    console.log('Reprovado');
} else if (calcularMedia < 7) {
    console.log('Recuperação');
} else if (calcularMedia > 7) {
    console.log('Aprovado');
}

print()