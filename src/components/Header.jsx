function Title() {
    return <h1 style={{ border: '1px solid green', padding: '10px' }}>Pokemon Memory Game</h1>
}

function Description() {
    return <p style={{ border: '1px solid green', padding: '10px' }}>Get points by clicking on an image but don't click on any more than once!</p>
}

function CurrentScore({ currentScore }) {
    return <p className="current-score" style={{ border: '1px solid green', padding: '10px' }}>Score: {currentScore}</p>
}

function BestScore({ bestScore }) {
    return <p className="best-score" style={{ border: '1px solid green', padding: '10px' }}>Best Score: {bestScore}</p>
}

export default function Header({ currentScore, bestScore }) {
    return(
        <>
        <div className="title-description" style={{ border: '1px solid white', padding: '10px' }}>
            <Title />
            <Description />
        </div>
        <div className="scores-container" style={{ border: '1px solid white', padding: '10px' }}>
            <CurrentScore currentScore={currentScore} />
            <BestScore bestScore={bestScore} />
        </div>
        </>
    )
}