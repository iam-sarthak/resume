import React from "react";
import "./Head.css";
import github from "../../assets/github.png";
import dev from "../../assets/dev-black.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import logo from "../../assets/logo.jpeg";
function Head() {
  return (
    <div className="head">
      <div className="logo"><img src={logo} alt="" />
      </div>
      <div className="intro">
        <div className="name"> Sarthak Mittal</div>
        <div className="line"></div>
        <div className="techstack">Master Student at TIET | JavaScript | Freelancer | opensource</div>
        <a href="mailto:sarmittal@gmail.com"><div className="letsconnect">🤝 let's Connect</div></a>
        
        <div className="socialicons">
          <a href="https://github.com/iam-sarthak">
            <img src={github} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/sarthak-mittal-/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://dev.to/sarmittal">
            <img src={dev} alt="" />
          </a>
          {/* <a href="http://">
            <img src={facebook} alt="" srcset="" />{" "}
          </a> */}
          <a href="https://twitter.com/sarmittal">
            <img src={twitter} alt="" />
          </a>
          {/* <a href="http://">
            <img src={instagram} alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Head;
