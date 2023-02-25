const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  if (numero == 5) {
  console.log('Você digitou o número:', numero);
  }else {
    console.log("Digite ou numero");
  }
  rl.close();
});

  
