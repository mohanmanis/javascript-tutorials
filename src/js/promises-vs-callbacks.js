const button = document.querySelector("button");
const div = document.querySelector("div");

const setText = (text) => {
  div.textContent = text
}


// const checkAuth = cb => {
//   setText('Checking Auth...')
//   setTimeout(() => {
//     cb(true);
//   }, 2000);
// };

// const getMovieName = cb => {
//   setText('Fetching Movie...')
//   setTimeout(() => {
//     cb({ name: "Harry Potter" });
//   }, 2000);
// };
// button.addEventListener("click", () => {
//   checkAuth(auth => {
//     if (auth) {
//        getMovieName(movie => {
//         setText(movie.name)
//       });
//     }
//   });
// });

// Promise Approach
const checkAuth = () => {
  return new Promise((resolve, reject) => {
    setText('Checking Auth...')
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};

const getMovieName = () => {
  return new Promise((resolve, reject) => {
    setText('Fetching User...');
    setTimeout(() => {
      resolve({ name: "Harry Potter" });
    }, 2000);
  });
};

// button.addEventListener("click", () => {
//   checkAuth()
//      .then(
//         isAuth => {
//           if (isAuth) {
//             return getMovieName()
//           }
//         }
//       )
//       .then(
//         movie => {
//           setText(movie.name)
//         }
//       )
// });


//Async await

button.addEventListener("click", async() => {
  const isAuth = await checkAuth()
  let movie = null;
  if (isAuth) {
    movie = await getMovieName()
  }
  setText(movie.name)
});
