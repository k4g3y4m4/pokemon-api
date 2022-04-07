import './App.css';
import Pokemon from './components/pokemon';
import PokemonAxios from './components/pokemonAxios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <PokemonAxios />
    </div>
  );
}

export default App;
