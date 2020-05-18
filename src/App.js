import React from 'react';
import './App.css';
import Welcome from './components/Welcome.jsx';
import Data from './components/Data';
import Registry from './components/Registry.jsx';
import Verification from './components/Verification.jsx';
import Home from './components/Home.jsx';
import Id from './components/Id.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router >   
        <Switch>
          <Route path="/" exact> 
            <Welcome />          
          </Route>
          <Route path="/registrarse">
            <Registry />
          </Route>
          <Route path="/verificacion">
            <Verification/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/id">
            <Id/>
          </Route>
        </Switch>  
    </Router>

  );
}

export default App;