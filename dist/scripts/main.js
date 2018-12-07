'use strict';

// ----------------- Arrays ---------------------- //

// ----- Array Destructuring ----- //

var fruits = ['banana', 'apples', 'grapes'];

// let a = fruits[0],
//     b = fruits[1],
//     c = fruits[2];

// console.log(a,b,c); // outut >> banana, appale, grapes

// Simplier method - ARRAY NOTATION :

var a = fruits[0],
    b = fruits[1],
    c = fruits[2];

console.log(a, b, c); // outut >> banana, appale, grapes

// let [ a, ,c ] = fruits;
// console.log(a,c); // output >> banana, grapes


// -------- for of loop --------- //

var fruits1 = ['banana', 'apples', 'grapes', 'plums'];

// #1 for in <- older way of looping

for (var i in fruits1) {
  console.log(fruits1[i]); // output >> banana, apples, grapes, plums
}

// #2 for of <- ES6 new loop

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fruits1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var fruit = _step.value;

    console.log(fruit); //output >> banana, apples, grapes, plums
  }

  // --------------- Array.find --------------- //
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var services = [{ name: 'nails', activated: false }, { name: 'haircut', activated: true }, { name: 'feet therapy', activated: true }];

var activate = services.find(function (service) {
  return service.activated;
});
console.log(activate); //output >> {name: 'haircut', activated: true}
// Zwraca pierwszy, któr jest na true
