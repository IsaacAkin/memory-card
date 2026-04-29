import { useState, useEffect } from "react";
import { pokemon } from "../data.js";

function Card({ children }) {
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
        >
            {children}
        </div>
    )
}

function Pokemon({ pokemon }) {
    const [spriteSrc, setSpriteSrc] = useState(null);
    
    useEffect(() => {
        async function fetchPokemonSprite(pokemon) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                const data = await response.json();

                setSpriteSrc(data.sprites.front_default);
            } catch (error) {
                console.error("Pokemon name not valid", error);
            }
        }

        fetchPokemonSprite(pokemon);
    },[pokemon])

    return(
        <>
        <img src={spriteSrc} alt={pokemon} style={{ border: '1px solid green' }} />
        <p className="name" style={{ border: '1px solid green' }}>{pokemon}</p>
        </>
    )
}

export default function Gameboard() {
    return(
        <>
        {
            pokemon.map(mons => {
                return(
                    <Card key={mons.id}>
                        <Pokemon pokemon={mons.name} />
                    </Card>
                )
            })
        }
        </>
    )
}