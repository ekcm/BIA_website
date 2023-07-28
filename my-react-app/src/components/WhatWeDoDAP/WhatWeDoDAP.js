import { React, useEffect, useState } from "react";
import "../WhatWeDoDAP/WhatWeDoDAP.css";
import DAP_image1 from "../../assets/What_we_do_DAP1.jpg";
import DAP_image2 from "../../assets/What_we_do_DAP2.jpg";
import Workshop_image1 from "../../assets/What_we_do_workshops1.jpg";
import Workshop_image2 from "../../assets/What_we_do_workshops2.jpg";
import Workshop_image3 from "../../assets/What_we_do_workshops3.jpg";

function DAP() {
  // const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div>
      <div className="container-fluid" id="box">
        <h5 id='DAP'>
          We offer technically-inclined members to deepen their knowledge
          through our Data Associate Programme
        </h5>
      </div>
      <div>
        <h1>Data Associate Programme</h1>
        <div className="container-row" id="DAP-row">
          <div className="custom-container" id="block">
            <h4 className="block-text">Co-Learning Sessions</h4>
            <p className="para">
              We believe the best way to learn is to teach. We hope to help Data
              Associates build a strong foundation of Machine Learning concepts
              and understand the intuition behind the math in Machine Learning.
            </p>
            <p className="para">
              Data Associates are split into teams of 4 and will present on the
              topic they are assigned to their fellow Data Associates. Topics
              presented at co-learning sessions include but is not limited to:
              Regression, Classification, Ensemble Learning, Neural Networks,
              Unsupervised Learning and Natural Language Processing
            </p>
          </div>
          <img src={DAP_image1} alt="" className="DAP_image" />
        </div>

        {/* Second container */}

        <div className="container-row" id="DAP-row">
          <img src={DAP_image2} alt="" className="DAP_image" />
          <div className="custom-container" id="block">
            <h4 className="block-text">Project-based Learning</h4>
            <p className="para">
              We believe in an application-first approach to learning.
            </p>
            <p className="para">
              Every Data Associate will have to form a group size of 4 and work
              on a project they propose. We do not limit the type of projects
              that Data Associates embark on, with the sole requirement that
              their project has to be related to Data Analytics
            </p>
            <p className="para">
              In addition, our Data Associates get the opportunity to share
              their findings and final project outcomes with the rest of the
              community
            </p>
          </div>
        </div>
      </div>

      {/* <div>
        <h1>Featured Projects</h1>
        <div className="container-row">
          <div className="custom-container" id="card">
            <h4 className="card-text">Phyo</h4>
            <br></br>
            <img src={Workshop_image1} alt="" className="images" />
            <p className="para">
              Our curriculum directors organize introductory workshops that
              cater to the members of all backgrounds and skill-level
            </p>
          </div>
          <div className="custom-container" id="card">
            <h4 className="card-text">Regine</h4>
            <br></br>
            <img src={Workshop_image2} alt="" className="images" />
            <p className="para">
              Our curriculum directors organize intermediate workshops that
              cater to members who would like to further their technical
              knowledge
            </p>
          </div>
          <div className="custom-container" id="card">
            <h4 className="card-text">Elijah</h4>
            <br></br>
            <img src={Workshop_image3} alt="" className="images" />
            <p className="para">
              Clustering and Regression model to predict HDB Resale Flat prices
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default DAP;
