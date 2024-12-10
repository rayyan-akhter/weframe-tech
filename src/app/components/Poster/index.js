import React from "react";
import "./style.css";
import Image from "next/image";
import service_poster from "../../assets/service-poster.png";
import service_poster2 from "../../assets/service-poster2.png";

export const Poster = () => {
  return (
    <div className="service">
      <div className="service-container">
        <div className="service-title">
          <p className="service-heading">
            On s’occupe de
            <span> tout</span>
          </p>
          <p className="service-description">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>
        </div>
        <div className="service-poster">
          <Image src={service_poster} alt="image" />
        </div>
      </div>
      <div className="service-poster-form-container">
        <div className="service-second-poster">
          <Image src={service_poster2} alt="poster" className="service-second-poster-image" />
        </div>
        <div className="feedback-container">
          <div className="feedback-heading">
            S’inscrire & économiser <span> 10%</span>{" "}
          </div>
          <div className="feedback-material">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didnt. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate
            nail caught synergy highlights lunch. Company another pushback items
            dear or any.
          </div>
          <div className="form-container">
            <input type="text" />
            <div className="form-button">
              <p>S’inscrire</p>
              <p>→</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line"/>
    </div>
  );
};
