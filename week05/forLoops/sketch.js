/*
DMS110 - for() loops

syntax:
for (initialization; condition; update) {
  //statement
}

usage:
for (let i = 0; i < 10; i++) {
  print(i);
}
will print the numbers 0 - 9 to the console, and stop


*/
// make an array of javascript objects
let colors = [
  {
    r: 25,
    g: 127,
    b: 255,
  },
  {
    r: 225,
    g: 127,
    b: 25,
  },
  {
    r: 25,
    g: 255,
    b: 25,
  },
];

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(colors[0].r, colors[0].g, colors[0].b);
  // two nested for loops to draw a grid pattern
  for (let x = 0; x <= width; x += 50) {
    for (let y = 0; y <= height; y += 50) {
      // select a random index for the colors array
      let i = floor(random(colors.length));
      // fill with the color and draw an ellipse
      fill(colors[i].r, colors[i].g, colors[i].b);
      ellipse(x, y, 20);
    }
  }
  // choose the third color from the array, add alpha
  // and draw a rectangle at the mouse pointer
  fill(colors[2].r, colors[2].g, colors[2].b, 50);
  rect(mouseX, mouseY, 70, 70, 10);
}
