const array = [7.7, 8.9, 6.3, 9.2]

console.log(array[0], array[3])

array[4] = 10
console.log(array[4])

// retorna tamanho do array
console.log(array.length)

// adicionada um elemento ao array
array.push(11)
console.log(array)

// remove o ultimo elemento do array
array.pop()
console.log(array)

// remove um elemento pelo indice
delete array[0]

console.log(array)

console.log(typeof(array))