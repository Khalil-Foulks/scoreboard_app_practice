import React, {useState} from "react";
import Counter from "./Counter";

function Player(props){
    const [score, setScore] = useState(props.score)

    return(
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => props.removePlayer(props.id)}></button>
                {props.name}
            </span>
            <Counter 
                score={score}
                setScore={setScore}
            />        
        </div>
    )
}

export default Player;