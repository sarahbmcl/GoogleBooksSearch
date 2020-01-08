import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Search from "./pages/search";
import Saved from "./pages/saved";
import Footer from "./components/Footer";
import Navi from "./components/Header/Navi";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      
      <div className="body">
      <div className="bodyContent">
        <Navi />
        <Header />
        <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
        </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
