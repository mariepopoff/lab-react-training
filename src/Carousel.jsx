import React, { Component } from 'react'

export default class Carousel extends Component {

    state = {
        index : 0
    }

    goRight = () => {
        this.setState(
            {
                index: (this.state.index === this.props.imgs.length - 1)? 0 : this.state.index + 1
            }
        )
    }

    goLeft = () => {
        this.setState(
            {
                index: (this.state.index === 0)? this.props.imgs.length - 1 : this.state.index - 1
            }
        )
    }
    render() {
        return (
            <div>
                <button onClick={(evt) => this.goLeft()}>Left
                </button>
                <img src={this.props.imgs[this.state.index]}/>
                <button onClick={(evt) => this.goRight()}>Right</button>
            </div>
        )
    }
}
