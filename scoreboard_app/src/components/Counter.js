import React, {useState} from "react";

function Counter(){
    const [score, setScore] = useState(0)
    
    const incrementScore = () => {
        setScore(prevScore => prevScore + 1);
    }

    const decrementScore = () => {
        setScore(prevScore => prevScore - 1);
    }


    return(
        <div className="Counter">
            <button className="counter-action increment" onClick={() => incrementScore()}> + </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action decrement" onClick={() => decrementScore()}> - </button>
            Counter
        </div>
    )
}

export default Counter;