type heroi = {
    name: string;
    vulgo: string;
};

function printObjeto(pessoa: heroi) {
    console.log(pessoa);
};

printObjeto({
    name: "Bruce Wayne",
    vulgo: "Batman",

})
