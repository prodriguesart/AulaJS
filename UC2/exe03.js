let saque = 420
let resto = 0

let notasCem = 0;
let notasCinquenta = 0
let notasDez = 0

if(saque % 10 != 0) {
    console.log('Somente válido notas de 10, 50 e 100.')
} else {
    notasCem = Math.floor(saque / 100)
    resto = saque % 100;
    notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50;
    notasDez = Math.floor(resto / 10)

    console.log('Valor: ', saque)
    console.log('Quantidade de notas: ')
    if (notasCem > 0) {
        console.log('Notas de R$100: '+notasCem)
    }

    if (notasCinquenta > 0) {
        console.log('Notas de R$50: '+notasCinquenta)
    }

    if (notasDez > 0) {
        console.log('Notas de R$10: '+notasDez)
    }
}