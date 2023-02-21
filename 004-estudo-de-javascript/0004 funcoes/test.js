function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100));
}

(function (percoEtiqueta, opcaoPagamento) {
    if (opcaoPagamento === 1) {
        console.log(aplicarDesconto(percoEtiqueta, 10));
    } else if (opcaoPagamento === 2) {
        console.log(aplicarDesconto(percoEtiqueta, 15));
    } else if (opcaoPagamento === 3) {
        console.log(percoEtiqueta);
    }else {
        console.log(aplicarJuros(percoEtiqueta, 10));
    }
}
(100, 4));