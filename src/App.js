import router from "./router";
import css from "./assets/css/global.css";

window.addEventListener("load", router(window.location.hash));
window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
