// ---------------------------------- Sets ---------------------------------- //

// What are sets?

// let cars = ['Audi', 'Ford', 'Audi', 'Mercedes', 'VW'];

// console.log(cars.length); // >> 5


let cars = new Set();

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

let [ a, b, c ] = cars;
console.log(cars); // >> Set { 'Audi', 'Ford', 'Mercedes }
console.log(a, b, c); // >> Audi Ford Mercedes

// ---------------------------- Weak Sets -------------------------------- //

let weakCars = new WeakSet();

weakCars.add({driver: 'Piotr'});

let passenger = {passenger: 'Inka'};

weakCars.add(passenger);
console.log(weakCars.has(passenger)); // >> true

weakCars.delete(passenger);
console.log(weakCars.has(passenger)); // >> false











