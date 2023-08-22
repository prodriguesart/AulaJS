let link = document.getElementById('link');
link.setAttribute('href', 'https://terra.com.br');
link.innerHTML = '<b>---->Clique aqui<----</b>';
link.style.color = 'darksalmon'

let meuPargrafo = document.getElementById('meuParagrafo')
meuPargrafo.classList.toggle('destaque')

// Criar elementos HTML
let novaDiv = document.createElement('div');
document.body.appendChild(novaDiv)

let novoParagrafo = document.createElement('p')
novoParagrafo.innerText = 'Eu sou um novo parágrafo.'
document.body.appendChild(novoParagrafo)

// Remover elementos HTML
// document.body.removeChild(novoParagrafo)