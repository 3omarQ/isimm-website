import React from 'react';
import './ImageGallery.css';
import c1 from "../../utils/images/club1.jpg";
import c2 from "../../utils/images/club2.jpg";
import c3 from "../../utils/images/club3.jpg";
import c4 from "../../utils/images/club4.jpg";
import c5 from "../../utils/images/club5.jpg";
import c6 from "../../utils/images/club6.jpg";
import c7 from "../../utils/images/club7.jpg";
import c8 from "../../utils/images/club8.jpg";
import c9 from "../../utils/images/club9.jpg";
import c10 from "../../utils/images/club10.jpg";

function ImageGallery() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="column">
          <img src={c1} alt="Gallery Image 1" />
          <img src={c2} alt="Gallery Image 2" />
          <img src={c3} alt="Gallery Image 3" />
          
        </div>
        <div className="column">
          <img src={c6} alt="Gallery Image 6" />
          <img src={c7} alt="Gallery Image 7" />
          <img src={c8} alt="Gallery Image 8" />
          <img src={c9} alt="Gallery Image 9" />
        </div>
        <div className="column">
          <img src={c10} alt="Gallery Image 10" />
          <img src={c4} alt="Gallery Image 4" />
          <img src={c5} alt="Gallery Image 5" />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
