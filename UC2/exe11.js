let qtde = 31
let imprime = ''

for(let i=0; i < qtde; i++) {
    if(i%2==0){
        imprime += '-'
    } else 
    imprime += '_'
}
console.log(imprime)