// armazenar uma funcao em uma varial
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2,3)

// armazenar uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(1,2))

// retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2,1))