
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