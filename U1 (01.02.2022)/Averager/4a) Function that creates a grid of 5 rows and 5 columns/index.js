"use strict";


/*

The console is quite powerful
You can for instance call a function that you have defined
in your JS-file from the console. Check the video.

*/

function testConsole (p1) {
  document.querySelector("body").style.backgroundColor = p1;
}


/*

Exercise
Code a function F25 that fills a 5x5 grid with random numbers.
F25 must take one parameter: container. This is the reference to the HTML-element
that is the grid to which all the random numbers will be appended.

We have already done something like this in a previous exercise (Lektion 3, 4a).
You need however to place it in a function and you need to use the parameter
when appending the numbers (the divs that contain the numbers) to the gridContainer.

Test the function by calling it from the console.

VIDEO:  Record a video where you explain how F25 works line by line. Max 3 minutes.
        This video must be called F25Explanation.
        The video must also show how you call F25 from the console.

*/

function F25 (container){
  for (let i = 0; i < 25; i++){
    let gridContainer = document.querySelector (container);
    let div = document.createElement("div");
    
    div.innerHTML = randomNumber(100);

    gridContainer.appendChild(div);
    
  }
  

  function randomNumber ( max ) {
  return Math.floor( max * Math.random() );
}

}






// 4) Function declarations

// The function below will, each time it is called,
// return one random number, between 0 and max (0 inclusive, max exclusive)
// Use it to solve this problem. You do not need to understand how it works.
