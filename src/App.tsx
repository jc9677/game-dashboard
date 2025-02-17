import React from 'react';
import './App.css';
import GameCard from './components/GameCard';

function App() {
  const games = [
    {
      title: "W🌎RLDle",
      url: "https://jc9677.github.io/worldle/",
      description: "A geography-based word guessing game"
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game Collection</h1>
        <p>Browse and play our collection of web games</p>
      </header>
      <main className="games-container">
        {games.map((game, index) => (
          <GameCard
            key={index}
            title={game.title}
            url={game.url}
            description={game.description}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
