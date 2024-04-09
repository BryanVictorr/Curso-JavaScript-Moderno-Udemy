const saudacao = 'Opa'

function exec() {
    const saudacao = 'Falaa'
    return saudacao
}

console.log(saudacao)
console.log(exec())

// Objetos sao grupos aninhados de chave e valor

const cliente = {

    nome: 'Pedro',
    idade: 32,
    peso: 90,

    endereco: {
        logradouro: 'Rua Abilio Alves de Sousa',
        numero: 344,
        bairro: 'Centro',
    }
}

console.log(cliente)