import React,{useState} from 'react';
import PlayerDetails from './PlayerDetails';

//Welcome Page
const LandingPage = (props) => {
    //option variable stores the input option
    const [option,setOption]=useState(0);
    //playerArray stores the input names. By default 10 elements with empty strings
    const playerArray = new Array(10).fill('');
    playerArray.length=option;
    //runs whenever option is changed
    const changeOption = (e) => {
        setOption(e.target.value);
    }
    //runs on clicking shuffle button
    const [shuffleButton, setShuffleButton] = useState(false);
    const shuffle = () => {
        props.setPageNum(props.pageNum+1);
        props.setPlayerArray(playerArray);
    }

    return(
        <div className='landing-page'>
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
            {
                playerArray.map(
                    (x,i) => <PlayerDetails playerNum={i+1} playerArray={playerArray} setShuffleButton={setShuffleButton}/>
                )
            }
            <br/>
            {
                shuffleButton?<button onClick = {() => shuffle()}>Shuffle</button>:true
            }
            
        </div>
    )
}

export default LandingPage;