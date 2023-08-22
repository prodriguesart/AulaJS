function mostrarFila(fila) {
    for(let i=0; i<fila.lenght; i++) {
        console.log(`${i+1} - ${fila[i]}`);
    }
}

let fila = [];
let saiu = 'Ninguém em atendimento.';

// Adicionar cliente na fila;
fila.push('Marcelo')
fila.push('João')
fila.push('Maria')

// Mostrar Fila
console.log(`Total de pacientes: ${fila.lenght}`)
mostrarFila(fila)

fila.push('José')

// Tirar elemento da fila
saiu = fila.shift()

// Mostrar fila
console.log(`último chamado: ${saiu}.`)
mostrarFila(fila)