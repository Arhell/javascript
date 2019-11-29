const RESET_VALUE = 2;

let scores = [0, 0];
let activePlayer = 0;
let current = 0;
const diceElement = document.querySelector('.dice');
const dices = document.getElementsByClassName('dice')
let winScore = prompt('insert the number', 100)
let winBlock = document.getElementsByClassName('win-score')[0]
winBlock.innerHTML = winScore



const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  diceElement.style.display = 'none';
  for (var i = 0; i < dices.length; i++) {
    dices[i].style.display = 'none';
  }
}

initGame();

document.querySelector('.btn-roll').addEventListener('click', function() {
  for (var i = 0; i < dices.length; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;

    dices[i].src = `dice-${dice}.png`;
    dices[i].style.display = 'block';

    if (dice !== RESET_VALUE) {
      current += dice;
      document.getElementById('current-'+activePlayer).textContent = current;

      if (scores[activePlayer] + current >= winScore) {
        alert(`Player ${activePlayer} won!!!`);
      }

    } else {
      changePlayer();
    }
  }

});

const changePlayer = () => {
  current = 0;
  document.getElementById('current-'+activePlayer).textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
  activePlayer = +!activePlayer;
  diceElement.style.display = 'none';
  for (let i = 0; i < dices.length; i++) {
    dices[i].style.display = 'none';
  }
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

document.querySelector('.btn-hold').addEventListener('click', function() {
  scores[activePlayer] += current;
  document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
  changePlayer();
});


document.querySelector('.btn-new').addEventListener('click', function() {
  initGame();
});
