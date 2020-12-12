import React,{useState} from 'react';

const PlayerDetails = (props) => {
    const [value,setValue]=useState('')
    const changeValue = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }

    //input value is stored to name array
    props.playerArray[props.playerNum-1] = value;
    return(
        <div>
            <label>Player {props.playerNum} </label>
            <input onChange={e=>changeValue(e)} value={value}></input>
            {   //if every element of playerarray is not empty then setShuffleButton is made true, else false
                props.playerArray.every((element) => element !== '')?
                    props.setShuffleButton(true): props.setShuffleButton(false)
            }
        </div>
    )
}

export default PlayerDetails;