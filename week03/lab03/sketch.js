// basic 10 PRINT based on Dan Schiffman's
// Coding Challenge #76
// https://thecodingtrain.com/challenges/76-10Print
// declare and initialize some variables
let x = 0;
let y = 0;
function setup() {
  createCanvas(1000, 1000);
  stroke(255);
  // draw background just once!
  background('darkblue');
}

function draw() {
  // half the time draw a line from upper left to lower right
  if (random() < 0.5) {
    line(x, y, x + 10, y + 10);
  } else {
    // otherwise, the opposite
    line(x, y + 10, x + 10, y);
  }
  // increment x spacing
  x = x + 10;
  // when x is at the far right
  if (x > width) {
    // reset x to the left, and
    x = 0;
    // increment y spacing - new line!
    y = y + 10;
  }
}
