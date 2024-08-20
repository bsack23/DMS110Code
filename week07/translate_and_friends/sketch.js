/*
DMS210
translate() and friends:
scale()
rotate()
push() & pop()

scale() and rotate() can be used to change the size and rotation of of 
drawings on the canvas, but they do so by scalling and rotating everything
relative to the 0, 0 origin point (the upper left corner by default).

we can make this more usable and easier by using translate() to temporarily 
move the orign point to an arbitrary location

so:
rectMode(CENTER);
translate(width / 2, height / 2);
rotate(QUARTER_PI);
rect(0, 0, 200, 20);

will draw a rectangle in the center of the canvas at a 45 degree angle!

push() and pop() can be used to save and reset the transformation matrix
so the translation and rotation and scaling only apply to the code 
between push() and pop()



*/
// variable to determine degree of rotation
let deg = 0;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0);
  // save the current state with push()
  push();
  // move origin point to 50, 50
  translate(50, 50);
  fill(255, 0, 0);
  // do the rotation
  rotate(deg);
  rect(0, 0, 100, 50);
  // reset to saved state with pop()
  pop();
  // don't need a push here because this is the last
  // thing being drawn in the loop
  translate(300, 300);
  // rotate the opposit direction
  rotate(-deg);
  rect(0, 0, 100, 50);
  // increment deg
  deg++;
}
