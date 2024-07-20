import React from "react";
import BannerBackground from "../Assets/home-banner2.png";
import BannerImage from "../Assets/forest-banner-image2.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h3 className="primary-heading">
            Van-Vargeekaran &#x1F64B;{/* Unicode for Hello emoji */}
          </h3>
          
          <p className="primary-text">
          <h4 align="justify">
            Your Forest Guide
          </h4>
            Empowers stakeholders to make informed decisions regarding forest land diversion, 
            fostering a future where conservation and development coexist in harmony.
          </p>
          <button className="secondary-button" >
            <a href="https://van-vargikaran-4.onrender.com" target="_" style={{display:"flex",alignItems:"center",color:"white",textDecoration:"none"}}>
              Discover Now <FiArrowRight />{" "}
            </a>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
