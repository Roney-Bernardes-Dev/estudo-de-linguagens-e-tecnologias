//pedir para o usuario digitar um numero
const primeiroNumero = prompt("Digite o primeiro número: ");                                

//converter em numero inteiro
const primeiro = parseInt(primeiroNumero);                                    

//pedir para o usuario digitar outro numero
const segundoNumero = prompt("Digite o segundo número: ");                      

//converter em numero inteiro
const segundo = parseInt(segundoNumero);

//mostrar a subtração concatenando com o texto "a subtração é: ..."
alert("a subtração é: " + (primeiro - segundo));

//mostrar a multiplicação concatenando com o texto "a multiplicação é: ..."
 alert("a multiplicação é: " + (primeiro * segundo));

//mostrar a divisão concatenando com o texto "a divisão é: ..."
alert("a divisão é: " + (primeiro / segundo));

//mostrar a soma concatenando com o texto "a soma é: ..."
alert("a soma é: " + (primeiro + segundo));