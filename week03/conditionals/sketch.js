/*
DMS110 - conditionals and Boolean logic
*/
// declare and initialize some global variables
let xloc = 100;
let xSpeed = 3;
let dia = 50;

function setup() {
  createCanvas(400, 400);
  /* conditional - if/then
syntax looks like this
if(boolean_expression) {
    code_to_execute_if_boolean_expression_is_true
}
  Boolean expressions evaluate to true or false
  relational operators are >, <, ==, >=, <=
  also negation! - != means 'not equal to'
  important note! == is not the same as =
  == is for comparison, = is assignment!

  Boolean logic - && is AND, || is OR
*/
  let n = 6;
  let m = 23;
  let name = 'badger';
  if (n != 7 || name == 'badger') {
    // do something
    print('yes');
  }

  let a = n < m;
  let b = m <= 20;
  let c = a && b;
  let d = a || b;
  print(a, b, c, d);
  //
}

function draw() {
  background(20);
  noStroke();
  if (mouseX > width / 2) {
    // if mouse is on left of canvas
    fill(255, 0, 255); // turn fill purple
  } else if (mouseY > height / 2) {
    //
    fill(255, 0, 0);
  } else {
    fill(0, 255, 0);
  }
  ellipse(xloc, height / 2, dia);
  xloc = xloc + xSpeed;
  // *, / % performed before +, -
  if (xloc > width - dia / 2 || xloc < 0 + dia / 2) {
    //xSpeed = -xSpeed;
    //or
    xSpeed *= -1;
    dia = random(20, 75);
  }
}
