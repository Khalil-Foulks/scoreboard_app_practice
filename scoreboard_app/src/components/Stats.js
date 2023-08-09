import React from "react";

function Stats(props){
    const totalPlayers = props.players.length;
    const initialVal = 0;
    const totalPoints = props.players.reduce((total, player) => total + player.score, initialVal);

    return(
        <table className="stats">
            <tbody>
                <tr>
                <td>Players: </td>
                <td>{totalPlayers}</td>
                </tr>
                <tr>
                <td>Total Points: </td>
                <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

export default Stats;