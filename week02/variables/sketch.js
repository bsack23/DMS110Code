/*
DMS210 - variables, javascript objects, and the map function

*/
// variables in javascript, declared with let keyword and
// (optionally) initialized with assignment operator =
let xloc = 0;
let yloc;
/*
these are global variables because they are
declared outside of any function or object
globals can be used anywhere in the sketch

variable names can't start with a number or contain a space
also no other non-alphanumeric characters !@#$%^&*<>,.?/-+=
_ maybe, but avoid - use camelCase instead


  math shortcuts
  x += y instead of x = x + y
  x -= y etc.
  x *= y
  x /= y
  x %= y what the heck is this??
 

javascript objects - an encapsulated data type
name: value pairs separated by commas inside curly braces
 */
let col = {
  // this one could represent a color value
  r: 255,
  g: 250,
  b: 0,
};

function setup() {
  createCanvas(400, 400);
  yloc = height;
  let friend = 'badger the cat';
  // above is a local variable and can only be used in setup()
  print(friend);
} // end setup()

function draw() {
  background(20);
  noStroke();
  // to use javascript objects we use dot notation
  // nameOfObject.nameOfVariable
  fill(col.r, col.g, col.b, 60);
  ellipse(100, 100, 250);
  //col.r = xloc;
  col.b = 255 - col.r;
  // map() - returns a value - Re-maps a number from one range to another.
  // map(input, inputStart, inputEnd, outputStart, outputEnd)
  // re-map the value of xloc from 0 to width to 0 to 255
  col.r = map(xloc, 0, width, 0, 255);
  fill(col.r, col.g, col.b);
  //rect(300, 200, 100);
  ellipse(xloc, yloc, 50);
  //rect(200, 200, 100);
  stroke(255);
  line(xloc, yloc, width, height);
  // incrementing and decrementing x and y values to animate ellipse()
  //xloc = xloc + 1;
  xloc += 1;
  yloc -= 0.5;
} // close draw()
