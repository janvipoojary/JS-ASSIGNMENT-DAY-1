//var is there since  the beginning of JS.
//when we use var we can reassign it.

var name = 'John';
console.log(name);
name = 'pie';
console.log(name);
// also sometimes, we can initialize variables.
var greeting;
console.log(greeting);
// output may show undefined,  but we can use it in conditionals.

// let is identical to var.
// let is block scoped  and var has global scope.
let name;
name = 'John Doe';
console.log(name);
name = 'stevem';
console.log(name);

//const is different, we cannot reassign value.
// we can use while working with objects.
//let and var were introduced in the updated version of ES6.