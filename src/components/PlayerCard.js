import React from 'react';

const PlayerCard = (props) => {
    
    return(
        <div className="player-card">
            <h3>Player {props.index}</h3>
            <h2>{props.player.name}</h2>
            <h2>{props.player.getScore()}</h2>
            {   //maps through the player's cards are displays the suite and value
                props.player.cards.map(e => (<h4>{e.suite} {e.value}</h4>))
            }
        </div>
    )
}

export default PlayerCard;