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
// Tylko obiekty, nieiterowalne


let weakCars = new WeakSet();

weakCars.add({driver: 'Piotr'});

let passenger = {passenger: 'Inka'};

weakCars.add(passenger);
console.log(weakCars.has(passenger)); // >> true

weakCars.delete(passenger);
console.log(weakCars.has(passenger)); // >> false

// ------------------------- When should we use Weak Sets ---------------------------- //
// They are used when You don't want to mutate array
let carSlides = [
    {car: 'Audi', seen: false, image: 'url'},
    {car: 'Ford', seen: false, image: 'url'},
    {car: 'Mercedes', seen: false, image: 'url'},
    {car: 'VW', seen: false, image: 'url'}
];

// function clicked(carSlides){
//   carSlides.forEach(car =>{
//     //  mutates each object in the carSlides array
//     car.seen = true // seen jest teraz ustawione na true
//   })
// }
// Żeby zapobiec mutowaniu tablicy: 
let carsViewed = new WeakSet();

function clicked(carSlides){
  carSlides.forEach(car =>{
    carsViewed.add(car) //
  })
}

for(let car of carSlides){
  console.log(carsViewed.has(car)); // >> true, true, true, true
}

console.log(carSlides); //seen jest cały czas na false

// lets say this is sets true when user clicks on a link somewhere

// let linkClicked = true;
//  if(linkClicked){
//    clicked(carSlides);
//  }
// console.log(carSlides);









