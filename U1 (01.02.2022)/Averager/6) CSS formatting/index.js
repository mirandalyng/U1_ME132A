"use strict";

/*

Use a CSS-file to make the grid, the input fields, the results and the button look nice.
You're free to format this as you want, but I expect some effort. See my intial video
to get a sense of the level of formatting expected.

*/

function createNumberDiv() {
  let addDiv = document.createElement("div");
  addDiv.innerHTML = randomNumber(100);

  addDiv.addEventListener("click", function () {
    addDiv.classList.toggle("selected");
  });

  return addDiv;
}

function randomNumber(max) {
  return Math.floor(max * Math.random());
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

document.querySelector("button").addEventListener("click", function () {
  gridMaker(
    document.querySelector("#grid"),
    document.querySelector("#inputRows").value,
    document.querySelector("#inputCols").value
  );
});

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
