let numero = 4;
let anos = 10

if (numero >= 2) {
    console.log(`1º Ano: ${numero} Chinchilas.`)
    for(let i=2; i < anos; i++) {
        numero = numero * 3;
        console.log(`${i}º Ano: ${numero} Chinchilas.`)
    }
} 
else {
    console.log('Número de chinchilas insuficientes para procriar.');
}

// function lerChinchilas() {
//     while(true) {
//         let chinchilasIniciais = 2;
        
//         if(chinchilasIniciais < 2 || isNaN) {
//             console.log('Deve ter pelo menos 2 chincilas iniciais.')
//         }
//     }
// }