"use strict";
console.log("timeOutOrder.js");

console.log("one");

function sayHi() {
  console.log("two");
}

//asinchronine operacija visada vykdoma po to kai visas kodas ivykdomas
setTimeout(sayHi, 0);

console.log("three");
