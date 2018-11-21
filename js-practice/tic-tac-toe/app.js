var cells = [
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {},
  {} // 9
];


function makeCells() {
  var сontainer = document.getElementsByClassName('wrapper')[0];
  var element = document.createElement('ul');
  сontainer.appendChild(element);

  for(let i = 0; i < cells.length; i++) {
      var item = document.createElement('li');
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
}

var chunks = function(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};

var newArr = Array.from(allCells)

console.log(chunks(newArr,3)[0][2])











