import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../Assets/images/affiliate.png";

const CourseBanner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src={banner1} alt="zXsZX" style={{ height: "200px" }} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={banner1} alt="" style={{ height: "200px" }} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={banner1} alt="ouiu" style={{ height: "200px" }} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default CourseBanner;
