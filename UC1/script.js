let idade = 16 + 1
console.log('Minha idade é: ' + idade)

let numero1 = 10
let numero2 = 50

let resto = numero1 % numero2
console.log(`Resto da divisão ${resto}`)

let comparacao = (numero1 === numero2)
console.log(comparacao)

// Objetos
let professor = {
    nome: 'Marcelo',
    sobrenome: 'Petri',
    idade: 44,
    peso: 80.5,
}

let professor1 = {
    nome: 'Cláudia',
    sobrenome: 'Werlich',
    idade: '25',
    peso: '40.5',
}

// console.log(professor.nome, professor.idade)
// console.log(professor1.idade, professor1.sobrenome)

console.log(`Nome: ${professor.nome}`)
console.log(`Sobrenome: ${professor.sobrenome}`)
console.log(`Idade: ${professor.idade}`)
console.log(`Peso: ${professor.peso}`)

let idade1 = 44
idade1 = idade1 + Number('1');
console.log(idade1)