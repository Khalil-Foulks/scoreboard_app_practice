import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import './App.css';

function App() {
  const defaultPlayers = [
    {
      name: "Guil",
      score: 0,
      id: 1
    },
    {
      name: "Treasure",
      score: 0,
      id: 2
    },
    {
      name: "Ashley",
      score: 0,
      id: 3
    },
    {
      name: "James",
      score: 0,
      id: 4
    }
  ];
  const [players, setPlayers] = useState(defaultPlayers)

  const handleRemovePlayer = (id) => {
    setPlayers(prevPlayers => prevPlayers.filter(p => p.id !== id));
  }

  return (
    <div className="scoreboard">
      <Header 
        title="Scoreboard"
        players={players}
      />
      {players.map(player => 
        <Player
          name={player.name}
          score={player.score}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );
}

export default App;
