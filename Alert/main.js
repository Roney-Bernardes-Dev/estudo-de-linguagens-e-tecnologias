const name = prompt('Qual o seu nome: ?');
const nameBlock = ['joao', 'maria', 'jose'];

if (nameBlock.includes(name)) {
    alert('Esse nome já existe tente outro');
}else {
    alert('Bem Vindo(a). ' + name);
}