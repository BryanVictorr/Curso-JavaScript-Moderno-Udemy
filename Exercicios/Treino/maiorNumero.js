function maiorNumero(array){

    let maior = array[0]

    for(let i = 1; i < array.length; i++){

        if(array[i] > maior){
            maior = array[i]
        }
    }
    return
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log('Maior numero =', maiorNumero(array))
