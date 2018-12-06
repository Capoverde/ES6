//  ------------- OBJECTS ----------------- //

// -- Object initialization -- //



//  Objects literals
// ES5

// function createUser(firstname, lastname){
//   let fullname = `${firstname} ${lastname}`;
//   return {
//     firstname: firstname,
//     lastname: lastname,
//     fullname: fullname
//   }
// }
// let user = createUser('Jan', 'Kowalski')
// console.log(user.firstname, user.lastname, user.fullname);
// output >> Jan | Kowalski | Jan Kowalski

// ES6

function createUser(firstname, lastname){
  let fullname = `${firstname} ${lastname}`;
  return {
    firstname,
    lastname,
    fullname
  }
}
let user = createUser('Jan', 'Kowalski')
console.log(user.firstname, user.lastname, user.fullname);
// output >> Jan | Kowalski | Jan Kowalski


// ------- Object destructuring ------- //

// ES5

// let obj = {
//   x: 7,
//   y: 5,
//   z: 8
// }

// let x = obj.x,
//     y = obj.y,
//     z = obj.z

// console.log(x, y, z); // output >> 7,5,8

// ES6
let obj = {
  x: 7,
  y: 5,
  z: 8
}

let { x, y, z } = obj;

console.log(x, y, z); //output >> 7,5,8


// ------- Adding functions to an object ------- //

// ES5

// let myObject = {
//   prop1: "Hello",
//   prop2: "World",
//   fullname: function(firstname, lastname){
//     let fullname = `${firstname} ${lastname}`;
//     return fullname;
//   }
// }
// console.log(myObject.fullname('Jan', 'Kowalski')); // output >> Jan Kowalski

// ES6

let myObject = {
  prop1: "Hello",
  prop2: "World",
  fullname (firstname, lastname){
    let fullname = `${firstname} ${lastname}`;
    return fullname;
  }
}
console.log(myObject.fullname('Jan', 'Kowalski')); 

// Po usunięciu słówka function i dwukropka  otrzymujemy ten sam output

// ------- Template Strings ------- //

let serviceId = 123;

let url = `/service/${serviceId}`;

console.log(url);