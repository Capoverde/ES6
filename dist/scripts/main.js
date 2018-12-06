"use strict";

// ------- let keyword -------- //

// let version


function showLength(arr) {
  if (arr.length > 5) {
    var _greater = arr + " is longer then 5";
  } else {
    var smaller = arr + " is smaller then 5";
    console.log(greater);
    console.log(smaller);
  }
}
showLength([1, 2, 3]);

// var version

function showLength(arr) {
  if (arr.length > 5) {
    var greater = arr + " is longer then 5";
  } else {
    var smaller = arr + " is smaller then 5";
    console.log(greater);
    console.log(smaller);
  }
}
showLength([1, 2, 3]);

// ------ let in for loops ------ //

// var version

var func = [];

for (i = 0; i < 5; i++) {
  func.push(function () {
    console.log(i);
  });
}

func[0]();
func[1]();
func[4]();
// output >> 5,5,5

// let version
var func = [];

var _loop = function _loop(_i) {
  func.push(function () {
    console.log(_i);
  });
};

for (var _i = 0; _i < 5; _i++) {
  _loop(_i);
}

func[0]();
func[1]();
func[4]();
// output >> 0,1,4
