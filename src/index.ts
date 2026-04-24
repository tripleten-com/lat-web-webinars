import { getUserInfo, getInitialPosts } from "./fakeApi.js";

// OPCIÓN 1: Usando Promesas

// getUserInfo()
//   .then((user) => console.log(user))
//   .catch((error) => console.log(error));

// OPCIÓN 2: Usando Async/Await
// const loadUser = async () => {
//   try {
//     const user = await getUserInfo();
//     console.log(user);
//   } catch (error) {
//     console.log(error);
//   }
// };

// loadUser();

// DESAFÍO: Cargar ambos recursos (usuario y posts)

// const initApp = async () => {
//   try {
//     const user = await getUserInfo();
//     console.log(user);

//     const posts = await getInitialPosts();
//     console.log(posts);
//   } catch (error) {
//     console.log(error);
//   }
// };

// initApp();

// OPCIÓN 3: Cargar ambos recursos usando Promise.all
const initApp = async () => {
  try {
    const [user, posts] = await Promise.all([getUserInfo(), getInitialPosts()]);
    console.log(user);
    console.log(posts);
  } catch (error) {
    console.log(error);
  }
};

initApp();
