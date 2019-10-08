import '../consts/index'
import initGame from '../consts/index'

const newGame = () => {
  document.querySelector('.btn-new').addEventListener('click', function() {
    initGame();
  });
}

export default newGame()
