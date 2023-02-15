const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  console.log('Você digitou o número:', numero);
  rl.close();
});

  
