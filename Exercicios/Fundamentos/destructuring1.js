// novo recurso do ES2015

const pessoa = {

    nome:'Ana',
    idade:5,

    endereco: {
        lograduro:'Rua AAA',
        numero:344
    }
}

const {nome, idade} = pessoa // 
console.log(nome, idade)

const {nome:nomeVariavel, idade:idadeVariavel} = pessoa
console.log(nomeVariavel,idadeVariavel)

// const {nome, sobrenome = true} = pessoa // apague a de cima para testar essa
// console.log(nome, sobrenome)

const {endereco: { lograduro, numero, cep = true} } = pessoa
console.log(lograduro, numero, cep)


