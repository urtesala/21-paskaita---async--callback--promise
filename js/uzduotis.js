"use strict";
console.log("uzduotis.js");
const usersListEl = document.getElementById("users");
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => response.json()) // .json() => JSON.parse()
  .then((duomenysJavascriptFormatu) => {
    // console.log('duomenysJavascriptFormatu ===', duomenysJavascriptFormatu);
    const first10posts = duomenysJavascriptFormatu.slice(0, 10);

    generateCards(first10posts, "postsCards");
  })
  .catch((err) => console.warn("klaida gaunant users", err));

function generateCards(arr, elId) {
  const dest = document.getElementById(elId);
  if (!dest) throw "blogas id";

  const htmlElsArr = arr.map((p) => {
    const articleEl = document.createElement("article");
    articleEl.className = "card";
    articleEl.innerHTML = `
      <h3>${p.title}</h3>
      <p>${p.body}</p>
      <p><i>${p.id}</i></p>
      `;
    return articleEl;
  });
  console.log("htmlElsArr ===", htmlElsArr);
  htmlElsArr.forEach((el) => dest.append(el));
}
