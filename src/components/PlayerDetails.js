import React,{useState} from 'react';

const PlayerDetails = (props) => {
    //value is the input value
    const [value,setValue]=useState('')
    const changeValue = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
    //input value is stored to name array
    props.playerArray[props.playerNum-1] = value;
    // console.log(props.playerArray);
    return(
        <div>
            <label>Player {props.playerNum} </label>
            <input onChange={e=>changeValue(e)} value={value}></input>
            {
                props.playerArray.every((element) => element !== '')?
                    props.setShuffleButton(true): props.setShuffleButton(false)
            }
            </div>
    )
}

export default PlayerDetails;