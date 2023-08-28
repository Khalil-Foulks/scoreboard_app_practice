import React, {useState} from "react";

function Stopwatch(){
    const [isRunning, setIsRunning] = useState(false);
    return (
        <div className="stopwatch">
            <h2>Stopwatch</h2>
            <span className="stopwatch-time">0</span>
            <button onClick={() => setIsRunning(!isRunning)}>
                {
                    isRunning ? "Stop" : "Start"
                }
            </button>
            <button>Reset</button>
        </div>
    )
}

export default Stopwatch;