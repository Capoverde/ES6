"use strict";

//  -------- functions -------- //

//Default Parameters

// ES5 version:

function box(height, color, url) {
  var height = height || 50,
      color = color || "green",
      url = url || "google.com";
  console.log('height', height, 'color', color, 'url', url);
}
console.log(box(0));
// output >> height 50 color green url google.com
// to fix the problem: 
function box(height, color, url) {
  var height = height !== undefined ? height : 50;
  color = color || "green", url = url || "google.com";
  console.log('height', height, 'color', color, 'url', url);
}
console.log(box(0));
// output height >> 0

// ES6 version: 
function box() {
  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'green';
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'google.com';

  console.log('height', height, 'color', color, 'url', url);
}
console.log(box(0));
// output >> height 0 .....
