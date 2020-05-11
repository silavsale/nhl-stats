import React from "react";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Teams from "./Components/Teams";
import Roster from "./Components/Roster";
import Player from "./Components/Player/Player";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/teams" component={Teams} />
          <Route path="/roster/:id" component={Roster} />
          <Route path="/player/:id" component={Player} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
