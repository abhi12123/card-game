import React,{useEffect, useState} from 'react';
import {Table,Deck,Player} from './CardGameClasses';
import PlayerCard from './PlayerCard';

const ShuffledPage = (props) => {
    const back = () => {
        props.setPageNum(1)
    }
    
    let table = new Table();
    let deck = new Deck();
    deck.intialise();

    return (
        <div className='shuffled-page'>
            <h1>Shuffled Menu</h1>
            <div className="player-cards">
                {props.playerArray.map(e => (
                    table.addPlayer(new Player(e)) )
                )
                }
                {
                    table.distribute(deck)
                }
                {table.players.map(e => (
                    <PlayerCard player={e}/>
                ))}
            </div>
            <button onClick = {() => back()}>Back</button>
        </div>
    )
}

export default ShuffledPage;