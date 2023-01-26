//função somar dois numeros

function sum(numero1, numero2){
    return numero1 + numero2;
}

console.log(sum(2, 5));
console.log(sum(10, 9));
console.log(sum(8, 11));

//função calcular numeros de um jogo de vôlei

function calcularPontos(vitorias, empates) {
    let resultado;
    resultado = (vitorias * 2) + empates;
    return resultado;
}
console.log(calcularPontos(10,2));