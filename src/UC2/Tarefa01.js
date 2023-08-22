let lataTinta = {
    valor: 80.00,
    litros: 18,
}

let area = prompt('Qual o tamanho da área? (m²)')
let areaInicial = area;
let latas = 0;
while(area > 0){
    area-=lataTinta.litros;
    latas++;
}

alert(`Para ${areaInicial}m² de tinta, é preciso ${latas} latas de tinta, que custará R$${latas*lataTinta.valor}`)