import react from "react";
import Rating from './Rating';
import "./DriverCard.css"

export default function DriverCard(props) {
    const rate = Math.round(props.rating);
    return <div id="drivercard">
    <img id="img-driver" src={props.img}/>

    <div>
        <p> {props.name}</p>
        <Rating>{rate}</Rating>
        <p> {props.car.model} - {props.car.licensePlate}</p>
    </div>

    </div>
}