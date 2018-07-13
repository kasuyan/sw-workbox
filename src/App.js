import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';

import Home from './components/pages/home';
import Page1 from './components/pages/page1';
import Page2 from './components/pages/page2';

import Header from './components/project/header';
import Nav from './components/project/nav';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
        </div>
      </Router>
    );
  }
}
