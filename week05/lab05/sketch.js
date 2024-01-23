/*
This is an example for Lab 5 - a simple animation
using functions for code modularity and easy reusability
*/
// start by making two objects with the data we want to use in our functions
let car1 = {
  x: 200,
  y: 200,
  xspeed: 3,
  yspeed: -2,
  col: 'red',
  tireSize: 15,
};
let car2 = {
  x: 100,
  y: 100,
  xspeed: 6,
  yspeed: -4,
  col: 255,
  tireSize: 15,
};
function setup() {
  createCanvas(600, 400);
  // use dot notation to get the values in the object
  car2.tireSize = 35;
  print(car2.tireSize);
}

function draw() {
  background(220);
  // call our functions with our 2 objects as arguments
  car(car1);
  car(car2);
  move(car1);
  bounce(car1);
  move(car2);
  bounce(car2);
}

// these functions take generic objects as parameters
function car(obj) {
  noStroke();
  // use dot notation to get the objects' values
  fill(obj.col);
  rect(obj.x, obj.y, 60, 20);
  rect(obj.x + 20, obj.y - 10, 40, 10);
  fill(0);
  ellipse(obj.x + 10, obj.y + 20, 15, 15);
  ellipse(obj.x + 50, obj.y + 20, 15, 15);
}

function move(obj) {
  // can also use dot notation to set values
  obj.x = obj.x + obj.xspeed;
  obj.y = obj.y + obj.yspeed;
}

function bounce(obj) {
  if (obj.x < 0 || obj.x > width) {
    obj.xspeed = -obj.xspeed;
  }
  if (obj.y < 0 || obj.y > height) {
    obj.yspeed = -obj.yspeed;
  }
}
