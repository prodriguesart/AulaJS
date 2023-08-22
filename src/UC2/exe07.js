let ladoA = 20;
let ladoB = 18;
let ladoC = 20;

if((ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoC + ladoB > ladoA)) { 
    if(ladoA == ladoB && ladoB == ladoC) {
        console.log('Triangulo Equilátero.')
    } else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC) {
        console.log('Triangulo Isóceles.')
    } else {
        console.log('Triangulo Escaleno.')
    }
} else {
    console.log('Os lados não podem formar um triangulo.')
}