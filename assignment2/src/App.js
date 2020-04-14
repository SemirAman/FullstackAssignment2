import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Login from './components/login/login';
import Home from './components/home/homepage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" Component={Login}><Login/></Route>
          <Route exact path="/home" Component={Home}><Home/></Route>          
        </div>
      </Router>
    );
  }
}

export default App;
