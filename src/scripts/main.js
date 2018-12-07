
// ----------------- Arrays ---------------------- //

// ----- Array Destructuring ----- //

let fruits = ['banana', 'apples', 'grapes'];

// let a = fruits[0],
//     b = fruits[1],
//     c = fruits[2];

    // console.log(a,b,c); // outut >> banana, appale, grapes

// Simplier method - ARRAY NOTATION :

let [ a,b,c ] = fruits;
console.log(a,b,c); // outut >> banana, appale, grapes

// let [ a, ,c ] = fruits;
// console.log(a,c); // output >> banana, grapes


// -------- for of loop --------- //

let fruits1 = ['banana', 'apples', 'grapes', 'plums'];

// #1 for in <- older way of looping

for (let i in fruits1){
  console.log(fruits1[i]); // output >> banana, apples, grapes, plums
}

// #2 for of <- ES6 new loop

for (let fruit of fruits1){
  console.log(fruit); //output >> banana, apples, grapes, plums
}

// --------------- Array.find --------------- //

let services = [
  {name: 'nails', activated: false},
  {name: 'haircut', activated: true},
  {name: 'feet therapy', activated: true}
];

let activate = services.find(service => service.activated);
console.log(activate); //output >> {name: 'haircut', activated: true}
// Zwraca pierwszy, któr jest na true

// -------------------- Maps -------------------- //


let carOne = {
  make: 'Audi'
}

let carTwo = {
  make: 'Ford'
}

let carAge = new Map();

carAge.set(carOne, 3);
carAge.set(carTwo, 5);

console.log(carAge);
// output >> Aap { { make: 'Audi } => 3, { make: 'Ford } => 5}

// -------------------- Maps with for of  -------------------- //

let cars = new Map();

cars.set('carOne', 'Audi');
cars.set('carTwo', 'Ford');
cars.set('carThree', 'GM');
cars.set('carFour', 'BMW');

for(let [key, value] of cars){
  console.log(`${key} = ${value}`);
}
// output >> carOne = Audi, carTwo = Ford, carThree = GM, carFour = BMW

// -------------------- Plain objects and the for of loop   -------------------- //

let person = {
    name: 'Jan',
    address: '123 str, London',
    ocuppation: 'JS Developer'
}
//  for(let prop of prson){
//    console.log(prop)
//  }
//  output >> TypeEroor: person[Symbol.iterator] is not a function

let numbers = [ 1, 2, 3];
console.log(typeof(numbers[Symbol.iterator]));
//  output >> function
console.log(typeof(person[Symbol.iterator]));
// output >> undefined

// -------------------- Weak Maps   -------------------- //

// Special types of maps, You can onlu use objects as a keys, 
// You can't use primitive data types (strings, booleans, numbers)
// You can't use for of to iterate over the weak map

let personOne = {}
let personTwo = {}

let people = new WeakMap();

people.set(personOne, 'Jan');
people.set(personTwo, 'Piotr');

console.log(people.get(personOne)); // output >> Jan
console.log(people.get(personTwo)); // output >> Piotr



