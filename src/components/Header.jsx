function Title() {
    return <h1>Pokemon Memory Game</h1>
}

function Description() {
    return <p>Get points by clicking on an image but don't click on any more than once!</p>
}

function CurrentScore({ currentScore }) {
    return <p className="current-score">Score: {currentScore}</p>
}

function BestScore({ bestScore }) {
    return <p className="best-score">Best Score: {bestScore}</p>
}

export default function Header({ currentScore, bestScore }) {
    return(
        <>
        <div className="title-description">
            <Title />
            <Description />
        </div>
        <div className="scores-container">
            <CurrentScore currentScore={currentScore} />
            <BestScore bestScore={bestScore} />
        </div>
        </>
    )
}