"use strict";
console.log("callback.js");

const btn1El = document.getElementById("btn1");
const timeEl = document.getElementById("time");

btn1El.addEventListener("click", () => {
  console.log("paspaudei");
  // ivykdo nurodyta funcija po nurodyto laiko
  setTimeout(() => {
    console.log("paspaudei time out");
  }, 3000);
});

function sayHi() {
  console.log("Hello TimeOut");
}
// setTimeout(sayHi, 3000);

//set interval vykdo kazkoki koda kas kazkiek ms
const int1 = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  timeEl.textContent = now.toLocaleString("lt-LT", { timeStyle: "medium" });
}
// tick();

setTimeout(() => clearInterval(int1), 5000);
