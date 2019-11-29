var tab;
var tabContent;

window.onload = function () {
  tabContent = document.getElementsByClassName('tabContent');
  tab = document.getElementsByClassName('tab');
  hideTabContent(1);
}

function hideTabContent(a) {
  for (var i = a; i<tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('active');
  }
}

document.getElementById('tabs').onclick = function (event) {
  var target = event.target;
  if (target.className == 'tab')  {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabContent(i);
        break;
      }
    }
  }
}

function showTabContent(b) {
  if(tabContent[b].classList.contains('hide')) {
    hideTabContent(0);
    tab[b].classList.add('active');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}

var catImg = document.getElementById('img'),
  countSpan = document.getElementById('span'),
  resetBrn = document.getElementById('reset'),
  count = 0;


catImg.onclick = function () {
  count += 1;
  countSpan.innerHTML = count;
}

resetBrn.onclick = function () {
  if (count >= 1) {
    count = 0;
    countSpan.innerHTML = count;
  }
}

