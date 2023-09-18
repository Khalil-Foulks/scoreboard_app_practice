import React, {memo} from "react";
import Counter from "./Counter";

function Player({removePlayer, name, score, id, changeScore}){
    return(
        <div className="player">
            <span className="player-name">
                <button className="remove-player" onClick={() => removePlayer(id)}></button>
                {name}
            </span>
            <Counter 
                score={score}
                id={id}
                changeScore={changeScore}
            />        
        </div>
    );
}


const playerPropsAreEqual = (prevProps, nextProps) => {
    return prevProps.score === nextProps.score;
}

//fixes performance by preventing unecessary rerenders
export default memo(Player, playerPropsAreEqual);