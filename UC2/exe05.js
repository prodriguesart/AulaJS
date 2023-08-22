let velocidade = 121;
let limite = 100;

if(velocidade <= limite) {
    console.log('Você não foi mutado.')

} else if(velocidade <= limite+(limite*0.2) ) {
    console.log('Situação: Multa Leve')
} else {
    console.log('Situação: Multa Grave')
}