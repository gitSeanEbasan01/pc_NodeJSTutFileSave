
console.log(); // global

// setTimeout(); ---
// call a function after a delay
// standard JavaScript. You can use this on a client, on a browser, or in Node.
// clearTimeout(); ---

// setInterval(); ---
// repeatedly call a function after an increment of delay.
// clearInterval(); ---
// to stop that function from calling repeatedly.

// These are global objects. There are other that we're gonna learn later on.


// In browsers, we have this... windows object that represents our global scope.
// So all the variables and functions that are defined globally, we can access them via the window object.
// window.setTimeout ---
// window.console.log --- // or simply..
// console.log ---

var message = ''; // you can access them with...
// window.message ---

// In node, we don't have this widow object. Instead we have global.
console.log(global.message);