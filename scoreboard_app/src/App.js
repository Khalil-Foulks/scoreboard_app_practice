import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
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

  const handleAddPlayer = (name) => {
    // Returns a random integer from 5 to 100,000,000:
    const id = Math.floor(Math.random() * 100000000) + 5;
    setPlayers(prevPlayers => [
      ...prevPlayers,
      {
        name,
        score: 0,
        id
      }
    ]);
  }

  const handleScoreChange = (id, delta) => {
    setPlayers(prevPlayers => prevPlayers.map(player => {
        if (player.id === id) {
          return {
            name: player.name,
            score: player.score + delta,
            id: player.id
          }
        }
        return player;
      }));
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
          changeScore={handleScoreChange}
        />
      )}
      <PlayerForm
        addPlayer={handleAddPlayer}
      />
    </div>
  );
}

export default App;
