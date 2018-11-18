var cells = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9}
];


function makeCells() {
  var сontainer = document.getElementsByClassName('wrapper')[0];
  var element = document.createElement('ul');
  сontainer.appendChild(element);

  for(let i = 0; i < cells.length; i++) {
      var item = document.createElement('li');
      item.setAttribute('id', cells[i].id);
      element.appendChild(item);
    }
}

makeCells()

var allCells = getFieldSelector('li'),
    currentPlayer = 'x';

function getFieldSelector(selector) {
  return document.getElementsByTagName(selector);
}

function eventClick(getElement) {
  for (let i = 0; i < getElement.length; i++) {
    getElement[i].addEventListener("click", currentStep);
  }
}

eventClick(allCells);

function currentStep() {
  this.innerHTML = currentPlayer;
  (currentPlayer === 'x') ? (currentPlayer = 'o') : (currentPlayer = 'x')
  this.removeEventListener('click', currentStep)
  checkWinner(allCells)
}

function checkWinner(getElement) {
  var winConbinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  for (let i =0; winConbinations.length; i++) {
    var win = winConbinations[i];

    if ((getElement[win[0]]).innerHTML === (getElement[win[1]]).innerHTML &&
        (getElement[win[1]]).innerHTML === (getElement[win[2]]).innerHTML &&
        (getElement[win[0]]).innerHTML !== '') {alert('WIN!!')}
  }
}


