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

// 