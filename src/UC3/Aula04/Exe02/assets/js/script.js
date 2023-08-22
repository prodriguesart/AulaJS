let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')
let resultado = document.getElementById('resultado')

function somar() {
   let soma = Number(numero1.value)  + Number(numero2.value)

   resultado.innerText = soma
}

let botaoSoma = document.getElementById('botaoSoma')
botaoSomar.addEventListener('click', function() {
    somar();
})

function multiplicar() {
    let multiplicar =  Number(numero1.value) * Number(numero2.value)

    resultado.innerText = multiplicar
}

let botaoMultiplicar = document.getElementById('botaoMultiplicar')
botaoMultiplicar.addEventListener('click', function() {
    multiplicar();
})

function subtrair() {
    let subtrair =  Number(numero1.value) - Number(numero2.value)

    resultado.innerText = subtrair
}

let botaoSubtrair = document.getElementById('botaoSubtrair')
botaoSubtrair.addEventListener('click', function() {
    subtrair();
})

function dividir() {
    let dividir =  Number(numero1.value) - Number(numero2.value)

    resultado.innerText = dividir
}

let botaoDividir = document.getElementById('botaoDividir')
botaoDividir.addEventListener('click', function() {
    dividir();
})