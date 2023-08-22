let linhas = 20;
let caracter = 'O';
let imprime = '';

for(let i=0; i < linhas; i++) {
    for(let j=0; j<i; j++) {
        imprime += caracter;
    }
    console.log(imprime)
    imprime = ''
}