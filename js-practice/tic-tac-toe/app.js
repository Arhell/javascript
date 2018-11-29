var cells = [
  {id: 1, markedBy: null},
  {id: 2, markedBy: null},
  {id: 3, markedBy: null},
  {id: 4, markedBy: null},
  {id: 5, markedBy: null},
  {id: 6, markedBy: null},
  {id: 7, markedBy: null},
  {id: 8, markedBy: null},
  {id: 9, markedBy: null} // 9
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
    currentPlayer = 'x',
    playerMove = 0,
    playerX = 'x',
    playerO = '0';

function getFieldSelector(selector) {
  return document.getElementsByTagName(selector);
}

function eventClick(getElement) {
  for (let i = 0; i < getElement.length; i++) {
    getElement[i].addEventListener("click", currentStep);
  }
}

eventClick(allCells);



function currentStep(event) {
  //this.innerHTML = currentPlayer;
  //(currentPlayer === 'x') ? (currentPlayer = 'o') : (currentPlayer = 'x')
  // this.removeEventListener('click', currentStep)
  var getCellId = event.target.getAttribute('id');

  //console.log(getCellId)

  var resultObj = cells.find(function (item) {
    //console.log(item)
    if (item.id == getCellId) {
      return item
    }
  });

  resultObj.markedBy = currentPlayer;
  renderCells(cells)
  // if (currentPlayer === playerX) {
  //   currentPlayer = playerO;
  // } else {
  //   currentPlayer = playerX
  // }
  currentPlayer = currentPlayer === playerX ? playerO : playerX
  console.log(currentPlayer)
}

function renderCells(arr) {
  arr.map(function (item) {
    //console.log(item)
    if (item.markedBy !== null) {
      var field = document.getElementById(item.id)
      item.markedBy === 'x' ? field.classList.add('playerOne') : field.classList.add('playerTwo')
      //console.log(field)
    }
  })
}



// var chunks = function(array, size) {
//   var results = [];
//   while (array.length) {
//     results.push(array.splice(0, size));
//   }
//   return results;
// };
//
// var newArr = Array.from(allCells)
//
// var arrChunks = chunks(newArr,3);
//
//
// for (let i =0; i < arrChunks[0].length; i++) {
//
// }



// var newCell = {};
//
// for (let i =0; i < cells.length; i++) {
//   if (cells[i].id == getCellId) {
//     newCell =  cells[i]
//   }
// }
//
// console.log(newCell)
//
// cells.find(findId);
//
// function findId(elem) {
//   return elem === elem
// }








