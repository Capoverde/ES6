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
// Fullfiled
// Rejected

// Promise to objekt z 3 funkcjami
let Promise ={
  then() {}, //uruchamiana kiedy jest sukces
  catch() {}, //uruchamiana kiedy jest error
  all() {} //uruchamianie wileu promisów jako tablicy
  // ....
}