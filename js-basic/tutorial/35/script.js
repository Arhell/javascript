var $start = document.querySelector('#start')
var $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame() {
  $game.style.backgroundColor = '#fff'
  $start.classList.add('hide')


  renderBox()
}

function renderBox() {
  
}