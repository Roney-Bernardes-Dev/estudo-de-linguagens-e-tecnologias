class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
       this.marca = marca
       this.cor = cor
       this.gastoMedioPorKm = gastoMedioPorKm 
    }

    calcularGastoDePercurso(distancia, percoCobustivel) {
        return distancia * this.gastoMedioPorKm * percoCobustivel;
    }
}

const uno = new Carro('Fiat', 'Preta', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'PreBrancota', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));