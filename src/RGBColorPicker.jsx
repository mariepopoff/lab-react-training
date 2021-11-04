import React, { Component } from 'react'
import SingleColorPicker from './SingleColorPicker'
import "./RGBColorPicker.css"
export default class RGBColorPicker extends Component {

    state = {
        rValue: 0,
        gValue: 0,
        bValue: 0
    }
   
    calculRGB = (quantity, color) => {
        this.setState ({
            [`${color}Value`]: quantity
        })
    }
    render() {
        const color = `rgb(${this.state.rValue}, ${this.state.gValue}, ${this.state.bValue})`
        const divStyle = {
            backgroundColor: color
        }
        return (
            <div>
                <SingleColorPicker color="r" value="0" onChange={this.calculRGB}></SingleColorPicker>
                <SingleColorPicker color="g" value="0" onChange={this.calculRGB}></SingleColorPicker>
                <SingleColorPicker color="b" value="0" onChange={this.calculRGB}></SingleColorPicker>
                <div id="color-picker">
                    <div style={divStyle}></div>
                    <p>rgb({this.state.rValue}, {this.state.gValue}, {this.state.bValue})</p>
                </div>
            </div>
        )
    }
}
