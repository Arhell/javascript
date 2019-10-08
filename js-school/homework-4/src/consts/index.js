export const RESET_VALUE = 1;
export const scores = [0, 0];
export const activePlayer = 0;
export const current = 0;
export const diceElement = document.querySelector('.dice');


const initGame = () => {
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;
  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  diceElement.style.display = 'none';
}

initGame();

export default initGame()