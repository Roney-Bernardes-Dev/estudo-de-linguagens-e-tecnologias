class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura) {
        return peso / (altura * altura); 
    }
}

const roney = new Pessoa ('Roney ', 65, 1.69 )
console.log(roney.calcularImc(65, 1.69));