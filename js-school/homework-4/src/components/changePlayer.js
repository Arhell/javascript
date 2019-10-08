import '../consts/index'

const changePlayer = () => {
  current = 0;
  document.getElementById('current-'+activePlayer).textContent = 0;
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
  activePlayer = +!activePlayer;
  diceElement.style.display = 'none';
  document.querySelector(`.player-${activePlayer}-panel`).classList.toggle('active');
}

export default changePlayer()