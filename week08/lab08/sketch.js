/*
DMS210
Lab 8 - drum sound board
*/
// an array to hold drums
let drums = [];
// 1. declare variables for drum sounds
let kick;

function preload() {
  // 2. load drum sounds
  kick = loadSound('sounds/kick.wav');
}

function setup() {
  createCanvas(400, 400);
  // 3. add a new instance of the Drum class to the array
  // Drum(x, y, sound, key, name [,color])
  drums.push(new Drum(100, 200, kick, 'z', 'kick'));
}

function draw() {
  background(20);
  for (let d of drums) {
    d.update();
    fill(255);
    // 4. add some text here that tells the user what sound is mapped to what key - use text() and some spacing - like text(d.key+":"+d.name, d.x ...
  }
}
// don't need to change anything below this line!
function keyPressed() {
  for (let d of drums) {
    if (key == d.key) {
      d.play();
      d.bright = 255;
    }
  }
  // print(key, ' ', keyCode);
  return false; // prevent default
}

class Drum {
  constructor(_x, _y, _sound, _key, _name, _c = 255) {
    this.x = _x;
    this.y = _y;
    this.sound = _sound;
    this.key = _key;
    this.name = _name;
    this.c = _c;
    this.bright = 0;
  }
  show(alpha) {
    noStroke();
    fill(this.c, alpha);
    ellipse(this.x, this.y, 50);
  }
  play() {
    this.sound.play();
  }
  update() {
    // fade out over time
    if (this.bright > 0) {
      this.bright = this.bright - 2;
    }
    this.show(this.bright);
  }
}
