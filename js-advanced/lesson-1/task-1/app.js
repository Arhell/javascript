var myNumber,
    result,
    numEvent;

numEvent = Math.floor((Math.random() * 10) + 1);
console.log(numEvent);

function numRandom() {
  myNumber = document.getElementById("success").value;
  result = document.getElementById("result");

  if (myNumber == numEvent) {
    result.innerHTML = "Угадал";
  }
  else if (myNumber > numEvent) {
    result.innerHTML = "Повезет в следующий раз";
  } else {
    result.innerHTML = "Повезет в следующий раз";
  }
}