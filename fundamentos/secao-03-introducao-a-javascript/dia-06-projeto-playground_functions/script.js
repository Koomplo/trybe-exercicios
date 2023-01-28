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

// Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
// Implemente a função footballPoints que calcula a pontuação de um time de futebol
// em um campeonato a partir do numero de vitórias (3 pts) ou empate (1 pts)

const footballPoints = (wins, ties) => (wins * 3) + (ties * 1);

// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Crie uma função que calcula o número de repetições do maior número.
// Implemente a função highestCount que deverá retornar a quantidade de vezes que o maior número se repete um array de números.

// Deixar pra depois, mais pesquisa.


// Crie 3 funções para calcular as áreas de um triângulo e de um retangulo
// Implemente 3 funções. Uma função que calcula a área de un triângulo, outra que calcula a área de un retangulo e uma função que exiba
// o resultado desses calculos de acordo com o parâmetro passado para função.
// A função calcTriangleArea recebe dois parâmetros, sendo eles, o valor da base (base) e outro da altura (height) e retorna o calculo da area.
// Calculo area do triângulo: (base * altura) / 2
// A função calcRectangleArea também recebe 2 parâmetros, sendo eles, o valor da base (base) e outro da altura (height) de um retângulo qualquer e retorna o calculo da area.
// Realize o calculo da area total do retângulo utilizando a fórmula: (base * altura).
// A função calcAllAreas que recebe 3 parâmetros sendo eles o valor da base (base), o valor da altura (height) e a forma geométrica (form)
// podendo ser triângulo ou retângulo.
// Se o parâmetro passado em form for "triângulo" o retorno deve ser uma string com o seguinte formato: O valor da area do triângulo é de: valorDaArea
// Se o parâmetro passado em form for "retângulo" o retorno deve ser uma string com o seguinte formato: O valor da area do retângulo é de: valorDaArea
// Caso não seja nenhum parametro acima deve retonar uma string com o seguinte formato: Não foi possivel fazer o cálculo, insita uma forma geométrica válida.
// A função calcAllAreas chame as funções calcTriangleArea e calcRectangleArea para exibir o resultado esperado.

let calcTriangleArea = (base, height) => (base * height) / 2;
let calcRectangleArea = (base, height) => base * height;
let calcAllAreas = (base, height, form) => {
    if (form === 'triângulo') {
        let area = calcTriangleArea(base, height);
        return `O valor da area do triângulo é de: ${area}`;
    } else if (form === 'retângulo') {
        let area = calcRectangleArea(base, height);
        return `O valor da area do retângulo é de: ${area}`;
    } else {
        return "Não foi possivel fazer o cálculo, insira uma forma geométrica válida.";
    }
}

// console.log(calcTriangleArea(10, 50, "triângulo"));
// console.log(calcRectangleArea(10, 50, "retângulo"));
// console.log(calcAllAreas(10, 50, "quadrado"));
