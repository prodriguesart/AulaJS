let moedas = 3.00;
let troco = 0.00;

if (moedas >= 1.75) {
    troco = moedas - 3;
    console.log(`Você pode ficar 120 min.\n Troco: ${troco.toFixed(2)}`)
}
else if (moedas >= 1.75) {
    troco = moedas - 1.75;
    console.log(`Você pode ficar 60 min.\n Troco ${troco.toFixed(2)}`)
}

else if (moedas >= 1.00) {
    troco = moedas - 1;
    console.log(`Você pode ficar 30 min.\n Troco ${troco.toFixed(2)}`)
}

else
console.log('Valor de moedas insuficientes!');