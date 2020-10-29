import React, { Component } from "react";
import "./footer.styles.scss";
import fb from "../../assets/facebook.svg";
import whatsapp from "../../assets/whatsapp.svg";
import insta from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

export default class Footer extends Component {
  render() {
    return (
      <div className="footerWrap">
        <div className="heading heading_1">
          <h4 className="heading1">Heading 1</h4>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
        </div>
        <div className="heading heading_2">
          <h4 className="heading2">Heading 2</h4>
          <div>Something here</div>
          <div>Something here</div>
        </div>
        <div className="heading heading_3">
          <h4 className="heading3">Heading 3</h4>
          <div>Something here</div>
          <div>Something here</div>
          <div>Something here</div>
        </div>
        <div className="followUsWrap">
          <div className='socialMedia'>
            <img className="socialMediaLogo" src={fb} alt="Facebook" />
            <img className="socialMediaLogo" src={youtube} alt="Youtube" />
            <img className="socialMediaLogo" src={insta} alt="Instagram" />
            <img className="socialMediaLogo" src={whatsapp} alt="Whatsapp" />
          </div>
        </div>
      </div>
    );
  }
}
