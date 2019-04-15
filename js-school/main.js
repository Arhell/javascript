var params = {
  lines: [
    {
      background: '#00f',
      updateTime: 1000,
      elements: [{
        background: '#00f',
        width: 25
      },
        {
          background: '#00f',
          width: 50
        },
        {
          background: '#00f',
          width: 25
        }]
    },
    {
      background: '#333',
      updateTime: 1000,
      elements: [{
        background: '#A0F',
        width: 25
      },
        {
          background: '#0AF',
          width: 25
        },
        {
          background: '#0AF',
          width: 25
        }]
    }
  ]
}

var body = document.getElementsByTagName('body')[0];
var blockHeight = document.documentElement.clientHeight / params.lines.length;

for (var i = 0; i < params.lines.length; i++) {
  createLines('lines', params.lines[i].background, params.lines[i].updateTime);
  var parent = document.querySelectorAll('.lines');
  for (var j = 0; j < params.lines[i].elements.length; j++) {
    var element = params.lines[i].elements[j]
    createBloks('line', element.width, blockHeight, element.background, parent[i])
  }
}

function createLines(className, bg, interval) {
  var element = document.createElement('div');
  element.className = className;
  element.style.backgroundColor = bg;
  element.style.display = "flex";
  body.appendChild(element)
  setInterval(function() {
    element.style.backgroundColor = randomColor();
  }, interval);
}

function createBloks(className, width, height, bg, parent) {
  var div = document.createElement('div');
  div.className = className;
  div.style.width = width + "%";
  div.style.height = height + "px";
  div.style.backgroundColor = bg;
  parent.appendChild(div)
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + "," + green + "," + blue + ")";
}