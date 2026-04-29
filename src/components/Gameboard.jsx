import { useState, useEffect } from "react";
import { pokemon } from "../data.js";

function Card({ children, id, handleScore }) {
    return(
        <div 
        className="card"
        style={{
        border: '1px solid white',
        alignSelf: 'center',
        justifySelf: 'center',
        padding: '10px',
        cursor: 'pointer'
        }}
        onClick={() => handleScore(id)}
        >
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
        <img src={spriteSrc} alt={pokemon} style={{ border: '1px solid green' }} />
        <p className="name" style={{ border: '1px solid green' }}>{pokemon}</p>
        </>
    )
}

export default function Gameboard({ handleScore, score }) {
    const [array, setArray] = useState(pokemon);

    useEffect(() => {
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]]
            }
            
            setArray(array);
        }

        shuffleArray(pokemon);
    }, [score])

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