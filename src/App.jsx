import { useState } from "react";
import './styles/App.css'
import Header from './components/Header';
import Gameboard from './components/Gameboard';
import { pokemon } from "./data.js";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [board, setBoard] = useState(pokemon);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  
  function handleBestScore() {
    if (selectedPokemon.length >= bestScore ) {
      setBestScore(bestScore + 1);
    }
  }

  function updateGameboard() {
    for (let i = pokemon.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pokemon[i], pokemon[j]] = [pokemon[j], pokemon[i]]
    }
    
    setBoard(pokemon);
  }

  function handleSelectedPokemon(id) {
      if (selectedPokemon.includes(id)) {  
        setCurrentScore(0);
        setSelectedPokemon([]);
        updateGameboard();

      } else {
        setSelectedPokemon(previous => [...previous, id]);
        setCurrentScore(currentScore + 1);
        handleBestScore();
        updateGameboard();
      }
  }

  return(
    <div className="app" style={{ border: '2px solid blue', padding: '10px'}}>
      <div className="header" style={{ 
        border: '2px solid red',
        marginBottom: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
      }}>
        <Header
          currentScore={currentScore}
          bestScore={bestScore}
        />
      </div>
      <div className="cards-container" style={{
        border: '2px solid red',
        padding: '10px',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '7px'
      }}>
        <Gameboard handleScore={handleSelectedPokemon} array={board} />
      </div>
    </div>
  )
}

export default App
