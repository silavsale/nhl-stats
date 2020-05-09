import React from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav/> 
        <Switch>
          <Route path='/about' component={About}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
