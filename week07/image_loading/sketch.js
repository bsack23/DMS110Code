/*
image loading - use preload()
preload() will run before anything else in the sketch happens
so for any outside asset - use preload()
steps:
1. upload file
2. create variable
3 in preload(), use loadImage to initialize var

syntax: 
variable = loadImage(path_to_image);

4. use image() to display image
syntax:
image(var_name, xloc, yloc [, width, height]);

width and height are optional but can be used to scale a 
large image down to size

by default, upper left corner of image the destination for x and y location
use imageMode(CENTER) to move that point to center of image

background() can also take image as argument
*/

let img, bkg;

function preload() {
  img = loadImage('images/banana.png');
  bkg = loadImage('images/sand.jpg');
}

function setup() {
  createCanvas(400, 400);
  // imageMode(CENTER);
}

function draw() {
  imageMode(CORNER); // need this because we're using an image as background
  background(bkg);
  imageMode(CENTER);
  // mouse position will scale width and height of image
  image(img, width / 2, height / 2, mouseX, mouseY);
}
