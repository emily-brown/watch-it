import React from 'react';
import Nav from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import SavedPage from './pages/Movies';
import SearchPage from './pages/Search';

function App() {
  return (
    <>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={SearchPage} />
          <Route path="/movies" component={SavedPage} />
        </div>
      </Router>
    </>
  );
}

export default App;
