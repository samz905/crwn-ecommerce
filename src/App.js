import React from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './Pages/homepage/homepage.component'
import './App.css';

const HatsPage = () => (
  <div>
    <h1>Hi</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
