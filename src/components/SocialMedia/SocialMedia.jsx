import React from "react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div>
      <div className="socialicontab">
        <a href="https://x.com/besideyou_woo" target="__blank">
          <i className="fa fa-twitter socialicon "></i>
        </a>
        <a href="https://www.facebook.com/Beside.U.Kol" target="__blank">
          <i className="fa fa-facebook socialicon"></i>
        </a>
        <a href="https://www.instagram.com/besideu.taiwan/" target="__blank">
          <i className="fa fa-instagram socialicon"></i>
        </a>
        <a href="/" target="__blank">
          <i className="fa fa-pinterest socialicon"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCU7c9LqzG3ZavmVsqBBEM1w"
          target="__blank"
        >
          <i className="fa fa-youtube socialicon"></i>
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
