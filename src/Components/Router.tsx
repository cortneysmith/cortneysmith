import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog/posts/:post" component={BlogPost} />
    </Switch>
  </BrowserRouter>
);

export default Router;
