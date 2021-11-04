import React, { Component } from 'react'
import "./SingleColorPicker.css"
export default class SingleColorPicker extends Component {
    state = {
        value: 0
    }
    
    handleChange = (evt) => {
      this.setState({
        value: evt.target.value,
      }, () => this.props.onChange(this.state.value, this.props.color) );
     
    }

    render() {
        let color; 

        if (this.props.color === "r") {
            color = `rgb(${this.state.value},0,0)`
        }
        if (this.props.color === "g") {
            color = `rgb(0,${this.state.value},0)`
        }
        if (this.props.color === "b") {
            color = `rgb(0,0,${this.state.value})`
        }
        let divStyle = {
            backgroundColor: color
        }
        return (
            <div id ="single-picker">
                <div id="color-box" style={divStyle}></div>
                <div id="color-choose" >
                <p>{this.props.color.toUpperCase()}:</p>
                <input type="number" min="0" max="255" value={this.state.value} onChange= {this.handleChange}/>
                </div>
            </div>
        )
    }
}
