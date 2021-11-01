import react from "react";
import "./CreditCard.css"

export default function CreditCard(props) {
    const lastNumbers = props.number.toString().slice(12,16)
    const divStyles = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    const typeCard = (props.type === "Visa") ? "visa.png" : "master-card.svg";
    return <div id= "credit-card" style={divStyles}>
     <img src={"./../img/" + typeCard} alt="logo" width="50px"/>
      <article id="numbers">•••• •••• •••• {lastNumbers}</article>

   
     <section>
         <div>
             <article>Expires {props.expirationMonth}/{props.expirationYear}</article>
             <article>{props.bank}</article>
         </div>
         <article>{props.owner}</article>
     </section>

    </div>
}