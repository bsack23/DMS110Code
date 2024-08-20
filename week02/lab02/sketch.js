// DMS 210
// basic mandala
// for lab 02

let i = 0; // declare global variable
// & initialize to zero

function setup() {
  // we want a BIG canvas for this one
  createCanvas(windowWidth, windowHeight);
  // draw background just once
  background(20);
}

function draw() {
  //   color of the lines
  stroke(255, 200, 150);
  //   x and y are local variables that determine
  //   the endpoints (and lengths) of the lines
  // cos() and sin() keep things moving in a circle
  let x = (width / 2) * cos(i) + width / 2;
  let y = (height / 2) * sin(i) + height / 2;
  //   draw two lines offset 10 pixels from each other
  //   to create that moire effect
  //   https://en.wikipedia.org/wiki/Moir%C3%A9_pattern
  line(width / 2 - 5, height / 2, x, y);
  line(width / 2 + 5, height / 2, x, y);
  //   increment i by 0.1 - this is the speed
  //   at which the lines are drawn
  i = i + 0.1;
}
