/*
DMS210
Classes help us to encapsulate both our data and the functions 
into one thing that can have its own identity!

syntax:
class ClassName {
  constructor(variables_to_pass_in) {
    // this keyword binds variables to a specific instance
    this.property = some_value;
  }
  methodName() {
    // body of method - classes have methods rather than functions
  }
}

in use:
// create new instance of a class
let instanceName;
instanceName = new ClassName(variables_if_any);
// run the method
instanceName.methodName();

*/
// array to hold many instances of Bubble class
let bubbles = [];
// variable for an instance of Bubble class
let bigBubble;
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 100; ++i) {
    bubbles.push(new Bubble(random(width), random(height), 'red'));
  }
  // instantiate one bubble
  bigBubble = new Bubble(width / 2, height / 2);
}

function draw() {
  background(20);
  for (let b of bubbles) {
    b.show();
    b.wiggle();
  }
  bigBubble.show();
}

class Bubble {
  constructor(_x, _y, _c = 255) {
    this.x = _x;
    this.y = _y;
    this.c = _c;
  }

  show() {
    stroke(color(this.c));
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, 60);
  }

  wiggle() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }
}
