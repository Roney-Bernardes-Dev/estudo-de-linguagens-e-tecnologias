function calcularImc (peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 15.5) {
        return 'Abaixo do peso'; 
   } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
   } else if (imc >= 25  && imc < 30) {
        return 'Acima do Peso';
   } else if (imc >= 30  && imc < 40) {
        return 'Obeso';
   } else {
        return 'Obsidade Grave';
   } 
}

(function () {
    const peso = 62;
    const altura = 1.69;
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
