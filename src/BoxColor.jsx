import React from "react";
import "./BoxColor.css"

export default function BoxColor(props) {
    const color = `rgb(${props.r}, ${props.g}, ${props.b})`
    const divStyle = {
        backgroundColor: color
    }
    return <div id="box-color" style={divStyle}>
    rgb({props.r}, {props.g}, {props.b})

    </div>
}