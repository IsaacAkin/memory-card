import { useState, useEffect } from "react";

function Card({ children, id, handleScore }) {
    return(
        <div className="card" onClick={() => handleScore(id)}>
            {children}
        </div>
    )
}

function Pokemon({ pokemon }) {
    const [spriteSrc, setSpriteSrc] = useState(null);
    
    useEffect(() => {
        let ignore = false;

        async function fetchPokemonSprite(pokemon) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();

                if (!ignore) { 
                    setSpriteSrc(data.sprites.front_default);
                    // setSpriteSrc(data.sprites.other["official-artwork"].front_default);
                }
            } catch (error) {
                console.error("Pokemon name not valid", error);
            }
        }

        fetchPokemonSprite(pokemon);

        return () => {
            ignore = true;
        }
    },[pokemon])

    return(
        <>
        <img src={spriteSrc} alt={pokemon} />
        <p className="name">{pokemon}</p>
        </>
    )
}

export default function Gameboard({ handleScore, array }) {
    return(
        <>
        {
            array.map(pokemon => {
                return(
                    <Card key={pokemon.id} id={pokemon.id} handleScore={handleScore}>
                        <Pokemon pokemon={pokemon.name} />
                    </Card>
                )
            })
        }
        </>
    )
}