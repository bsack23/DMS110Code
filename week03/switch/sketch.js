/*
DMS210
switch() demonstration
from MDN:
"The switch statement evaluates an expression, matching the expression's value against 
a series of case clauses, and executes statements after the first case clause with a 
matching value, until a break statement is encountered. The default clause of a switch 
statement will be jumped to if no case matches the expression's value."
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

contrast the switch() statement below with this:
if (n == 2) {
  bkg = color("red");
else if (n == 5) {
  bkg = color("blue");
else if (n == 6) {
  bkg = color("coral");
  } else { 
  bkg = 80;
  
which do you think is easier to read? 
which is easier to maintain?  
}
*/
// we can declare and initialize more that one variable at a time:
let bkg = 0,
  n = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(bkg);
  // this switch() takes n and executes a color assignment
  // based on its value
  switch (n) {
    case 2:
      bkg = color('red');
      break;
    case 5:
      bkg = color('blue');
      break;
    case 6:
      bkg = color('coral');
      // experiment with commenting the break keyword below - what happens?
      break;
    // break gets us out of the switch statement once the condition has been met, and prevents us from going ahead to the default value
    default:
      bkg = 80;
    // it's always a good idea and 'best practice' to have a default, even if you think your statement won't need it
  } // close switch()
  // frameCount is a system variable that starts at zero when the sketch starts and is incremented at every frame
  // we use modulo here so n is only incremented every 500 ms or so ...
  if (frameCount % 30 == 0) {
    n++;
    // modulo so n starts over at zero after reaching 9 ...
    n %= 10;
    print(n);
  }
}
