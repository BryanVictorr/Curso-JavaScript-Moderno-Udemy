const nome = "BRYAN"

console.log(nome.charAt(4)) // Mostra o caracter do indice
console.log(nome.charAt(5)) // nao vai funcionar, mas nao vai indicar erro

console.log(nome.charCodeAt(3)) // Mostra seu valor na tabela ASCII

console.log(nome.indexOf('Y')) // mostra o indice do caracter na string

console.log(nome.substring(1)) // mostra a string a partir do indice
console.log(nome.substring(1,3)) // mostra a string entre os indices

console.log('Nome :'.concat(nome).concat('!')) // concatena strings
console.log(nome.replace(/\w/g, 'e')) // altera todos os caracter da string

console.log('Ana,Maria,Pedro'.split(',')) // transforma uma string em um array separados por algum caracter