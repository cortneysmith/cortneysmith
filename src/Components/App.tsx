import React, { Component } from "react";
import "../css/App.css";

interface AppState {}

class App extends Component {
  state = {
    meta: {},
    data: []
  };

  render() {
    return (
      <div className="App">
        <p>This is my app!</p>
        <p>
          <a href="/blog">Go to the blog...</a>
        </p>
      </div>
    );
  }
}

export default App;
