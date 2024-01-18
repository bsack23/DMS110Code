/*
Example sketch for DMS110 week 01
Basic drawing, shapes, colors
*/
function setup() {
  // make a canvas 600 px wide & 400 px high
  createCanvas(600, 400);
  // the rectMode() function determines the location from which rectangles are drawn
  //rectMode(CENTER);// CORNER is the default
  //noLoop();
  // print() will print information to the console
  print(height);
  // height and width are built-in variables that contain the
  // current height and width of the canvas
}

function draw() {
  background(20, 50, 50);
  // background(), fill(), stroke() functions all take arguements that determine
  // the color of everything that follows, until changed by another function
  // color arguments:
  // one value = greyscale
  // 2 values = greyscale and alpha (transparency)
  // 3 values = r,g,b
  // 4 values = r, g, b, alpha
  //noStroke();
  //noFill();
  // the above make stroke and fill non-visible
  // strokeWeight() changes the width of stroke lines - argument is pixels
  strokeWeight(4);
  fill(255, 127, 0);
  stroke(127, 255, 127);
  // ellipse(xlocation, ylocation, diameter [,height])
  ellipse(width / 2 - 100, 200, 200);
  fill(127, 255, 127);
  //stroke(255, 127, 0);
  ellipse(width / 2, height / 2, 200);
  fill(255, 0, 127, 127);
  // rect(xloc, yloc, width, height)
  // default location is based on rect's upper left corner
  rect(50, 50, 100, 100);
  strokeWeight(1);
  stroke(255);
  // line draws a stroke between two points
  // line(x1, y1, x2, y2)
  // and is not affected by fill()!
  line(0, 0, 600, 400);
}
