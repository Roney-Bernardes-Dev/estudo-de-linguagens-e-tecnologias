// Entendendo o Desafio

// Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎

// Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.

// Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.

// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:
 
// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
 


// Bons estudos 😉


// Definindo a classe Heroi
class Heroi {
    // O construtor define as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método atacar que exibe a mensagem correta baseado no tipo do herói
    atacar() {
      let ataque;
  
      // Condicionais para definir o ataque baseado no tipo do herói
      if (this.tipo === 'mago') {
        ataque = 'usou magia';
      } else if (this.tipo === 'guerreiro') {
        ataque = 'usou espada';
      } else if (this.tipo === 'monge') {
        ataque = 'usou artes marciais';
      } else if (this.tipo === 'ninja') {
        ataque = 'usou shuriken';
      } else {
        ataque = 'realizou um ataque indefinido';
      }
  
      // Exibe a mensagem final
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando exemplos de heróis
  const mago = new Heroi('Gandalf', 3000, 'mago');
  const guerreiro = new Heroi('Aragorn', 87, 'guerreiro');
  const monge = new Heroi('Liu Kang', 35, 'monge');
  const ninja = new Heroi('Naruto', 17, 'ninja');
  
  // Executando o método atacar para cada herói
  mago.atacar();       // O mago atacou usando magia
  guerreiro.atacar();  // O guerreiro atacou usando espada
  monge.atacar();      // O monge atacou usando artes marciais
  ninja.atacar();      // O ninja atacou usando shuriken
  