import React from "react";
import './WebsiteIntro.scss';
import video from '../../video/video.mp4';
import LOGO from '../../images/logo.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export default function WebsiteIntro() {
  return (
    <div className="MainPage">
      <video src={video} autoPlay loop muted playsInline className="video-element">
        Your browser does not support the video tag.
      </video>
      <div className="wrapper">
        <div className="textContainer">
          <img src={LOGO} style={{ width: '100%' }} />
        </div>
        <ExpandMoreIcon style={{marginTop:'40%'}} fontSize="large" />
      </div>
    </div>
  );
}
