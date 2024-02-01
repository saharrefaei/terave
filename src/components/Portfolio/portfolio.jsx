import React from "react";
import "./portfolio.scss";
import portfolio1 from "../../images/portfolio1.jpg";
import portfolio2 from "../../images/portfolio2.jpg";
import portfolio3 from "../../images/portfolio3.jpg";
import { motion } from "framer-motion";

function Portfolio() {
  const photoData = [
    { url: portfolio1, title: "LA shot" , description : "pars Bim"  },
    { url: portfolio2, title: "Free girl" ,description : "spain"},
    { url: portfolio3, title: "Besties",description : "mexiko" },
  ];
  return (
    <div className="portfolioContainer">
      <div className="portfolioTitle">
        <div className="firstLine">
          <p style={{fontSize:'32px'}}>RECENT PROJECTS</p>
          <p className="PORTFOLIO" style={{fontSize:'10px'}}>PORTFOLIO</p>
        </div>
        <p style={{fontSize:'14px'}}>A list of the latest projects done by our group.</p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "2%",
          width: "100%",
        }}
        className="portfoliosPhoto"
      >
         {photoData.map((data, index) => (
          <div key={index} className="portfolioItem">
            <a href="">
            <img
              src={data.url}
              alt={`Photo ${index + 1}`}
              style={{
                width: "60%",
                height: "auto",
                borderRadius: "30px",
                className: "portfolioImage",
              }}
            /></a>
            <div className="photoText">
            <div className="photoTitle" style={{ fontSize:'1.3rem',lineHeight:'1.4'}}>{data.title}</div>
            <div className="photodescription"  style={{ fontSize:'0.9rem',color:'gray'}}>Logo Design for "{data.description}" by Evart Advertising Agency</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
