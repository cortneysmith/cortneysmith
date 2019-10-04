import React, { Component } from "react";
import ButterCMSLogo from "../images/butter-cms.png";

class Footer extends Component {
  state = {
    meta: {},
    data: []
  };

  render() {
    return (
      <div className="innerFooterContainer">
        <div className="footer-center-column"></div>

        <div className="butter-cms-logo">
          Blog powered by{" "}
          <a href="https://buttercms.com" target="_blank">
            <img src={ButterCMSLogo} />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
