import React from "react";

function Counter(props){
    
    const incrementScore = () => {
        props.setScore(prevScore => prevScore + 1);
    }

    const decrementScore = () => {
        props.setScore(prevScore => prevScore - 1);
    }


    return(
        <div className="counter">
            <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
        </div>
    )
}

export default Counter;