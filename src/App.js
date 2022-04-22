import AllPokemons from "./components/AllPokemons/AllPokemons";
import GetPokemons from "./components/GetPokemons";

const { default: Header } = require("./components/Header/Header");

function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';

  const getPokemons = () => {
    return fetch(URL).then((response) => response.json()).
    then();
};

  return (
    <div className="App">
      <Header />

      <AllPokemons 
        pokemons={GetPokemons()}
      />
    </div>
  );
}

export default App;
