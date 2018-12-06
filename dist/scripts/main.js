//  -------- functions -------- //

//Default Parameters

// ES5 version:

// function box(height, color, url){
//    var  height = height || 50,
//         color = color || "green",
//         url = url || "google.com";
//         console.log('height', height,
//                     'color', color,
//                      'url', url);
// }
// console.log(box(0));
// output >> height 50 color green url google.com
// to fix the problem: 
// function box(height, color, url){
//   var  height = (height !== undefined) ? height : 50
//        color = color || "green",
//        url = url || "google.com";
//        console.log('height', height,
//                    'color', color,
//                     'url', url);
// }
// console.log(box(0));
// output height >> 0

// ES6 version: 
// function box(height = 50, color = 'green', url='google.com'){
//   console.log('height', height,
//                    'color', color,
//                     'url', url);
// }
// console.log(box(0));
// output >> height 0 .....


// ------ Expressions as Default parameters --- //

// function setHeight(value){
//   return value * 10;
// }

// function box(height = setHeight(10),
//              color = 'green',
//              url='google.com'){
//  console.log('height:', height,
//              'color:', color,
//              'url:', url);
// }
// console.log(box());
// putput >> height: 100

// second example

// function multiply(num = 2, numTwo = num){
//   return num * numTwo;
// }
// console.log(multiply(3)); // output >> 9
// console.log(multiply()); // output >> 4
// console.log(multiply(3, 9)); // output >> 27

// ---- REST OPERATOR ----- //

// ES5 version

// function sum(){
// Trzeba było zamieić arguments na tablicę zeby mozna było iterować
// var numbers = Array.prototype.slice.call(arguments);
// var result =0;

//   numbers.forEach(function(number){
//     result += number;
//   });
//   return result;
// }
// console.log(sum(3,5,7,9));

// ES6
// function sum(...numbers){ //wystarczy dodac 3 kropki, które oznaczaja: 
// Zamien argument, lub argumenty na tablicę i mozna iterowac

//   var result =0;
//   numbers.forEach(function(number){
//     result += number;
//   });
//   return result;
// }
// console.log(sum(3,5,7,9));

// function sum(...numbers, arg1, arg2, arg3) 
// w tym wypadku nie mozna uzyc spreda, wyrzuci syntaxError

// function sum(arg1, arg2, arg3, ...numbers) tak jest ok

// ---- SPREAD OPERATOR ---- //

// example 1
// let numbers =[1,2,3];

// function sum(num1, num2, num3){
//   return num1 + num2 + num3;
// }

// console.log(sum(...numbers)); // output >> 6
// console.log(sum.apply(null, numbers)); // output >> 6

// example 2

// let a = [1,2,3];
// let b = [1, ...a, 5];
// console.log(b); //output >> [1,1,2,3,5]
"use strict";
