import react from "react";

import React, { Component } from 'react'

export default class Dice extends Component {
    
    
    state = {
        indexImage: Math.floor(Math.random()* 6),
        images: [ "./img/dice-empty.png","./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"],
        // image : this.state.images[Math.floor(Math.random()* 6)]
    }
    
    emptyImage = () => {
        this.setState(
            {
                indexImage: 0
            }
        )
    }
    handleClick = () => {

        this.setState(
            {
                indexImage: Math.floor(Math.random()* 6) + 1
            }
        )
    }

    render() {
        const emptyImage = "dice-empty.png"
        return (
            <div>
            <img src={this.state.images[this.state.indexImage]} alt="photo" width="150px" onClick = {(evt) => { 
                const timeoutID = setTimeout(this.emptyImage(), 1);
                const timeoutI = setTimeout(this.handleClick(),1000);
                }}/>
            </div>
        )
    }
}
