'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// ----------------------- Classes ----------------------- //

// Constructor functions and Inheritance

// ------------ ES5 ------------- //

// function Car(carspec){
//   this.name = carspec.name;
//   this.model = carspec.model;
//   this.description = carspec.description;
// }

// Car.prototype.drive = function(){
//   console.log('Driving...');
// }

// let car = new Car({name: 'Ford', model: 'Galaxy', description: 'Family car'});

// console.log(car.drive());//>> Driving...

// function Audi(carSpec){
//   Car.call(this, carSpec);
//   this.engine = carSpec.engine;
//   this.audiDrive = function(){
//     console.log('Audi Driving...');
//   }
// }

// Audi.prototype = Object.create(Car.prototype);

// Audi.prototype.constructor = Audi;

// const myAudi = new Audi({
//   name: 'My Audi',
//   model: 'A6',
//   description: 'Grat German car',
//   engine: 'A313'
// });

// console.log(myAudi.description); // >> Great German car

// ----------- ES6 CLASSES ------------- //

var Car = function () {
  function Car(carSpec) {
    _classCallCheck(this, Car);

    this.name;
    this.model = carSpec.model;
    this.description = carSpec.description;
  }

  // Adding methods to class:


  _createClass(Car, [{
    key: 'drive',
    value: function drive() {
      console.log('Driving...');
    }
  }]);

  return Car;
}();

var car = new Car({ name: 'Ford', model: 'Galaxy', description: 'family car' });

console.log(car.description); // >> family car
console.log(car.drive()); // >> Driving...
