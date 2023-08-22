let vetor = [];
let total = 0;

// Objeto
let conta = {
    descricao: 'Aluguel',
    valor: 1200
}

// Adicionar objeto no vetor
vetor.push(conta)

// Objeto 2
let conta2 = {
    descricao: 'Condominio',
    valor: 500
}

// Adicionar objeto no vetor
vetor.push(conta2)

// Adicionar objeto no vetor
vetor.push(
   {descricao:'Carro', valor:300},
   {desrcicao:'Casa', valor:600}
)
// Mostrar resultados
for (let i=0; i < vetor.length; i++) {
    console.log(`${vetor[i].descricao} - R$ ${vetor[i].valor}`)
    total += vetor[i].valor;
}
console.log('------------------------------')
console.log(`${vetor.lenght} Conta(s) - Total: R$ ${total}.`)