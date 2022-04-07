import { useEffect, useState } from "react";

const Pokemon = (props) => {
    const [statusFetch, setStatusFetch] = useState(false);
    const [pokemon, setPokemon] = useState([]);

    
    //on click on button and fetch data from API
    const HandlestatusFetch = () => {
        setStatusFetch(true);
    }


    useEffect(() => {
        if(statusFetch){
            fetch('https://pokeapi.co/api/v2/pokedex/1/')
                .then(response => response.json())
                .then(response => setPokemon(response.pokemon_entries))
                .catch(error => console.log(error))
        };

      
    }, [statusFetch]);


    //generate a button to get all pokemon
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

export default Pokemon;