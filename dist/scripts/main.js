'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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

// -------------------- Maps -------------------- //


var carOne = {
  make: 'Audi'
};

var carTwo = {
  make: 'Ford'
};

var carAge = new Map();

carAge.set(carOne, 3);
carAge.set(carTwo, 5);

console.log(carAge);
// output >> Aap { { make: 'Audi } => 3, { make: 'Ford } => 5}

// -------------------- Maps with for of  -------------------- //

var cars = new Map();

cars.set('carOne', 'Audi');
cars.set('carTwo', 'Ford');
cars.set('carThree', 'GM');
cars.set('carFour', 'BMW');

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = cars[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _ref = _step2.value;

    var _ref2 = _slicedToArray(_ref, 2);

    var key = _ref2[0];
    var value = _ref2[1];

    console.log(key + ' = ' + value);
  }
  // output >> carOne = Audi, carTwo = Ford, carThree = GM, carFour = BMW

  // -------------------- Plain objects and the for of loop   -------------------- //
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var person = {
  name: 'Jan',
  address: '123 str, London',
  ocuppation: 'JS Developer'
};
