let sorteado = Math.floor(Math.random() * 100) + 1;
let numero = 0;
let tentativas = 0;

do {
    numero = prompt('Digite um número: ')
    tentativas++;
    if(sorteado > numero) {
        alert('O número sorteado é maior. (1 - 100)')
    } else if (sorteado < numero) {
        alert('O número sorteado é menor. (1 - 100)')
    } else {
        alert('Você acertou o número. Tentativas: '+tentativas)
    }
} while (sorteado != numero);
