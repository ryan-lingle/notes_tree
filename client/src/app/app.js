import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Root } from "../components";
class App extends Component {
  render() {
    const branches = window.location.pathname.split('/');
    return (
      <Router>
        <div id="header">
          <div id="parents" className="col-2">
            <div  className="icon fa fa-arrow-up"></div>
          </div>
          <div id="current" className="col-8">
            ryanlingle
          </div>
          <div id="children" className="col-2">
            <div className="icon fa fa-arrow-down"></div>
          </div>
        </div>
        <Switch>
          <Route component={Root}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
