import './style.css';
console.log('Hey, Mundo!');

function startNewGame(){
    console.log('New Game');

   const minhaBusca = fetch(`${BASE_URL}/new`)
                        .then((res) => res.json())
                        .then((data)=> {
                            shuffleButton.disabled = true;
                            drawButton.disabled = false;
                            stopButton.disabled = false;
                            console.log(data);
                        });

                        console.log('DECKID,' deckId);

}

const addCardToPlayer = (card, playerNumber) => {
    const img = document.createElement('img');
    img.src = card.image;
    img.alt = `${card.value} of ${card.suit}`;
    img.classList.add('card');
    document.querySelector(`.player-${playerNumber}.cards`).appendChild(img);
}

const drawCard = () => {
    fetch(`${BASE_URL}/${deckId}/draw`)
    .then(res=>res.json())
    .then((data)=>{
        const card = data.cards[0];
        addCardToPlayer(card, 1)
    });
    
}

const stopGame = () => {

}

const shuffleButton = document.querySelector('.shuffle');
shuffleButton.addEventListener('click', startNewGame);