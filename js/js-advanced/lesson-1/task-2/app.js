var numOne,
    numTwo,
    sumResult,
    result;

result = document.getElementById("result");

function plus() {
  numOne = document.getElementById("numOne").value;
  numOne = parseInt(numOne);

  numTwo = document.getElementById("numTwo").value;
  numTwo = parseInt(numTwo);

  sumResult = numOne + numTwo;
  result.innerHTML = sumResult;
}

function minus() {
  numOne = document.getElementById("numOne").value;
  numOne = parseInt(numOne);

  numTwo = document.getElementById("numTwo").value;
  numTwo = parseInt(numTwo);

  sumResult = numOne - numTwo;
  result.innerHTML = sumResult;
}

function multiply() {
  numOne = document.getElementById("numOne").value;
  numOne = parseInt(numOne);

  numTwo = document.getElementById("numTwo").value;
  numTwo = parseInt(numTwo);

  sumResult = numOne * numTwo;
  result.innerHTML = sumResult;
}

function divide() {
  numOne = document.getElementById("numOne").value;
  numOne = parseInt(numOne);

  numTwo = document.getElementById("numTwo").value;
  numTwo = parseInt(numTwo);

  sumResult = numOne / numTwo;
  result.innerHTML = sumResult;
}

