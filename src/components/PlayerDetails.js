import React,{useState} from 'react';

const PlayerDetails = (props) => {
    const [value,setValue]=useState('')
    const changeValue = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    props.playerArray[props.playerNum-1] = value;
    return(
        <div>
            <label>Player {props.playerNum}</label>
            <input onChange={e=>changeValue(e)} value={value}></input>
        </div>
    )
}

export default PlayerDetails;