import { useEffect, useState } from "react";

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokedex/1/')
            .then(response => response.json())
            .then(response => setPokemon(response.pokemon_entries))
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
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

export default Pokemon;