let novasPessoasUsuarias = ['Érica', 'Silvia', 'Lucas', 'Felipe', 'Igor'];

let sistemas = ['Folha de Pagamento', 'RH', 'Treinamento', 'Slack', 'Zoom']

// Objetivo: Criar um software para adicionar novas pessoas usuárias.






let login = 'usuarioTrybe';
let senha = 'trybe2023';
let temAcesso = false;

if (login === 'usuarioTrybe' && senha === 'trybe2023' ){
    temAcesso = true;
    console.log('Acesso Permitido!');
}else{
    console.log('Acesso negado!');
}


// Sistema do 'For' para verificar se tem acesso?
// Passar pelo array do sistema?
// Como passar pelo array dos usuários?


if(temAcesso === true) {
    for(let indexSistemas = 0; indexSistemas < sistemas.length; indexSistemas += 1) {
        console.log("Sistemas: ", sistemas[indexSistemas])
    }
    for(let indexPessoas = 0; indexPessoas < novasPessoasUsuarias.length; indexPessoas += 1){
        console.log(novasPessoasUsuarias[indexPessoas])
    }


}
