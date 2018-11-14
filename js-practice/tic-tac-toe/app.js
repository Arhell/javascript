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

// var сontainer = document.getElementsByClassName('wrapper')[0];
// var element = document.createElement('ul');
// сontainer.appendChild(element);
//
// cells.map(createCell)
//
// function createCell(item) {
//   var el = document.createElement('li');
//   el.setAttribute('id', item.id);
//   element.appendChild(el);
// }


var liItem = document.getElementsByTagName('li');
//console.log(liItem)

for (let i = 0; i < liItem.length; i++) {
  liItem[i].addEventListener("click", currentStep);
}

function currentStep() {
  var playerOne = 'x';
  var playerTwo = 'o';
  this.innerHTML = playerOne
  console.log(this)
}


