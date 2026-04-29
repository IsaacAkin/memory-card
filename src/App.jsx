import { useState } from "react";
import './styles/App.css'
import Header from './components/Header';
import Gameboard from './components/Gameboard';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [selectedPokemon, setSelectedPokemon] = useState([]);
  
  function handleBestScore() {
    if (selectedPokemon.length >= bestScore ) {
      setBestScore(bestScore + 1);
    }
  }

  function handleSelectedPokemon(id) {
      if (selectedPokemon.includes(id)) {  
        setCurrentScore(0);
        setSelectedPokemon([]);

      } else {
        setSelectedPokemon(previous => [...previous, id]);
        setCurrentScore(currentScore + 1);
        handleBestScore();
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
        <Gameboard handleScore={handleSelectedPokemon} />
      </div>
    </div>
  )
}

export default App
