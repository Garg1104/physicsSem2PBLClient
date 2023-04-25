import React from "react";

// import the logos
import instaLogo from "../assets/instagramLogo.png";
import faceLogo from "../assets/facebookLogo.png";
import gitLogo from "../assets/githubLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="maker">
        <h4 className="makerHeading">Maker: </h4>
        <div className="makerDetails">
          <div className="makerName">Harsh Garg</div>
          <div className="makerCollDets">22104009 - B14</div>
          <div className="makerSocial">
            <a href="https://instagram.com/harsh_garg_00" target="_blank">
              <img src={instaLogo} alt="Instagram" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=100010948148676"
              target="_blank">
              <img src={faceLogo} alt="Facebook" />
            </a>

            <a href="https://github.com/HarshTheGarg" target="_blank">
              <img src={gitLogo} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyrightInfoContainer">
        <div className="copyrightInfo">No copyright ingringment intended</div>
      </div>
    </footer>
  );
};

export default Footer;
