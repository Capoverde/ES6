'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

// ---------------------------------- Sets ---------------------------------- //

// What are sets?

// let cars = ['Audi', 'Ford', 'Audi', 'Mercedes', 'VW'];

// console.log(cars.length); // >> 5


var cars = new Set();

cars.add('Audi');
cars.add('Ford');
cars.add('Audi');
cars.add('Mercedes');

console.log('total number of cars', cars.size); // >> total number of cars 3
// drugie Audi zostało zignorowane

// ----------------- Sets for..of and Destructuring ------------------------- //

// for of loop:
// for(let car of cars){
//   console.log(car); // >> Audi, Ford, Mercedes
// }

// Destructuring:

var _cars = _slicedToArray(cars, 3),
    a = _cars[0],
    b = _cars[1],
    c = _cars[2];

console.log(cars); // >> Set { 'Audi', 'Ford', 'Mercedes }
console.log(a, b, c); // >> Audi Ford Mercedes
