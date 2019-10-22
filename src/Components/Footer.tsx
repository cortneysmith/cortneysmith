import React, { Component } from "react";

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
            <img src="images/butter-cms.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
