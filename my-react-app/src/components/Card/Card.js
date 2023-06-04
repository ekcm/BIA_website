import React from "react";
import "../Card/Card.css";

function Card() {
  return (
    <div class="row">
      <div class="container" id="card">
        <h4 class="card-text">Members</h4>
      </div>
      <div class="container" id="card">
        <h4 class="card-text">Workshops</h4>
      </div>
      <div class="container" id="card">
        <h4 class="card-text">Projects</h4>
      </div>
      <div class="container" id="card">
        <h4 class="card-text">Partners</h4>
      </div>
    </div>
  );
}

export default Card;
