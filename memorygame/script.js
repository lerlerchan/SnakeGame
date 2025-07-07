const gameBoard = document.querySelector('.game-board');
const cards = [];
let flippedCards = [];

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.textContent = value;
    card.addEventListener('click', () => {
        if (flippedCards.length < 2 && !card.classList.contains('flipped')) {
            card.classList.add('flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                const card1Value = flippedCards[0].textContent;
                const card2Value = flippedCards[1].textContent;

                if (card1Value === card2Value) {
                    console.log('Match!');
                    flippedCards = [];
                } else {
                    console.log('No match!');
                    setTimeout(() => {
                        flippedCards.forEach(card => card.classList.remove('flipped'));
                        flippedCards = [];
                    }, 1000);
                }
            }
        }
    });
    return card;
}

function initializeGame() {
    const values = ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'];
    values.sort(() => Math.random() - 0.5);

    values.forEach(value => {
        const card = createCard(value);
        cards.push(card);
        gameBoard.appendChild(card);
    });
}

initializeGame();