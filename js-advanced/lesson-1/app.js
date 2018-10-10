var myNumber,
    answer,
    numEvent;

numEvent = Math.floor((Math.random() * 10) + 1);
console.log(numEvent);

function numRandom() {
  myNumber = document.getElementById("success").value;
  answer = document.getElementById("answer");

  if (myNumber == numEvent) {
    answer.innerHTML = "Угадал";
  }
  else if (myNumber > numEvent) {
    answer.innerHTML = "Повезет в следующий раз";
  } else {
    answer.innerHTML = "Повезет в следующий раз";
  }
}