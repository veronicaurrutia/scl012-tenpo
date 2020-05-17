import React from 'react';
import './App.css';
import Welcome from './components/Welcome.jsx';
import Registry from './components/Registry.jsx';
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
        </Switch>  
    </Router>


  );
}

export default App;
