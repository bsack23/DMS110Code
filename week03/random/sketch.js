/*
DMS210 - the random() function
zero args - returns a floating-point number between 0 and < 1
one arg (n) - returns a floating-point number between 0 and < n
two args (n, m) - returns a floating-point number between n and < m
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = random(2, 4);
  print(x); // x will be a floating-point number between 2 and almost 4
  x = round(x);
  print(x); // x is now an integer between 2 and 4
  // start with a random color background
  background(random(255), random(255), random(255));
}

function draw() {
  noStroke();
  // let's combine conditional and random
  if (random() < 0.01) {
    // random() will return a float between 0 and almost 1
    // so 1 in 100 odds the expression will return true
    background(random(255), random(255), random(255));
    // random fill
    fill(random(255), random(255), random(255));
    // choose random x, y locations and random diameter
    // and display ellipse
    ellipse(random(width), random(height), random(5, width));
  }
}
