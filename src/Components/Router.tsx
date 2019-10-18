import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Wishlist from "./Wishlist";
import Blog from "./Blog";
import BlogPost from "./BlogPost";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/wishlist" component={Wishlist} />
      <Route exact path="/blog/posts/:post" component={BlogPost} />
    </Switch>
  </HashRouter>
);

export default Router;
