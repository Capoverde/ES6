// ------ Callback Problem ------ //

// let url = 'http://data-api/data';
// let data = getdata(url, function(response){

// });
// console.log(data, 'data');
// console.log('I am running after Ajax call');

// // when executed - our output

// data: undefined

// I am running after Ajax call

function waitingFor(name, done){
  console.log(`waiting for ${name}`);

  setTimeout(function(){
    if (name === 'Mike'){
      done(`Mike is always late`)
    }else{
      doen(null, name)
    }
  }, 3000);
}

// waitingFor('Piotr', function(error, Piotr)){
//   if(error){
//     console.log(error);
//   }else{
//     waitingFor('Michelle', function(error, Michelle)){
//       if(error){
//         console.log(error);
//      }else{
//       waitingFor('Thomas', function(error, Thomasichelle)){
//         if(error){
//           console.log(error);
//      }else{
//       waitingFor('John', function(error, John)){
//         if(error){
//           console.log(error);
//      }else{
//        console.log(`Great we can start`);
//      }
//     })
//   }
//  })
// }


// ------------------------------ Promise Concept ------------------------------ //

// Promises can be in one of three states



// Pending - transitioning form one state to another
// Fullfiled -
// Rejected

// Promise to objekt z 3 funkcjami
// let Promise ={
//   then() {}, //uruchamiana kiedy jest sukces
//   catch() {}, //uruchamiana kiedy jest error
//   all() {} //uruchamianie wileu promisów jako tablicy
//   // ....
// }

// ------------------------------ Promises in action ------------------------------ //

// function waitingFor(name){
//   console.log(`waiting for ${name}`);

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(name === 'Mike'){
//         reject(Error(`Mike is always late!!!`));
//       }else{
//         resolve(name);
//       }
//     }, 2000);
//   })
// }
// waitingFor('Piotr').then((name)=>{
//   console.log(`Grate we got ${name}`);
// });


// ------------------------------ Promises in action 2 ------------------------------ //

// function waitingFor(name){
//   console.log(`waiting for ${name}`);

//   return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//       if(name === 'Mike'){
//         reject(Error(`Mike is always late!!!`));
//       }else{
//         resolve(name);
//       }
//     }, 2000);
//   })
// }

// function waitForFriend(name){
//   return function(){
//     return waitingFor(name)
//   }
// }

// function leave(){
//   console.log('Grate! We have everyone!');
// }

// let gotImpatient = function(error){
//   console.log(error.message);
//   return Promise.resolve('We\'r leaving')
// }

// waitingFor('Piotr').then(waitForFriend('Thomas'))
      //  .then(waitForFriend('Nichelle'))
      //  .then(waitForFriend('Adam'))
      //  .then(waitForFriend('John'))
      //  .catch(gotImpatient)
      //  .then(leave);

// ------------------------------ Run multiple Promises at once ------------------------------ //

function waitingFor(name){
  console.log(`waiting for ${name}`);

  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(name === 'Mike'){
        reject(Error(`Mike is always late!!!`));
      }else{
        resolve(name);
      }
    }, 2000);
  })
}

function waitForall(){
  return Promise.all([
    waitingFor('Piotr'),
    waitingFor('Adam'),
    waitingFor('John')
  ]);
}

waitForall().then((friends)=>{
   console.log(`Great! 👏 ${friends[0]} is 🚶`);
   console.log(`Great! 👏 ${friends[1]} is 🚶`);
   console.log(`Great! 👏 ${friends[2]} is 🚶`);
});

