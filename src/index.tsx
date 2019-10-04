// REACT COMPONENTS
import React from "react";
import ReactDOM from "react-dom";
import Router from "./Components/Router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import * as serviceWorker from "./serviceWorker";

// CSS STYLESHEETS
import "./css/index.css";
import "./css/blog.css";

// APP
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Router />, document.getElementById("main"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

serviceWorker.unregister();
