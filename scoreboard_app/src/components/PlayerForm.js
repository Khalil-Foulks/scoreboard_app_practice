import React, { useState } from "react";
import PropTypes from "prop-types";

function PlayerForm({addPlayer}){
    const [value, setValue] = useState("");

    const inputChange = (e) => {
        console.log(e)
        setValue(e.target.value)
    } 

    const submitForm = (e) => {
        e.preventDefault();
        addPlayer(value)
    }

    return(
        <form onSubmit={submitForm}>
            <input
                type="text"
                value = {value}
                placeholder="Enter a player's name"
                onChange = {inputChange}
            />
            <input
                type="submit"
                value="Add Player"
            />
        </form>
    )
}

PlayerForm.propTypes = {
    addPlayer: PropTypes.func 
};

export default PlayerForm;