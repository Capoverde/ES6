// let version


function showLength (arr){
  if (arr.length > 5){
    let greater = `${arr} is longer then 5`;
  }else{
    let smaller =`${arr} is smaller then 5`;
    console.log(greater);
    console.log(smaller);
  }
}
showLength([1,2,3]);

// var version

function showLength (arr){
  if (arr.length > 5){
    var greater = `${arr} is longer then 5`;
  }else{
    var smaller =`${arr} is smaller then 5`;
    console.log(greater);
    console.log(smaller);
  }
}
showLength([1,2,3]);