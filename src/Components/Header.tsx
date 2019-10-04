import React, { Component } from "react";

class Header extends Component {
  state = {
    meta: {},
    data: []
  };

  render() {
    return (
      <div className="innerHeaderContainer">
        <h1>Cortney Smith</h1>
        <h2>Software engineer lady or whatever</h2>
      </div>
    );
  }
}

export default Header;
