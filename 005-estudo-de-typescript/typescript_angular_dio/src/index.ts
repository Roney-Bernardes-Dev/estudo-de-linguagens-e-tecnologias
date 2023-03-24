/*type heroi = {
    name: string;
    vulgo: string;
};

function printObjeto(pessoa: heroi) {
    console.log(pessoa);
};

printObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman",
});
*/

//decorators

function ExibirNome(target: any) {
    console.log(target);
}
@ExibirNome
class Funcionario {}

@ExibirNome
class Quincas {}
