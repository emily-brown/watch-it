import React from 'react';
import Nav from "./components/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Login, Register } from "./components/auth/index";
import Home from './Home';

import './App.css';

import SavedPage from './pages/Movies';
import SearchPage from './pages/Search';

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  getMeIn = () =>{
    this.setState({loggedIn: true})
  } 
  render() {
  return (
    <>
      <Router>
        {!this.state.loggedIn ? <div><Home getMeIn={this.getMeIn}/></div>:
        <div>
          <Nav />
          <Route exact path="/" component={SearchPage} />
          <Route path="/movies" component={SavedPage} />
        </div>
        }
      </Router>
    </>
  );
  }
}

export default App;
