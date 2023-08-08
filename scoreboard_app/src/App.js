import React, { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import logo from './logo.svg';
import './App.css';

function App() {
  const defaultPlayers = [
    {
      name: "Guil",
      id: 1
    },
    {
      name: "Treasure",
      id: 2
    },
    {
      name: "Ashley",
      id: 3
    },
    {
      name: "James",
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
        title = "Scoreboard"
        totalPlayers={players.length}
      />
      {players.map(player => 
        <Player
          name={player.name}
          id={player.id}
          key={player.id.toString()}
          removePlayer={handleRemovePlayer}
        />
      )}
    </div>
  );
}

export default App;
