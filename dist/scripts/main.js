'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

// class Car{
//   constructor(carSpec){
//    this.name;
//    this.model = carSpec.model;
//    this.description = carSpec.description;
//   }

//   // Adding methods to class:
//   drive(){
//     console.log('Driving...');
//   }
// }

// let car = new Car({name: 'Ford', model: 'Galaxy', description: 'family car'});

// console.log(car.description); // >> family car
// console.log(car.drive()); // >> Driving...

// --------------- Class inheritance ------------------ //

var Car = function () {
  function Car(carSpec) {
    _classCallCheck(this, Car);

    this.name;
    this.model = carSpec.model;
    this.description = carSpec.description;
  }

  _createClass(Car, [{
    key: 'drive',
    value: function drive() {
      console.log('Driving...');
    }
  }]);

  return Car;
}();

var Audi = function (_Car) {
  _inherits(Audi, _Car);

  function Audi(carSpec) {
    _classCallCheck(this, Audi);

    var _this = _possibleConstructorReturn(this, (Audi.__proto__ || Object.getPrototypeOf(Audi)).call(this, carSpec));

    _this.engine = carSpec.engine;
    return _this;
  }

  return Audi;
}(Car);

var audi = new Audi({ name: 'Audi', model: 'A6', engine: 'A313', description: 'Best Audi model' });
console.log(audi.model); // >> A6
console.log(audi.engine); // >> A313
console.log(audi.description); // >> Best Audi model
console.log(audi); // >> Audi({name: 'Audi', model: 'A6', engine: 'A313', description:'Best Audi model'})
