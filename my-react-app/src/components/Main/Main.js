// import React from "react";
// import "../Main/Main.css";
// import image from "../../mainpics/Home_main.jpg";

// function Main_image() {
//   return (
//     <div>
//       <div className="container-fluid">
//         <img src={image} className="image" alt=""/>
//         <div class="bottom-left">
//           <h2>We are</h2>
//           <h1>SMUBIA</h1>
//         </div>
//       </div>
//       <div className="container-fluid" id="box">
//         <h4 id="vision" >Our vision:</h4>
//         <h4 id="SMU">To build a sustainable ecosystem for analytics in SMU</h4>
//       </div>
//     </div>
//   );
// }

// export default Main_image;

import React, { useState, useEffect } from "react";
import "../Main/Main.css";

function MainImage() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load images from assets folder
  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context("../../mainpics", false, /\.(png|jpe?g|svg)$/));
    setImages(images);
  }, []);

  // Rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (

    <div className="container-fluid">
      <img src={images[currentIndex]} className="image" alt="SMUBIA Logo" />
      <div className="bottom-left">
        <h2>We are</h2>
        <h1>SMUBIA</h1>
      </div>

      <div id="main-box">
        <h4 id="vision">Our vision: &nbsp;</h4>
        <h4 id="SMU">To build a sustainable ecosystem for analytics in SMU</h4>
      </div>
    </div >
  );
}

export default MainImage;
