import {useEffect, useState} from 'react';
import PokemonThumnail from './PokemonThumnail';

function Home() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()

    setLoadMore(data.next)
    
    function createPokemonObject (result) {
        result.forEach(async (pokemon) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
          const data = await res.json();

          setAllPokemons(currentList => [...currentList, data]);
        })
    }

    createPokemonObject(data.results)
    await console.log(allPokemons);
  }

  console.log(allPokemons);

  useEffect(() => {
    getAllPokemons()
  },[])

  return (
    <div className="app-container">
    <div className="pokemon-container">
    <input class="search__pokemon" placeholder="Write Type" type="text" onChange={e => {setSearchTerm(e.target.value)}} />
      <div className="all-container">
        {allPokemons.filter((pokemonStats) => {
          if (searchTerm == "") {
            return pokemonStats
          } else if (pokemonStats.types[0].type.name.toLowerCase().includes(searchTerm)) {
            return pokemonStats
          }
        }).map( (pokemonStats, index) => 
          <PokemonThumnail
            key={index}
            id={pokemonStats.id}
            image={pokemonStats.sprites.other.dream_world.front_default}
            name={pokemonStats.name}
            type={pokemonStats.types[0].type.name}
          />)}
        
      </div>
        <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
    </div>
  </div>
  );
}

export default Home;
