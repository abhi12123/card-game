class Card {
    constructor (suite,value) {
        this.suite = suite;
        this.value = value;
    }
    //returns the converted value of the card
    getValue() {
        switch(this.value){
            case 'J' : return 11;
            case 'Q' : return 12;
            case 'K' : return 13;
            case 'A' : return 14;
            default : return this.value;
        }
    }
}

class Deck{
    constructor(){
        this.suite = ['S','C','H','D'];
        this.charaterValues=['J','Q','K','A']
        //creating an array of Card objects
        this.cards=[];
        //initialises the deck with 52 cards
        this.intialise=function(){
            let n=0;
            for(let j of this.suite){
                //initialises cards from 2 to 10
                for(let i=2;i<11;i++){            
                    this.cards.push(new Card(j,i));
                }
                //initialises cards from J,Q,K and A
                for(let i of this.charaterValues){
                    this.cards.push(new Card(j,i));
                }
            }
        }
    }
    //removes and returns topmost card from deck if the deck is not empty
    removeCard(){
        if(this.cards.length===0){
            return true;
        }else{
            return this.cards.pop();
        }
    }
    //adds the argument card object to the deck if the deck is not full
    addCard(card){
        if(this.cards.length===52){
            return true;
        }else{
            for(let i=0;i<this.cards.length;i++){
                if(this.cards[i].suite === card.suite && this.cards[i].value === card.value){
                        return true;
                }
            }
            this.cards.push(card);
        }
    }
    //shuffles the deck
    shuffle(){
        this.cards.sort(function(a, b){return 0.5 - Math.random()});
    }
}

class Player{
    constructor(name){
        this.name=name;
        this.cards=[];
    }
    //gives argument card to the player
    giveCard(card){
        this.cards.push(card);
    }
    //sums and returns the value of the total cards of the player
    getScore(){
        let totalScore=0;
        for(let i in this.cards){
            totalScore+=this.cards[i].getValue();
        }
        return totalScore;
    }
}

class Table{
    constructor(){
        this.players=[];
        this.tableLimit=6;
    }
    //adds atmost 6 players to the table
    addPlayer(player){
        if(this.players.length==6){
            return true;
        }else{
            this.players.push(player);
        }
    }
    //distributes the deck object to the players at the table
    distribute(deck){
        //shuffles the deck before distributing
        deck.shuffle(); 
        let j=0;
        while(deck.cards.length>0){
            if(j==this.players.length){
                j=0;
            }
            this.players[j].giveCard(deck.removeCard());
            j++;
        }
    }
    //displays the score in ascending order
    playerScoreOrder(){
        this.players.sort(
            function(a,b) { return (a.getScore() - b.getScore()) } 
        );
        for(let j of this.players){
            // console.log(j.name,j.getScore()) //remove the comment to view the scores
        }
    }
}

export {Table,Deck,Player};