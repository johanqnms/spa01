// Components
import Header from "../components/Header";
import Nav from "../components/Nav";

// Views
import Homepage from "../views/Homepage";
import Results from "../views/Results";

const router = async (route) => {

  console.log(route);
  // Components
  const header = null || document.getElementById("header");
  header.innerHTML = await Header();
  const nav = null || document.getElementById("nav-container");
  nav.innerHTML = await Nav();
  // Views
  const container = null || document.getElementById("container");
  if(route === "") {
      container.innerHTML = await Homepage();
  }
  if(route === "#home") {
    container.innerHTML = await Homepage();
    }
  if(route === "#results") {
    container.innerHTML = await Results();
  }
};
export default router;