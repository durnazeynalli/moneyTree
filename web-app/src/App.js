import React from 'react';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from "./views/Homepage";

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={ Homepage } />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
