let nomes = ['Marcelo', 'Maria', 'Paulo']

// let nomes = []
// nomes[0] = 'Marcelo'
// nomes[1] = 'Maria'
// nomes[2] = 'José'

// nomes.push('Roberto') // Adicionar elemento na última posição do vetor.
// nomes.unshift('Paulo') // Adicionar elemento na primeira posição do vetor.
// nomes.pop() // Remove último elemento
// nomes.shift() // Remover primeiro elemento

console.log('Nomes:', nomes)
console.log('Tamanho do vetor:', nomes.length, 'elementos.')

for (let i=0; i<nomes.length; i++) {
    console.log(`Índice[${i}] - ${nomes[i]}`)
}

// Mostrar vetor usando join
console.log(nomes.join(' # '))

// Posição de um texto (índice) no vetor
console.log(nomes.indexOf('Paulo'))


// Objeto
let carro = {
    modelo: 'Fusca',
    ano: 1973
}

let carros = [];
carros.push({modelo: 'Fusca', ano: 1973});
carros.push({modelo: 'Corsa', ano: 2004});
console.log(carros);

// Repetição para mostrar os dados
for (let i=0; i < carros.length; i++) {
    console.log(`${carros[i].modelo}`, `Ano:`, `${carros[i.ano]}`)
}