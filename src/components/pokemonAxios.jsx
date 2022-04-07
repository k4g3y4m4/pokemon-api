import {useState,useEffect} from 'react';
import axios from 'axios';


const PokemonAxios = () => {
    const [statusFetch, setStatusFetch] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    const HandlestatusFetch = () => {
        setStatusFetch(true);
    }

    useEffect(() => {
        if(statusFetch){
            axios.get('https://pokeapi.co/api/v2/pokedex/1/')
                .then(response => {setPokemon(response.data.pokemon_entries)})
            };
    }, [statusFetch]);

    return (
        <div>
            <h1>Pokemon</h1>
            <button onClick={HandlestatusFetch} className="btn btn-success">Fetch Pokemon</button>

            <ul>
                {pokemon.map(pokemon => (
                    <li>
                        {pokemon.pokemon_species.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PokemonAxios;