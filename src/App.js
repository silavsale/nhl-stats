import React from 'react';
import Nav from './Components/Nav';
import About from './Components/About';
import Teams from './Components/Teams';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/> 
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/teams' component={Teams}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
