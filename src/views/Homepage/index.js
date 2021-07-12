import "./homepage.css";
const Homepage = () => {
  const view = `
          <div class="container--homepage">
            <div class="search">
              <h1 class="search--title">Buscador</h1>
              <input class="search--input" type="text">
              <button class="search--button">Consultar</button>
            </div>
        </div>
      `;
  return view;
};

export default Homepage;
