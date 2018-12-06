//  -------- functions -------- //

//Default Parameters

// ES5 version:

function box(height, color, url){
   var  height = height || 50,
        color = color || "green",
        url = url || "google.com";
        console.log('height', height,
                    'color', color,
                     'url', url);
}
console.log(box(0));
// output >> height 50 color green url google.com
// to fix the problem: 
function box(height, color, url){
  var  height = (height !== undefined) ? height : 50
       color = color || "green",
       url = url || "google.com";
       console.log('height', height,
                   'color', color,
                    'url', url);
}
console.log(box(0));
// output height >> 0

// ES6 version: 
function box(height = 50, color = 'green', url='google.com'){
  console.log('height', height,
                   'color', color,
                    'url', url);
}
console.log(box(0));
// output >> height 0 .....
