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
  var getCellId = event.target.getAttribute('id');

  //console.log(getCellId)

  var resultObj = cells.find(function (item) {
    //console.log(item)
    if (item.id == getCellId) {
      return item
    }
  });
  //console.log(cells)

  resultObj.markedBy = currentPlayer;
  renderCells(cells)
  currentPlayer = currentPlayer === playerX ? playerO : playerX
  //console.log(currentPlayer)
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

var chunkArray = function(myArray, chunkSize) {
  var index       = 0,
      arrayLength = myArray.length,
      resultArray = [];

  for (index; index < arrayLength; index += chunkSize) {
    var myChunk = myArray.slice(index, index+chunkSize);

    resultArray.push(myChunk);
  }

  return resultArray;
}

// var chunks = function(array, size) {
//   var results = [];
//   var copy = array.slice(0)
//   while (copy.length) {
//     results.push(copy.splice(0, size));
//   }
//   return results;
// };



chunkArray(cells,3);

console.log(chunkArray(cells,3))






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








