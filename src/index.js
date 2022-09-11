import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts
import ThemPark from "views/Project/ThemPark";
import VirtualMuseum from "views/Project/VirtualMusem.js";
import Application from "views/Project/Application";
import Project from "views/Project.js";
import Profile from "views/Profile.js";
import Profolio from "views/Profolio";
import FpsDemo from "views/Project/fpsDemo";
import RpgDemo from "views/Project/rpgDemo"

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      {/* add routes with layouts */}
      {/* <Route path="/admin" component={Admin} /> */}
      <Route path="/auth" component={Auth} />
      {/* add routes without layouts */}
      {/* <Route path="/project1" exact component={Project} />  */}
      <Route path="/Application" component={Application}  ></Route>
      <Route path="/FpsDemo" component={FpsDemo}  ></Route>
      <Route path="/RpgDemo" component={RpgDemo}  ></Route>
      <Route path="/project1" component={ThemPark}  ></Route>
      <Route path="/VirtualMuseum" component={VirtualMuseum}  ></Route>
      <Route path="/collection" exact component={Profile} />
      <Route path="/" exact component={Profolio} />
      {/* add redirect for first page */}
      <Redirect from="*" to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

