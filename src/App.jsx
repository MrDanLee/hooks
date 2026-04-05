import useFetchCharacters from './hooks/useFetchCharacters';
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/10/';
  const urlRick = 'https://rickandmortyapi.com/api/character/10';

  const pokemon = useFetchCharacters(urlPokemon)
  // const {data:  pokemon} = useFetchCharacters 
  // Si quiero retornar un objeto, hago un destructuring. 
  // En caso de retornar solo un elemento, puedo omitirlo. 

  const rick = useFetchCharacters(urlRick)

  return (
    <>
    <section>
    {
      pokemon 
      ? <>
        <div>{pokemon?.name}</div>
        <div><img src={pokemon?.sprites?.front_default} alt={pokemon?.name} /></div>
      </>
      : "No hay pokemon"
    }
    </section>
    <section>
    { 
      rick
      ? <>
        <div>{rick?.name}</div>
        <div><img src={rick?.image} alt={rick?.name} /></div>
      
      </>
      : "No hay personaje"
    }
    </section>
    </>
  );
}

export default App;
