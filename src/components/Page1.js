import React,{useState} from 'react';
import PlayerDetails from './PlayerDetails'

const Page1 = (props) => {
    const [option,setOption]=useState(0);
    const playerArray = new Array(10).fill('');
    playerArray.length=option;
    const changeOption = (e) => {
        e.preventDefault();
        setOption(e.target.value);
    }
    const shuffle = () => {
        props.setPageNum(props.pageNum+1)
    }

    return(
        <div>
            <h1>Welcome</h1>
            <label>Enter the Number of Players</label>
            <select onChange={e=>changeOption(e)}>
                <option value={0}>0</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            {playerArray.map((x,i) => <PlayerDetails playerNum={i+1} playerArray={playerArray}/>)}
            <button onClick = {() => shuffle()}>Shuffle</button>
        </div>
    )
}

export default Page1;