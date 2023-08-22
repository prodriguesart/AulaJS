let numero = '27'
let contador = 0

for(let i=1; i < numero; i++) {
    if (numero % i === 0) {
        contador++
    }
}

if (contador == 2) {
    console.log(`${numero} é primo.`)
} else {
    console.log(`${numero} NÃO é primo.`)
}