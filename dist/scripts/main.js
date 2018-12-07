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

// ---------------------------- Weak Sets -------------------------------- //
// Tylko obiekty, nieiterowalne


var weakCars = new WeakSet();

weakCars.add({ driver: 'Piotr' });

var passenger = { passenger: 'Inka' };

weakCars.add(passenger);
console.log(weakCars.has(passenger)); // >> true

weakCars.delete(passenger);
console.log(weakCars.has(passenger)); // >> false

// ------------------------- When should we use Weak Sets ---------------------------- //
// They are used when You don't want to mutate array
var carSlides = [{ car: 'Audi', seen: false, image: 'url' }, { car: 'Ford', seen: false, image: 'url' }, { car: 'Mercedes', seen: false, image: 'url' }, { car: 'VW', seen: false, image: 'url' }];

// function clicked(carSlides){
//   carSlides.forEach(car =>{
//     //  mutates each object in the carSlides array
//     car.seen = true // seen jest teraz ustawione na true
//   })
// }
// Żeby zapobiec mutowaniu tablicy: 
var carsViewed = new WeakSet();

function clicked(carSlides) {
  carSlides.forEach(function (car) {
    carsViewed.add(car); //
  });
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = carSlides[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var car = _step.value;

    console.log(carsViewed.has(car)); // >> true, true, true, true
  }
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

console.log(carSlides); //seen jest cały czas na false

// lets say this is sets true when user clicks on a link somewhere

// let linkClicked = true;
//  if(linkClicked){
//    clicked(carSlides);
//  }
// console.log(carSlides);
