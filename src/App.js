import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Navbar from "./Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/char/:char_id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
