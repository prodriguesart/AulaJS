let numero = 332;
let soma = 0;
let divisores = [];

for (let i=1; i < numero; i++) {
    if (numero % i === 0) {
        divisores.push(i)
        soma += i;
    }
}

if (soma === numero) {
    console.log(`${numero} é um número perfeito.`);
} else {
    console.log(`${numero} NÃO é um número perfeito.`)
}
console.log(`Divisores: ${divisores.join(' - ')}`)