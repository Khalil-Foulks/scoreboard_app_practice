import React from "react";
import PropTypes from "prop-types";

function Stats({players}){
    const totalPlayers = players.length;
    const initialVal = 0;
    const totalPoints = players.reduce((total, player) => total + player.score, initialVal);

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

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats;