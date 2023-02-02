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

    const player1Win = parseInt(player1.style.marginLeft) > window.innerWidth;
    const playe2Win = parseInt(player2.style.marginLeft) > window.innerHeight;

    if (player1Win) {
        alert('PLAYER 1 GANHOU!');
        audioWinner.play();
        resetCars();
    }

    if (playe2Win) {
        alert('PLAYER 2 GANHOU!');
        audioWinner.play();
        resetCars();
    }

    });

    const cars = document.querySelectorAll('.car');
    const alternatives = document.querySelectorAll('#players img');

    for (car of cars) {
        car.addEventListener('click', (event) => {
            const selected = documento.querySelector('.selected');
            if (selected) {
                selected.classList.remove('selected');
            }
            event.target.classList.add('selected');

        });

    for (persona of alternatives) {
        persona.addEventListener('click', (event) => {
            const selected = document.querySelector('.selected');
            if (selected) {
                selected.style.backgroundImage = `url(${event.target.src})`;
                selected.classList.remove('selected');
            }
        })
    }

        }

}
