var cell = [
  id = 1,
  id = 2,
  id = 3,
  id = 4,
  id = 5,
  id = 6,
  id = 7,
  id = 8,
  id = 9
];

function makeCell() {
  var listContainer = document.getElementsByClassName('wrapper')[0];
  var listElement = document.createElement('ul');
  listContainer.appendChild(listElement);
  var numListItems = cell.length;

  for (let i = 0; i < numListItems; ++i) {
    var listItem = document.createElement('li');
    listItem.innerHTML = cell[i];
    listElement.appendChild(listItem);
  }
}

makeCell()

console.log(cell.length);

var liItem = document.getElementsByTagName('li');
console.log(liItem)

for (let i = 0; i < liItem.length; i++) {
  liItem[i].addEventListener("click", currentStep);
}

function currentStep() {
  console.log('!!!')
}

