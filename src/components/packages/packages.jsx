import React from "react";
import "./packages.scss";

function packages() {
  return (
    <div className="packagesContainer">
      <div className="packagesTitle">
        <div className="firstLine">
          <p style={{ fontSize: "32px" }}> What You Want</p>
          <p className="packages" style={{ fontSize: "10px" }}>
            PLANS
          </p>
        </div>
        <p style={{ fontSize: "14px" }}>
          Select your ideal plan from our plans below.
        </p>
      </div>
      <div className="planes">
        <div className="plansCard1">
          <div className="plans1">
            <div className="ptitle">
              <b>normal</b>
              <span className="planesColor1">NORMAL</span>
            </div>
            <div className="pinsider">
              <span>Background design</span>
              <span>Make up</span>
              <span>pose</span>
              <span>Photograpy</span>
            </div>
            <i>Contact with Us</i>
            <a href={`#contacts`}>Order</a>{" "}
          </div>
        </div>
        <div className="plansCard2">
          <div className="plans2">
            <div className="ptitle">
              <b>heigh</b>
              <span className="planesColor2">HEIGH</span>
            </div>
            <div className="pinsider">
              <span>Background design</span>
              <span>Make up</span>
              <span>pose</span>
              <span>Photograpy</span>
              <span>Edit Photos</span>
              <span>Advertising</span>
            </div>
            <i>Contact with Us</i>
            <a href={`#contacts`}>Order</a>{" "}
          </div>
        </div>
        <div className="plansCard3">
          <div className="plans3">
            <div className="ptitle">
              <b>prime</b>
              <span className="planesColor3">PRIME</span>
            </div>
            <div className="pinsider">
              <span>Background design</span>
              <span>Make up</span>
              <span>pose</span>
              <span>Photograpy</span>
              <span>Edit photo</span>
            </div>
            <i>Contact with Us</i>
            <a href={`#contacts`}>Order</a>{" "}
          </div>
        </div>
        <div className="plansCard4">
          <div className="plans4">
            <div className="ptitle">
              <b>you</b>
              <span className="planesColor4">YOU</span>
            </div>
            <div className="pinsider">
              <span>You can customize your plan with any service you want</span>
            </div>
            <i>Contact with Us</i>
            <a href={`#contacts`}>Order</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default packages;
