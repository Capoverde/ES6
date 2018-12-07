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

class Car{
  constructor(carSpec){
   this.name;
   this.model = carSpec.model;
   this.description = carSpec.description;
  }

  drive(){
    console.log('Driving...');
  }
}


class Audi extends Car {
  constructor(carSpec){
    super(carSpec);
    this.engine = carSpec.engine;
  }
}

let audi = new Audi({name: 'Audi', model: 'A6', engine: 'A313', description:'Best Audi model'});
console.log(audi.model);// >> A6
console.log(audi.engine);// >> A313
console.log(audi.description);// >> Best Audi model
console.log(audi);// >> Audi({name: 'Audi', model: 'A6', engine: 'A313', description:'Best Audi model'})