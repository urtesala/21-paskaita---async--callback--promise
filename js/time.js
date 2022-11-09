"use strict";
console.log("time.js");

const timeEl = document.getElementById("time");

const int1 = setInterval(tick, 1000);

function tick() {
  const now = new Date();
  timeEl.textContent = now.toLocaleString("lt-LT", { timeStyle: "medium" });
}
