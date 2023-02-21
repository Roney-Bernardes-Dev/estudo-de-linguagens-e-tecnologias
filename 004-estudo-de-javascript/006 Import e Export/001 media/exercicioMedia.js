const {gets, print} = require('./funcoes_Auxiliares_Media');

const media = gets()

if (media >= 0 && media < 5) {
    print('Reprovado');
} else if (media >= 5.5 && media <= 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}