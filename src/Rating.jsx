import react from "react";
import "./Rating.css"

export default function Rating(props) {
   
    const rate = Math.round(props.children)
    const arrayImages =[]
    for (let i=0; i< rate; i++) {
        arrayImages[i] = "./../star.png"
    }
    if (rate<5) {
        for (let i=rate; i<=5; i++) 
        arrayImages[i] = "./../star-empty.png"
    }
    return <div id= "rating">
   <img src={arrayImages[0]} alt="logo" width="50px"/>
   <img src={arrayImages[1]} alt="logo" width="50px"/>
   <img src={arrayImages[2]} alt="logo" width="50px"/>
   <img src={arrayImages[3]} alt="logo" width="50px"/>
   <img src={arrayImages[4]} alt="logo" width="50px"/>

    </div>
}