/*
DMS210 - Functions

a simple function that returns a value
converting fahrenheit to centigrade temp

*/
function setup() {
  createCanvas(400, 400);
  // big text
  textSize(50);
  // align it!
  textAlign(CENTER);
}

function draw() {
  background(20);
  // mouseY as input to map function
  // returns fahrenheit range between -40 and 212
  let inputTemp = map(mouseY, height, 0, -40, 212);
  // set a variable with our new function
  let outputTemp = fahrToCen(inputTemp);
  // display temps formatted nicely without floats
  let tempString = round(inputTemp) + 'F is ' + round(outputTemp) + 'C';
  // change color of text depending on range of temp
  if (outputTemp < 18) {
    fill(127, 127, 255);
  } else if (outputTemp >= 18 && outputTemp < 38) {
    fill(127, 255, 127);
  } else {
    fill(255, 127, 127);
  }
  text(tempString, 200, 200);
}

function fahrToCen(fahr) {
  // convert F to C using formula
  let cen = (fahr - 32) * (5 / 9);
  // return value (this is important!)
  return cen;
}
