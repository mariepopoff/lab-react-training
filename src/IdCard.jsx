import React from "react";
import "./IdCard.css"

export default function IdCard(props) {
    return <div id="id-card">
    
        <img src={props.picture}></img>
        <ul>
            <li> <b>First name:</b>{props.firstName}</li>
            <li> <b>Last name:</b> {props.lastName}</li>
            <li> <b>Gender:</b> {props.gender}</li>
            <li> <b>Height:</b> {props.height.toString().slice(0,1)},{props.height.toString().slice(1,3)}m</li>
            <li> <b>Birth:</b> {props.birth.toDateString()}</li>
        </ul>
    </div>
}