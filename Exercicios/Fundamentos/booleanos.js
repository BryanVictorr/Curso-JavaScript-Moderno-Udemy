let is = false
console.log(is)

is = true
console.log(is)

is = 1
console.log(!!is)

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(is = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)

console.log(!!('' || 0 || ' '))

let nome = 'Bryan'

console.log(nome || 'Desconhecido')