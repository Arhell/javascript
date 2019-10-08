import '../consts/index'
import changePlayer from "./changePlayer";

const roll = () => {
  document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;

    diceElement.src = `dice-${dice}.png`;
    diceElement.style.display = 'block';

    if (dice !== RESET_VALUE) {
      current += dice;
      document.getElementById('current-'+activePlayer).textContent = current;

      if (scores[activePlayer] + current >= 20) {
        alert(`Player ${activePlayer} won!!!`);
      }

    } else {
      changePlayer();
    }
  });
}

export default roll()
