const posts = [
  { title: "Post One", body: "This is post One body" },

  { title: "Post Two", body: "This is post Two body" },
];

//nuskaitoma
const postsListEl = document.getElementById("posts");

// gauti postus imituojant kad trunka 2sec juos gauti

function getPosts() {
  setTimeout(() => {
    // sugeneruoti ir patalptinti posts masyvo elementa
    posts.forEach((pObj) => {
      const liEl = document.createElement("li");
      liEl.textContent = `${pObj.title} - ${pObj.body}`;
      postsListEl.append(liEl);
    });
  }, 2000);
}
//=============================

//create post funckija kuri ideda nauja posta i post masyva

// function createPost(newPostObj) {
//   setTimeout(() => {
//     posts.push(newPostObj);
//     getPosts(); // 1 uzd
//   }, 2000);
// }

// createPost({ title: "Post three", body: "This is post 3 body" }, getPosts); //2 uzd

//====================

function createPost(newPostObj) {
  posts.push(newPostObj);
  getPosts();
  return new Promise((resolve, reject) => {
    let noError = true;
    if (noError) {
      resolve("OK");
    } else {
      reject("BAD BAD THING HAPPENED");
    }
  });
}
createPost({ title: "Post three", body: "This is post 3 body" });

// 1 iskviesti getPosts tik po to kai sukurem posta su createPost su pavadinimu
// 2 iskviesti getPosts tik po to kai sukurem posta su createPost su callback fn
