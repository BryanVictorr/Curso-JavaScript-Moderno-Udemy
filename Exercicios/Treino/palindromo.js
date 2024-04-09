function verificarPalindromo(string) {

    let stringAux = string.split('').reverse().join('')

    if(stringAux == string){
        return true
    }
    else{
        return false
    }
}

console.log(verificarPalindromo('arara'))
console.log(verificarPalindromo('cavalo'))
console.log(verificarPalindromo('esse'))