import './style.css';
console.log('Hey, Mundo!');

const BASE_URL = 'https://deckofcardsapi.com/api/deck';

let deckId;

let playersScore = {
    1: 0,
    2: 0
}

function startNewGame(){

    fetch(`${BASE_URL}/new`)
        .then((res)=> res.json())
        .then((data)=>
        {
            deckId = data.deck_id;
            console.log("deckId", deckId);
            fetch(`${BASE_URL}/${deckId}/shuffle`)
            .then((res)=> res.json())
            .then((data)=>{
                shuffleButton.disabled = true;
                drawButton.disabled = false;
                stopButton.disabled = false;
                console.log(data);
            });
        });

    console.log("DECKID", deckId);
                       
}

    const addCardToPlayer = (card, playerNumber) => {
        console.log(card, playerNumber);
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = `${card.value} of ${card.suit}`;
        img.classList.add('card');
        document.querySelector(`.player-${playerNumber}.cards`).appendChild(img);

        if (card.value === 'JACK' || card.value === 'QUEEN' || card.value === 'KING') {
            playersScore[playerNumber] += 10;
          } else if (card.value === 'ACE') {
            playersScore[playerNumber] += 1;
          } else {
            playersScore[playerNumber] += Number(card.value);
          }


          document.querySelector(`.player-${playerNumber}.score`).textContent = playersScore[playerNumber];
    }

    const drawCard = () =>{
        fetch(`${BASE_URL}/${deckId}/draw`)
        .then(res=>res.json())
        .then((data)=>{
            const card = data.cards[0];
            addCardToPlayer(card, 1);
        });

    }

    const stopGame = () =>{
        console.log("jogo parou");
    }

const shuffleButton = document.querySelector('.shuffle');
const drawButton = document.querySelector('.draw');
const stopButton = document.querySelector('.stop');
shuffleButton.addEventListener('click', startNewGame);
drawButton.addEventListener('click', drawCard);
stopButton.addEventListener('click', stopGame);

console.log(shuffleButton);