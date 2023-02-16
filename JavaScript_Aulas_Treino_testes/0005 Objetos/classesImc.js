class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura); 
    }
}

const roney = new Pessoa ('Roney', 69, 1.69)
console.log(roney.calcularImc().toFixed(2));