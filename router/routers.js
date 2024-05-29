// import Route from "route-parser";
// const appConstants = {
//   routes: {
//     index: "/activity",
//     map: "/map",
//     timer: "/timer",
//   },
// };

// export const routes = {
//   Resume: new Route(appConstants.routes.index),
//   Map: new Route(appConstants.routes.map),
//   Timer: new Route(appConstants.routes.timer),
// };

// export const render = (path) => {
//   let result = "<h1>404</h1>";
//   if (routes.Resume.match(path)) {
//     // mainPage.render(controlBar, listMagazine);
//     result = mainPage.test(controlBar, listMagazine);
//   } else if (routes.Map.match(path)) {
//     // mapPage.render();
//     result = mapPage.test();
//   } else if (routes.Timer.match(path)) {
//     // timerPage.render();
//     result = timerPage.render();
//   }

//   document.querySelector("#navigation").innerHTML += result;
// };

// export const goTo = (path) => {
//   window.history.pushState({ path }, path, path);
//   render(path);
// };

// const initRouter = () => {
//   window.addEventListener("popstate", (e) => {
//     render(new URL(window.location.href).pathname);
//   });
//   document.querySelectorAll('[href^="/"]').forEach((el) => {
//     el.addEventListener("click", (env) => {
//       env.preventDefault();
//       const { pathname: path } = new URL(env.target.href);
//       goTo(path);
//     });
//   });
//   render(new URL(window.location.href).pathname);
// };

// export default initRouter;

// import Route from "route-parser";
// const appConstants = {
//   routes: {
//     index: "/",
//     map: "/map",
//     timer: "/time",
//   },
// };

// export const routes = {
//   Resume: new Route(appConstants.routes.index),
//   Map: new Route(appConstants.routes.map),
//   Timer: new Route(appConstants.routes.timer),
// };

// export const render = (path) => {
//   let result = "<h1>404</h1>";
//   if (routes.Resume.match(path)) {
//     result = "111";
//     // Создаем экземпляр компонента Main
//     // const mainComponent = new Main();
//     // // Вызываем его метод render
//     // result = mainComponent.test(controlBar, listMagazine);
//   } else if (routes.Map.match(path)) {
//     result = "222";
//   } else if (routes.Timer.match(path)) {
//     result = "333";
//   }

//   document.querySelector("#navigation").innerHTML += result;
// };

// export const goTo = (path) => {
//   window.history.pushState({ path }, path, path);
//   render(path);
// };

// const initRouter = () => {
//   window.addEventListener("popstate", (e) => {
//     render(new URL(window.location.href).pathname);
//   });
//   document.querySelectorAll('[href^="/"]').forEach((el) => {
//     el.addEventListener("click", (env) => {
//       env.preventDefault();
//       const { pathname: path } = new URL(env.target.href);
//       goTo(path);
//     });
//   });
//   render(new URL(window.location.href).pathname);
// };

// export default initRouter;
