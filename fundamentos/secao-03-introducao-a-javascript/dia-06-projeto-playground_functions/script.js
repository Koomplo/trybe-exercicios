// Crie uma função usando o operador &&
// Implemente a função compareTrue utiulizando somente o operador &&

const compareTrue = (test1, test2) => test1 && test2;
const girafa = true
const elefante = true
const macaco = false

// console.log(compareTrue(girafa, elefante))
// console.log(compareTrue(girafa, macaco))

// Crie uma função que divida uma frase
// Implemente a função ''splitSentence que divide uma frase de acordo com a quantidade de palavras.

function splitSentence(sentence) {
    return sentence.split(" ");
  }

// console.log(splitSentence('Go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Crie uma função que use concatenação de strings
// Implemente a função concatName que recebe um array de strings e retorna uma string com o último e o primeiro item.

function concatName(array) {
    return array[array.length - 1] + " " + array[0];
  }

// console.log(concatName(["Mario", "Josue", "Ivan", "Felipe", "Layla"]));