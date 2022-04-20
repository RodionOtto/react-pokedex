import AllPokemons from "./components/AllPokemons/AllPokemons";

const { default: Header } = require("./components/Header/Header");

function App() {
  return (
    <div className="App">
      <Header />

      <AllPokemons />
    </div>
  );
}

export default App;
