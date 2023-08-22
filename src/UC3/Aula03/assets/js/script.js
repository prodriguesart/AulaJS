// // Alteração pelo ID
// let paragrafo = document.getElementById('resposta');
// paragrafo.innerText = "Novo texto";
// paragrafo.style.color = "blue";

// // Alterção pela classe
// let paragrafos = document.getElementsByClassName('paragrafo');
// paragrafos[0].style.backgroundColor = "red";
// paragrafos[1].style.backgroundColor = "blue";

// // Alteração pela tab name
// let corpo = document.getElementsByTagName('body');
// corpo.style.backgroundColor = "yellow";

// // Alteração pelo nome
// let inputNome = document.getElementsByName('nome');
// inputNome[0].style.color = "red";

// Alteração via querySelector
// Ex: document.querySelector('p');

let paragrafo = document.getElementById('titulo')
paragrafo.innerHTML = 'Bem-vindo ao meu site!'
paragrafo.style.color = 'blue'

let texto = document.getElementsByClassName('texto')
texto[0].style.backgroundColor = "blue";
texto[1].style.backgroundColor = "green";

let novoParagrafo = document.createElement('p')
novoParagrafo.innerText = 'Este é um parágrafo dinâmico'

let novaDiv = document.getElementById('novaDiv')
novaDiv.appendChild(novoParagrafo)