function somaPares(array) {

    let somaArray = 0
    
    for(let i = 0; i < array.length; i++) {

        if(array[i] % 2 == 0){
            somaArray += array[i]
        }
    }
    return somaArray
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(somaPares(array))