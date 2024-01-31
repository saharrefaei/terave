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
      <div  className="planes">

                <div className="plansCard1">
                    <div className="plans1">
                        <div className="ptitle"><b>Bronze</b><span className="planesColor1">BRONZE</span></div>
                        <div className="pinsider">
                            <span>Branding Design</span>
                            <span>UX Design</span>
                            <span>Web Design</span>
                            <span>Photograpy</span>
                        </div>
                        <i>Contact with Us</i>
                        <a href="#">Order</a>
                    </div>
                </div>
                <div  className="plansCard2">
                    <div className="plans2">
                        <div className="ptitle"><b>Silver</b><span className="planesColor2">SILVER</span></div>
                        <div className="pinsider">
                            <span>Branding Design</span>
                            <span>Video production</span>
                            <span>UX Design</span>
                            <span>Web Design</span>
                            <span>Photograpy</span>
                            <span>Digital Marketing</span>
                        </div>
                        <i>Contact with Us</i>
                        <a href="#">Order</a>
                    </div>
                </div>
                <div  className="plansCard3">
                    <div className="plans3">
                        <div className="ptitle"><b>Gold</b><span className="planesColor3">GOLD</span></div>
                        <div className="pinsider">
                            <span>Art direction</span>
                            <span>Branding Design</span>
                            <span>Video production</span>
                            <span>UX Design</span>
                            <span>Web Design</span>
                            <span>Photograpy</span>
                            <span>Digital Marketing</span>
                        </div>
                        <i>Contact with Us</i>
                        <a href="#">Order</a>
                    </div>
                </div>
                <div  className="plansCard4">
                    <div className="plans4">
                        <div className="ptitle"><b>Diamond</b><span className="planesColor4">DIAMOND</span></div>
                        <div className="pinsider">
                            <span>You can customize your plan with any service you want</span>
                        </div>
                        <i>Contact with Us</i>
                        <a href="#">Order</a>
                    </div>
                </div>
            </div>
    
    </div>
  );
}

export default packages;
