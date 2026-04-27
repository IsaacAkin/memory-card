function Card({ children }) {
    return(
        <div className="card" style={{
                border: '1px solid white',
                alignSelf: 'center',
                justifySelf: 'center',
                padding: '10px'
            }}>
            {children}
        </div>
    )
}

// async function Image({ pokemon }) {
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//     if (!response.ok) {
//         throw new Error("Pokemon name not valid");
//     }

//     const src = response.sprites.front_default;

//     return <img src={src} alt="" />
// }

function Image({ src }) {
    return <img src={src} alt="" style={{ border: '1px solid green' }}/>
}

function Name({ name }) {
    return <p className="name" style={{ border: '1px solid green' }}>{name}</p>
}

export default function CardsContainer() {
    return(
        <>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"} />
            <Name name={'Pikachu'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png"} />
            <Name name={'Decidueye'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png"} />
            <Name name={'Sprigatitio'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png"} />
            <Name name={'Zorua'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png"} />
            <Name name={'Wooper'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png"} />
            <Name name={'Slugma'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png"} />
            <Name name={'Bronzor'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png"} />
            <Name name={'Krookodile'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"} />
            <Name name={'Growlithe'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png"} />
            <Name name={'Tsareena'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png"} />
            <Name name={'Gossifleur'} />
        </Card>
        <Card>
            <Image src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png"} />
            <Name name={'Sneasler'} />
        </Card>
        </>
    )
}