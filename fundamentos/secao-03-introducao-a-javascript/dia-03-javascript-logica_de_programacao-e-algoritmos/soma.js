// 1- 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:

let soma = 0;
for (let index = 1; index <= 50; index++) {
    soma += index;
}

console.log('A soma total de 1 a 50 é: ' + soma);

// 2-
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let index = 2; index <= 150; index++){
    if (index % 3 === 0) {
        contador++;
    }
}
    if (contador === 50){
        console.log("Mensagem Secreta; Grupo 13")
    }
console.log('A quantidade de numeros do intervalo entre 2 e 150 que são divisíveis por 3 é: ' + contador)


// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let jogadas = ["pedra", "papel", "tesoura"];

let player1 = jogadas[Math.floor(Math.random() ) ]
let player2 =


//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.


let age = 28;

if (age >= 18){
    console.log("A pessoa é maior de idade")
} else {
    console.log("A pessoa é menor de idade")
}




