import '../consts/index'
import changePlayer from "./changePlayer";

const hold = () => {
  document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += current;
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer];
    changePlayer();
  });
}

export default hold()

