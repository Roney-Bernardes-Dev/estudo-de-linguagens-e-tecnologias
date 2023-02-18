const {gets, print} = require('./funcoes_Auxiliares');


const aliquota1 = 0.05;
const aliquota2 = 0.1;
const aliquota3 = 0.15;

const salarioBruto = parseFloat(gets());
const adicionalBeneficios = parseFloat(gets());

let percentualImposto, salarioLiquido;

if (salarioBruto <= 1100) {
  percentualImposto = aliquota1;
} else if (salarioBruto <= 2500) {
  percentualImposto = aliquota2;
} else {
  percentualImposto = aliquota3;
}

salarioLiquido =
  salarioBruto * (1 - percentualImposto) + adicionalBeneficios;

print(salarioLiquido.toFixed(2));