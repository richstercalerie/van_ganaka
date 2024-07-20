import React from "react";
import PickMeals from "../Assets/tree-classify.png";
import ChooseMeals from "../Assets/dashboard.png";
import DeliveryMeals from "../Assets/enumerator.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Forest Cover Classifier",
      text: "Categorize and understand different types of forest cover based on vegetation, density, and geographical regions",
    },
    {
      image: ChooseMeals,
      title: "Forest Cover Analysis",
      text: "Examine detailed insights and trends in forest cover, including temporal changes and regional comparisons       ",
    },
    {
      image: DeliveryMeals,
      title: "Forest Cover Enumerator",
      text: "Quantify and assess forest cover through precise measurements and comprehensive data collection                 ",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">Our Features</h1>
        <p className="primary-text">
        Discover tools for classifying forest types, analyzing cover trends,
        and enumerating data to support effective forest management and conservation
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
