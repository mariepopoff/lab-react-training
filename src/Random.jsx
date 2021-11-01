import react from "react";
import './Random.css'


export default function Random(props) {
    const result = Math.floor(Math.random() * (props.max - props.min)) + props.min;
    return  <div id="random">
        Random value between {props.min} and {props.max} => {result}
    </div>
}