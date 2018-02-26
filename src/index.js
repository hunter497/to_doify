import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./vendor/css/bulma.css";
import Navigation from "./Components/Navigation/index";
import ToDoApp from "./Pages/ToDoApp";
import Home from "./Pages/Home";
import registerServiceWorker from "./registerServiceWorker";

const element = (
  <Router>
    <React.Fragment>
      <Navigation />
      <Route exact={true} path="/" component={Home} />
      <Route path="/todo" component={ToDoApp} />
    </React.Fragment>
  </Router>
);

ReactDOM.render(element, document.getElementById("root"));
registerServiceWorker();
