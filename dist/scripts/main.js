'use strict';

//  -------- functions -------- //

//Default Parameters

// ES5 version:

// function box(height, color, url){
//    var  height = height || 50,
//         color = color || "green",
//         url = url || "google.com";
//         console.log('height', height,
//                     'color', color,
//                      'url', url);
// }
// console.log(box(0));
// output >> height 50 color green url google.com
// to fix the problem: 
// function box(height, color, url){
//   var  height = (height !== undefined) ? height : 50
//        color = color || "green",
//        url = url || "google.com";
//        console.log('height', height,
//                    'color', color,
//                     'url', url);
// }
// console.log(box(0));
// output height >> 0

// ES6 version: 
// function box(height = 50, color = 'green', url='google.com'){
//   console.log('height', height,
//                    'color', color,
//                     'url', url);
// }
// console.log(box(0));
// output >> height 0 .....


// ------ Expressions as Default parameters --- //

function setHeight(value) {
  return value * 10;
}

function box() {
  var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : setHeight(10);
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'green';
  var url = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'google.com';

  console.log('height:', height, 'color:', color, 'url:', url);
}
console.log(box());
// putput >> height: 100

// second example

function multiply() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  var numTwo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : num;

  return num * numTwo;
}
console.log(multiply(3)); // output >> 9
console.log(multiply()); // output >> 4
console.log(multiply(3, 9)); // output >> 27

// ---- REST OPERATOR ----- //

// ES5 version

function sum() {
  // Trzeba było zamieić arguments na tablicę zeby mozna było iterować
  var numbers = Array.prototype.slice.call(arguments);
  var result = 0;

  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(3, 5, 7, 9));

// ES6
function sum() {
  //wystarczy dodac 3 kropki, które oznaczaja: 
  // Zamien argument, lub argumenty na tablicę i mozna iterowac

  var result = 0;

  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  numbers.forEach(function (number) {
    result += number;
  });
  return result;
}
console.log(sum(3, 5, 7, 9));

// function sum(...numbers, arg1, arg2, arg3) 
// w tym wypadku nie mozna uzyc spreda, wyrzuci syntaxError

// function sum(arg1, arg2, arg3, ...numbers) tak jest ok
