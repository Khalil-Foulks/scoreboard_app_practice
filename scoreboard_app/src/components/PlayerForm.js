import React, { useState } from "react";

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

export default PlayerForm;