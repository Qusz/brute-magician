const cards = document.querySelector('.cards'),
      cardsStart = document.querySelector('.cards-game-start'),
      messageBox = document.querySelector('.message-box'),
      buttons = document.querySelector('.buttons'),
      yesButton = document.querySelector('.btn-yes'),
      noButton = document.querySelector('.btn-no');

const card1 = document.getElementById('10C'),
      card2 = document.getElementById('2C'),
      card3 = document.getElementById('3D'),
      card4 = document.getElementById('4S'),
      card5 = document.getElementById('AS'),
      card6 = document.getElementById('AD'),
      card7 = document.getElementById('JD'),
      card8 = document.getElementById('KC'),
      card9 = document.getElementById('KH'),
      card10 = document.getElementById('QS');

const cardsArray = [
  card1, card2, card3, card4, card5, card6, card7, card8, card9, card10
];
const cardsIteration = generateCards(cardsArray);

const okButton = document.createElement('button');
okButton.className = 'btn btn-ok';
okButton.textContent = 'Whatever';
okButton.addEventListener('click', (e) => {
  if(e.target.classList.contains('btn-ok')) {
    window.location.reload();
  }
});

cards.addEventListener('click', (e) => {
  if(e.target.classList.contains('playing-card')) {
    cardsStart.style.display = 'none';
  }

  messageBox.textContent = 'Ok. Now let me guess the card!';

  setTimeout(() => {
    buttons.style.display = 'flex';
    messageBox.textContent = 'Is this your card?'
    nextCard();

    yesButton.addEventListener('click', (e) =>{
      if(e.target.classList.contains('btn-yes')) {
        cards.innerHTML = '';
        messageBox.textContent = 'I\'m a brilliant magician!';
        gameOverButtons();
      }
    });

    noButton.addEventListener('click', (e) =>{
      if(e.target.classList.contains('btn-no')) {
        nextCard();
      }
    });
  }, 3000);
}, {once: true});

function* generateCards(cardsArray) {
  for(let i = 0; i < cardsArray.length; i++) {
    yield cardsArray[i];
  }
}

function nextCard() {
  const currentCard = cardsIteration.next().value;
  if (currentCard !== undefined) {
    cards.innerHTML = '';
    cards.appendChild(currentCard);
  } else {
    cards.innerHTML = '';
    messageBox.textContent = 'Liar!';
    gameOverButtons();
  }
}

function gameOverButtons() {
  yesButton.style.display = 'none';
  noButton.style.display = 'none';
  buttons.appendChild(okButton);
}

