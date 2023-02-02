window.onload = () => {

    const startBtn = document.getElementById('start-race-btn');
    const resetBtn = document.getElementById('reset-race-btn');
    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');
    const audioWinner = document.getElementById('audioWinner');

    player1.style.marginLeft = 0;
    player2.style.marginLeft = 0;

    const resetCars = () => {
        player1.style.marginLeft = 0;
        player2.style.marginLeft = 0;
    };

    resetBtn.addEventListener('click', resetCars);

    startBtn.addEventListener('click', () => {
        player1.style.marginLeft = parseInt(player1.style.marginLeft) + Math.random() * 300 + "px";
        player2.style.marginLeft = parseInt(player2.style.marginLeft) + Math.random() * 300 + "px";

// Corrida Iniciada
// Criando competição
        
    const player1Win = parseInt(player1.style.marginLeft) > innerWidth;
    const playe2Win = parseInt(player2.style.marginLeft) > innerHeight;
    

    })
}
