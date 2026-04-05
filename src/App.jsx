import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/10/';
  const urlRick = 'https://rickandmortyapi.com/api/character/10';

  const [pokemon, setPokemon] = useState(null)
  const [rick, setRick] = useState(null)

  useEffect(() => {
    async function fetchPokemon () {
      try {
        const response = await fetch(urlPokemon)
        const data = await response.json()
        setPokemon(data)
        console.log(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchPokemon()
  }, [])
  
  useEffect(() => {
    async function fetchRick () {
      try {
        const response = await fetch(urlRick)
        const data = await response.json()
        console.log(data)
        setRick(data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchRick()
  }, [])

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
