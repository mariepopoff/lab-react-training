import react from "react";
import "./ClickablePicture.css"
import React, { Component } from 'react'

export default class ClickablePicture extends Component {
    
    state = {
        img: this.props.img
    };

    handleClick =() => {
        this.setState(
            {
                img: this.state.img === this.props.img ? this.props.imgClicked : this.props.img
            }
        )
    }
    render() {
        return (
            <div>
                <img src={this.state.img} alt="photo" onClick={ (evt) => this.handleClick()}/>
            </div>
        )
    }
}

//  css: this.state.css === "button" ? "button is-active" : "button",