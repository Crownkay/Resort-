import React, { Component } from "react";
import "./App.css";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Tweet from "./pages/Tweet";

import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          {/* exact is used if the pah matches the exact '/' path */}
          <Route exact path="/rooms/" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route exact path="/tweet/" component={Tweet} />
          <Route component={Error} />
        </Switch>
      </>
    );
  }
}

export default App;
