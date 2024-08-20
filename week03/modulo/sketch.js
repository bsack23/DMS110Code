/*
/*
DMS110 - modulo demonstration

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
modulo - also known as remainder operator
returns integer remainder of one number divided by another
r = n % d
e.g. 
13 % 5 would return 3 because there are two fives in 13
with 3 left over as remainder
we can use this to 'reset' a variable back to zero when it
reaches a certain amount
*/

// declare and initialize some globals
let x1 = 0,
  x2 = 0,
  c = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20);
  fill(255);
  // draw an ellipse toward the top of the canvas
  ellipse(x1, 100, 20);
  // increment x1 by 1
  x1 += 1;
  // reset to zero when x1 reaches width
  x1 = x1 % width;
  // draw another ellipse in the middle of the canvas
  ellipse(x2, 200, 20);
  // increment x2 by 5
  x2 += 5;
  // reset to zero when it reaches 200, in this case
  // note syntactic sugar!
  x2 %= 200;
  // change fill from blue to red
  fill(c, 0, 255 - c);
  // increment c and perform modulo in one line
  c = (c + 2) % 255;
  // draw one more ellipse toward the bottom of the canvas
  ellipse(200, 300, 75);
}
