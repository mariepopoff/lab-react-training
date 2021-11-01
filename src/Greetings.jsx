import React from "react";
import "./Greetings.css"

export default function Greetings(props) {
   const messages = {
       fr: "Bonjour",
       en: "Hello",
       de: "Hallo",
       es: "Hola"
   }
    return <div id="greetings">
    {messages[props.lang]} {props.children}
    </div>
}