/*
two ways to deal with elapsed time
1. with javascript's setInterval in setup()
2. with frameCount in draw()
*/
let bkg;

function setup() {
  createCanvas(400, 400);
  // big text
  textSize(60);
  // set bkg variable to a color with color() function
  // start with black, ok.
  bkg = color(0, 0, 0);
  // use setInterval to fire every 3 seconds
  // and call anonymous function to set random color
  // for bkg
  setInterval(() => {
    bkg = color(random(255), random(255), random(255));
  }, 3000);
}

function draw() {
  // paint background with whatever's in bkg
  background(bkg);
  fill(255);
  // display formatted elapsed time in seconds
  // nf() is 'number format' - check it out in the reference https://p5js.org/reference/#/p5/nf
  text(nf(millis() / 1000, 0, 2), 100, 100);
  // increment frames var by frameCount but wrap around at 60 with modulus
  let frames = frameCount % 60;
  strokeWeight(4);
  // move ball across canvas once every 60 frames, 3/4 from top of canvas
  ellipse(map(frames, 0, 60, 0, width), height * 0.75, 50);
}
