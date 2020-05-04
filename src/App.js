import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Routes
import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Test from './Pages/Test';
import Post from './Pages/Post';
import User from './Pages/User';

// import { Alert } from './Components/Alert';
// <Alert alert={{text: 'Alert', type: 'success'}} />

function App() {
  return (
    <Router>
      <Navbar logo={logo} />
      <div className="container my-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/test" component={Test} />
          <Route path="/posts/:id" component={Post} />
          <Route path="/users/:id" component={User} />
          <Route render={() => <h1 className="text-center">404 Not Found</h1>} />
        </Switch>
      </div>
      <Footer logo={logo} />
    </Router>
  );
}

export default App;
