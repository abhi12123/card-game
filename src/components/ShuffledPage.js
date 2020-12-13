import React,{useEffect, useState} from 'react';
import {Table,Deck,Player} from './CardGameClasses';
import PlayerCard from './PlayerCard';

const ShuffledPage = (props) => {
    //goes to the previous page
    const back = () => {
        props.setPageNum(1)
    }
    let table = new Table();
    let deck = new Deck();
    deck.intialise();

    const [ shuffling, setShuffling ] = useState(true)

    setTimeout(
        () => {setShuffling(false)}, 3000
    )

    if (shuffling) {
        return (
            <h1 className='shuffling'>Shuffling...</h1>
        )
    }

    return (
        <div className='shuffled-page'>
            <h1>Shuffled Menu</h1>
            <div className="player-cards">
                {   //maps through the player array and creates new Player and adds to the table
                    props.playerArray.map(e => (table.addPlayer(new Player(e))))
                }
                {   //deck is distributed to the table
                    table.distribute(deck)
                }
                {   //maps thorough players of the table PlayerCard is rendered for each player
                    table.players.map((e,i) => (<PlayerCard player={e} index={i+1}/>))
                }
            </div>
            <button onClick = {() =>back}>Back</button>
        </div>
    )
}

export default ShuffledPage;