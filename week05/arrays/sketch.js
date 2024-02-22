/*
DMS110 - Arrays
introducing array - a new data structure
an enumerated list of elements, separated by commas.
An array can hold many values under a single name, and you can access the values by referring to an index number.

syntax:
arrayName = [element1, element2, element3 ...]
to get value of an element, use its zero-based index

x = arrayName[0];

sets x to the value of the first element in the array, similarly:

arrayName[1] = "badger";

sets the value of the second element in the array to the string "badger";
*/
// objects use name: value pairs
let myObject = {
  name: 'value',
  name2: 'value2',
};
// arrays use index numbers
let myArray = ['thing1', 'thing2'];
// they can be combined!
let arrayOfObjects = [
  {
    r: 100,
    g: 200,
    b: 60,
  },
  {
    r: 40,
    g: 50,
    b: 200,
  },
];

let objectWithArray = {
  myName: 'badger',
  myJobs: ['eating', 'sleeping', 'biting people'],
};

let ind = 0;

function setup() {
  createCanvas(400, 400);
  // dot notation to get value from object
  print(myObject.name2);
  // zero-based index to get value from array
  print(myArray[0]);
  // overrunning array index will return 'undefined'
  print(myArray[3]);
  // arrays have length property we can use
  // for loop to print contents of an array
  for (let i = 0; i < arrayOfObjects.length; ++i) {
    print(arrayOfObjects[i].r, arrayOfObjects[i].g, arrayOfObjects[i].b);
  }
  // combine random(), array.length property, with floor() function
  // to safely get a random value from an array
  let randomArrayIndex = floor(random(objectWithArray.myJobs.length));
  print(
    'My name is ' +
      objectWithArray.myName +
      " and I'm probably " +
      objectWithArray.myJobs[randomArrayIndex]
  );
}

function draw() {
  ind = (ind + 10) % width;
  background(arrayOfObjects[0].r, arrayOfObjects[0].g, arrayOfObjects[0].b);
  fill(arrayOfObjects[1].r, arrayOfObjects[1].g, arrayOfObjects[1].b);
  ellipse(ind, 200, 60);
}
