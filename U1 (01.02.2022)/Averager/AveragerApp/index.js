"use strict";

// Program the complete Averager App here.
// Don't forget to include your CSS-file in the folder

// Include the link to your Github Repository here:
// Link: https://github.com/mirandalyng/U1_ME132A.git

// GLOBAL VARIABLES
// None allowed

// FUNCTION DECLARATIONS (in alphabetical order)

function adder(_array) {
  let sum = 0;

  for (let i = 0; i < _array.length; i++) {
    sum = sum + _array[i];
  }
  return sum;
}

function averg(_array) {
  return adder(_array) / _array.length;
}

function createNumberDiv() {
  let addDiv = document.createElement("div");
  addDiv.innerHTML = randomNumber(100);

  addDiv.addEventListener("click", function () {
    addDiv.classList.toggle("selected");



    addDiv.addEventListener("click", updateResults("selected"));
  });

  return addDiv;
}


function getArrayOfSelectedNumbers(className) {
  let arrayElements = Array.from(document.querySelectorAll("." + className));

  let arrayNumbers = [];

  for (let i = 0; i < arrayElements.length; i++) {
    let numberAsString = arrayElements[i].innerHTML;
    let number = parseInt(numberAsString);
    arrayNumbers.push(number);
  }

  return arrayNumbers;
}


function gridMaker(gridContainer, R, C) {
  gridContainer.style.display = "grid";
  gridContainer.style.gridTemplateColumns = `repeat(${C}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${R}, 1fr)`;

  gridContainer.innerHTML = "";

  for (let c = 0; c < C; c++) {
    for (let r = 0; r < R; r++) {
      gridContainer.appendChild(createNumberDiv());
    }
  }
}


function randomNumber(max) {
  return Math.floor(max * Math.random());
}


function roundString(numberWithManyDecimals, decimals) {
  var rounded = Math.pow(10, decimals);
  return (Math.round(numberWithManyDecimals * rounded) / rounded).toFixed(
    decimals
  );
}


function updateResults(className) {
  let array = getArrayOfSelectedNumbers(className);

  let selected = array.join(" | ");

  let amount = array.length;
  let sum = adder(array);
  let average = roundString(averg(array), 1);

  document.querySelector("#selected span").innerHTML = selected;
  document.querySelector("#amount span").innerHTML = amount;
  document.querySelector("#sum span").innerHTML = sum;
  document.querySelector("#average span").innerHTML = average;
}

// EVENTLISTENERS FOR EXISTING HTML-ELEMENTS
document.querySelector("button").addEventListener("click", function () {
  gridMaker(
    document.querySelector("#grid"),
    document.querySelector("#inputRows").value,
    document.querySelector("#inputCols").value
  );

  document.querySelector("#selected>span").innerHTML = "";
  document.querySelector("#average>span").innerHTML = "";
  document.querySelector("#sum>span").innerHTML = "";
  document.querySelector("#amount>span").innerHTML = "";
});

// DIRECT CODE
// Initialise the page directly, no need to wait for user to click first time.
document.onload = gridMaker(
  document.querySelector("#grid"),
  document.querySelector("#inputRows").value,
  document.querySelector("#inputCols").value
);

window.onload = gridMaker(
  document.querySelector("#grid"),
  document.querySelector("#inputRows").value,
  document.querySelector("#inputCols").value
);
