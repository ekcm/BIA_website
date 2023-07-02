import React from "react";
import "./WhatWeDoBody.css";
import Card from "../Card/Card";
import member from "../../assets/Home_members.jpg";
import workshop from "../../assets/Home_workshops.jpg";
import project from "../../assets/Home_projects.jpg";
import partner from "../../assets/Get_involved_main.jpg";

function WhatWeDoBody() {
  return (
    <div>
      <div>
        <h1>Our workshops</h1>
      </div>
      <div className="container-row">
        <div className="custom-container" id="card">
          <h4 className="card-text">Introductory</h4>
          <br></br>
          <img src={member} alt="" className="images" />
          <p className="para">
          Our curriculum directors organize introductory workshops that cater to the members of all backgrounds and skill-level
          </p>
        </div>
        <div className="custom-container" id="card">
          <h4 className="card-text">Intermediate</h4>
          <br></br>
          <img src={workshop} alt="" className="images" />
          <p className="para">
          Our curriculum directors organize intermediate workshops that cater to members who would like to further their technical knowledge
          </p>
        </div>
        <div className="custom-container" id="card">
          <h4 className="card-text">Industry Partners</h4>
          <br></br>
          <img src={project} alt="" className="images" />
          <p className="para">
          We also welcome industry partners to give introductory lectures
          </p>
        </div>
      </div>

    </div>
  );
}
export default WhatWeDoBody;