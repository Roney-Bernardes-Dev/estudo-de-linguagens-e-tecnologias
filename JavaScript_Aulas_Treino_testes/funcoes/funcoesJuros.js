function increnebtarJuros(valor, percentualJuros) {
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + percentualJuros
}

console.log(increnebtarJuros(100, 5))
