import './App.css';
import useFetchCharacters from './hooks/useFetchCharacters';
import Character from './components/Character';


function App() {
  const urlPokemon = `https://pokeapi.co/api/v2/pokemon/2`;
  const urlRick = 'https://rickandmortyapi.com/api/character/10';

  const {data: pokemon, loading: loadingPokemon, error: errorPokemon} = useFetchCharacters(urlPokemon)
  const {data: rick, loading: loadingRick, error: errorRick} = useFetchCharacters(urlRick);
  // const {data:  pokemon} = useFetchCharacters 
  // Si quiero retornar un objeto, hago un destructuring. 
  // En caso de retornar solo un elemento, puedo omitirlo. 

  // const {data: rick, loading:loadingRick, error: errorRick} = useFetchCharacters(urlRick)



  return (
    <>
    <Character
      character={pokemon}
      loading={loadingPokemon}
      error={errorPokemon}
      name={pokemon?.name}
      img={pokemon?.sprites?.front_default}
    />
    <Character
      character={rick}
      loading={loadingRick}
      error={errorRick}
      name={rick?.name}
      img={rick?.image}
    />
    </>
  );
}

export default App;
