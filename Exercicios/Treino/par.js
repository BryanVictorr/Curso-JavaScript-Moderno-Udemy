function mostrarPares(lista) {
    
    for(let i = 0; i < lista.length; i++){
        
        if(lista[i] % 2 == 0){
            console.log(lista[i])
        }
    }
}

let lista = []

for(let i = 1; i < 20; i++){
    lista.push(i)
}

mostrarPares(lista)