// ----------------------- Classes ----------------------- //

// Constructor functions and Inheritance

function Car(carspec){
  this.name = carspec.name;
  this.model = carspec.model;
  this.description = carspec.description;
}

Car.prototype.drive = function(){
  console.log('Driving...');
} 

// let car = new Car({name: 'Ford', model: 'Galaxy', description: 'Family car'});

// console.log(car.drive());//>> Driving...

function Audi(carSpec){
  Car.call(this, carSpec);
  this.engine = carSpec.engine;
  this.audiDrive = function(){
    console.log('Audi Driving...');
  }
}

Audi.prototype = Object.create(Car.prototype);

Audi.prototype.constructor = Audi;

const myAudi = new Audi({
  name: 'My Audi',
  model: 'A6',
  description: 'Grat German car',
  engine: 'A313'
});

console.log(myAudi.description); // >> Great German car