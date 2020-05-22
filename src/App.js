import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage.js';
import JSPage from './JSPage.js';
import EOLPage from './EOLPage.js';

//TODO: Add in custom color pallet
// Home button in JS page and EOL page
// Find a way to not need to open the page in a new tab

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/eolpage" component={EOLPage} />
        <Route path="/jspage" component={JSPage} />
        <Route path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}
