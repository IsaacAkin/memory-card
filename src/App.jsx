import './styles/App.css'
import Header from './components/Header';
import CardsContainer from './components/CardsContainer';

function App() {
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
        <Header />
      </div>
      <div className="cards-container" style={{
        border: '2px solid red',
        padding: '10px',
        display: 'grid',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gap: '7px'
      }}>
        <CardsContainer />
      </div>
    </div>
  )
}

export default App
