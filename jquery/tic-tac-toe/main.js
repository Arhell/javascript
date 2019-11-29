var wrapper = $('.wrapper');
var playerMove = 0;

for (i=0; i < 9; i++) {
  var innerBlock = wrapper.append('<div class="innerBlock"></div>');
  innerBlock++;
}

var clickBlock = $('.innerBlock');

clickBlock.on('click', function (event) {
  if (event.target === this) {
    if(playerMove%2 === 0) {
      this.append('x');
    }
    else {
      this.append('0');
    }
    playerMove++;
    checkWinner();
  }
})

function checkWinner() {
  if (clickBlock[0].innerHTML==='x' && clickBlock[1].innerHTML==='x' && clickBlock[2].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[3].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[5].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[6].innerHTML==='x' && clickBlock[7].innerHTML==='x' && clickBlock[8].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[0].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[8].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[2].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[6].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[1].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[7].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[0].innerHTML==='x' && clickBlock[3].innerHTML==='x' && clickBlock[6].innerHTML ==='x') {
    alert('Wins X')
  }
  if (clickBlock[2].innerHTML==='x' && clickBlock[5].innerHTML==='x' && clickBlock[8].innerHTML ==='x') {
    alert('Wins X')
  }

  if (clickBlock[0].innerHTML==='x' && clickBlock[1].innerHTML==='x' && clickBlock[2].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[3].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[5].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[6].innerHTML==='x' && clickBlock[7].innerHTML==='x' && clickBlock[8].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[0].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[8].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[2].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[6].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[1].innerHTML==='x' && clickBlock[4].innerHTML==='x' && clickBlock[7].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[0].innerHTML==='x' && clickBlock[3].innerHTML==='x' && clickBlock[6].innerHTML ==='0') {
    alert('Wins 0')
  }
  if (clickBlock[2].innerHTML==='x' && clickBlock[5].innerHTML==='x' && clickBlock[8].innerHTML ==='0') {
    alert('Wins 0')
  }
}



