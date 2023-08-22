function mostrarMensagem(param) {
    alert('Olá Mundo!'+param)
}

let botaoMostrar = document.getElementById('botaoMostrar')
/*botaoMostrar.onclick = function() { 
    mostrarMensagem(' Prof Marcelo');
} */

botaoMostrar.addEventListener('click', function() {
    mostrarMensagem(' Prof Marcelo')
})


//funcion mudarFundo()



// QA - H1
let titulo = document.getElementById('titulo').innerText = 'Bem-vindo ao meu site!'

// QB - DIV
let change_div = document.getElementById('minhaDiv').innerHTML = 'Este é um novo parágrafo.'

// QC - LINK
let change_link = document.getElementById('meuLink').setAttribute('href', 'https://www.senac.br/')

// QD - PARÁGRAFO
let destaque = document.getElementById('meuParagrafo').classList.add('destaque')

// QE - NOVO PARÁGRAFO
let newParagraph = document.createElement('p')
newParagraph.innerText = 'Aqui está um novo parágrafo Laranja.'
document.body.appendChild(newParagraph)
newParagraph.style.color = 'Orange'

let mouseParagrafo = document.getElementById('eventoParagrafo')
mouseParagrafo.style.color = 'darkblue'

let mudarFundo = document.get
// Testes
/*
let divPai = document.createElement('div')
document.body.appendChild(divPai);

let t = document.getElementById('titulo');
divPai.appendChild(t);
*/

// Exemplo de eventos
let eventoParagrafo = document.getElementById('eventoParagrafo')
eventoParagrafo.addEventListener('mouseover', function(){
    eventoParagrafo.classList.add('hover')
})

eventoParagrafo.addEventListener('mouseout', function() {
    eventoParagrafo.classList.remove('hover')
})