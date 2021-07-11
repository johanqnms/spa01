// Components
import Header from "../components/Header";

// Views
import Homepage from "../views/Homepage";
import Results from "../views/Results";

const router = async (route) => {

  console.log(route);
  // Components
  const header = null || document.getElementById("header");
  header.innerHTML = await Header();

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