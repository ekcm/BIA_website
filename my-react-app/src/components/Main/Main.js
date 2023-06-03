import React from "react";
import "../Main/Main.css";
import image from "../../assets/Home_main.jpg"

function Main_image(){
    return(
        <div>
            <img src={image} className="image"/>
            <h2>We are</h2>
            <h1>SMUBIA</h1>
        </div>
        
    )
}

export default Main_image;