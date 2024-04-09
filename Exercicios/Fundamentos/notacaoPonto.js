console.log(Math.ceil(6.1))

const obj1 = {}

obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome) {

    this.nome = nome

    this.exec = function(){
        console.log('XXX')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

function Carro(marca, modelo) {

    this.marca = marca
    this.modelo = modelo

    this.alterarMarca = function(novaMarca) {
        this.marca = novaMarca
    }

    this.alterarModelo = function(novoModelo){
        this.modelo = novoModelo
    }
}

const meuCarro = new Carro('Toyota', 'Corolla')
console.log(meuCarro.marca, meuCarro.modelo)

meuCarro.alterarMarca('Fiat')
meuCarro.alterarModelo('Cross')

console.log(meuCarro.marca, meuCarro.modelo)
