"use strict";
console.log("callback.js");

function getPost1() {
  setTimeout(() => {
    console.log("Post 1");
  }, 3000);
}
function getPost2() {
  setTimeout(() => {
    console.log("Post 2");
  }, 2000);
}
function getPost3() {
  setTimeout(() => {
    console.log("Post 3");
  }, 1800);
}
getPost1();
getPost2();
getPost3();
