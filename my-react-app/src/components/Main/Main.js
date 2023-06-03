import React from "react";
import "../Main/Main.css";
import image from "../../assets/Home_main.jpg";

function Main_image() {
  return (
    <div>
      <div className="container-fluid">
        <img src={image} className="image" />
        <div class="bottom-left">
          <h2>We are</h2>
          <h1>SMUBIA</h1>
        </div>
      </div>
      <div className="container-fluid" id="box">
        <h4 id="vision" >Our vision:</h4>
        <h4 id="SMU">To build a sustainable ecosystem for analytics in SMU</h4>
      </div>
    </div>
  );
}

export default Main_image;
