/*
DMS210
Lab 06 example - object-oriented programming in p5.js
make our car animation into an encapsulated class that can
contain both data and functions.
*/
// no need for javascript objects up here anymore
// just declare two variables to hold the instances of the class
// we're about the create
let car1, car2;

function setup() {
  createCanvas(400, 400);
  // two instances of the 'Car' class ...
  car1 = new Car(200, 200);
  // this instance gets optional third argument for color
  car2 = new Car(100, 100, 'red');
}

function draw() {
  background(220);
  car1.show();
  car1.move();
  car1.bounce();
  car2.show();
  car2.move();
  car2.bounce();
}

// 'class' - self-contained and encpsulated!
class Car {
  // constructor get three arguments, but the third one has default value
  constructor(_x, _y, _col = 127) {
    this.x = _x;
    this.y = _y;
    this.col = _col;
    this.xspeed = 4;
    this.yspeed = -3;
  }
  // method has to have parentheses even if no arguments
  show() {
    noStroke();
    fill(this.col);
    rect(this.x, this.y, 60, 20);
    rect(this.x + 20, this.y - 10, 40, 10);
    fill(0);
    ellipse(this.x + 10, this.y + 20, 15);
    ellipse(this.x + 50, this.y + 20, 15);
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = -this.xspeed;
    }
    if (this.y > height || this.y < 0) {
      this.yspeed = -this.yspeed;
    }
  }
}
