"use strict";
console.log("uzduotis2.js");

//^ parsiusti postus is https://dummyjson.com/posts

const url = "https://dummyjson.com/posts";

//^ sugeneruoti juos koteliu pavidale htmle.

// fetch(url)
//   .then((response) => response.json())
//   .then((dataInJs) => {
//     const data = dataInJs.posts;
//     // console.log("data ===", data);
//     generateCards(data, "postsCards");
//   })
//   .catch((err) => console.warn("klaida gaunant data", err));

// function generateCards(arr, elId) {
//   const dest = document.getElementById(elId);
//   if (!dest) throw "blogas id";

//   const htmlElsArr = arr.map((p) => {
//     const articleEl = document.createElement("article");
//     articleEl.className = "card";
//     articleEl.innerHTML = `
//       <h3>${p.title}</h3>
//       <p>${p.body}</p>
//       <p><i>${p.id}</i></p>
//       <p><i>${p.tags}</i></p>
//       <p>Reactions: ${p.reactions}</p>

//       `;
//     return articleEl;
//   });
//   //   console.log("htmlElsArr ===", htmlElsArr);
//   htmlElsArr.forEach((el) => dest.append(el));
// }

//^ parasyti funkcija kuria iskvietus su fetch parsiunciami ir iskonsolinami produktai is https://dummyjson.com/products

const url2 = "https://dummyjson.com/products";

function fetchAndConsole(x) {
  fetch(x)
    .then((response) => response.json())
    .then((informationInJs) => {
      const produktai = informationInJs.products;
      htmlListOfProducts(produktai, "postsCards");
      console.log("produktai ===", produktai);
    });
}
fetchAndConsole(url2);

//^ parasyti funkcija kuri gauna masyva prekiu is pries tai esancios uzd. ir juos avaizduoja html sarase.

function htmlListOfProducts(arr, elId) {
  const dest = document.getElementById(elId);
  if (!dest) throw "HUSTON WE HAVE A PROBLEM";
  const htmlElsArr = arr.map((p) => {
    const articleEl = document.createElement("article");
    articleEl.className = "card";
    articleEl.innerHTML = `
            <h3>${p.brand}${p.title}</h3>
            <p>${p.description}</p>
            <p><i>Price:${p.price}</i></p>
            <p><i>Rating:${p.rating}</i></p>
            <p><i>There is ${p.stock} left</i></p>
            <p>Category: ${p.category}</p>
            <img src="${p.images[0]}" alt="foto">
            <img src="${p.images[1]}" alt="foto">
            <img src="${p.images[2]}" alt="foto">
            <img src="${p.images[3]}" alt="foto">
            `;
    return articleEl;
  });
  //   console.log("htmlElsArr ===", htmlElsArr);
  htmlElsArr.forEach((el) => dest.append(el));
}

//^ panaudoti pask dvieju uzd funkcijas ir atvaizduoti prekes.
