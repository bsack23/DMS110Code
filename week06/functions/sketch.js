/*
functions helps us modularize code to make it easier
to read and maintain, and make it easier to reuse code.
*/
// make two Javascript objects to encapsulate the data we want to use
let ball1 = {
  x: 300,
  y: 200,
  xspeed: 4,
  yspeed: -3,
};
let ball2 = {
  x: 200,
  y: 100,
  xspeed: 2,
  yspeed: -4,
};

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(22);
  // call the functions we made below, using the two objects as arguments
  show(ball1);
  move(ball1);
  bounce(ball1);
  show(ball2);
  move(ball2);
  bounce(ball2);
}

// these functions have objects as their parameters
function show(ob) {
  stroke(255);
  strokeWeight(4);
  noFill();
  // we use dot notation to get the values from the object
  ellipse(ob.x, ob.y, 24, 24);
}

function move(ob) {
  // we can also change an object's values
  ob.x = ob.x + ob.xspeed;
  ob.y = ob.y + ob.yspeed;
}

function bounce(ob) {
  if (ob.x > width || ob.x < 0) {
    ob.xspeed = ob.xspeed * -1;
  }
  if (ob.y > height || ob.y < 0) {
    ob.yspeed = ob.yspeed * -1;
  }
}
