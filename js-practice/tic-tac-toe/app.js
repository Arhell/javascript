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

  if(resultObj.markedBy !== null) {
    return false
  }

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

const chunkArr = (myArray, chunkSize) => {

}

const chunkArr2 = oneArg => {

}

chunkArray(cells,3);

var allArr = chunkArray(cells,3)

//console.log(allArr)






