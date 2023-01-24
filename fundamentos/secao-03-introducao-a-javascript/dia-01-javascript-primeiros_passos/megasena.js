let jogoTryber = [15, 14, 30, 19, 6, 51];

let n1 = Math.floor(Math.random * 60) + 1;
let n2 = Math.floor(Math.random * 60) + 1;
let n3 = Math.floor(Math.random * 60) + 1;
let n4 = Math.floor(Math.random * 60) + 1;
let n5 = Math.floor(Math.random * 60) + 1;
let n6 = Math.floor(Math.random * 60) + 1;

let sorteioTryber = [n1, n2, n3, n4, n5, n6];

console.log(sorteioTryber)


for (let index = 0; index jogoTryber.length; index;) {
    console.log(jogoTryber[index]);
}

for (let index = 0; index < sorteioTryber[index]);{

}

let acertos = 0;

for (let iJogo = 0; iJogo < jogoTryber.length; iJogo++);{


    for (let iSorteio = 0; iSorteio < sorteioTryber.length; iSorteio++){

        if let (jogoTryber[iJogo] == sorteioTryber[iSorteio]) {
            acertos++
        }

    }
}

console.log("Número de acertos:", acertos)