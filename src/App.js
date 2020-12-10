import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'bootstrap';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Test from './pages/Test';
import Post from './pages/Post';
import User from './pages/User';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// import { Alert } from './components/Alert';
// <Alert alert={{ text: 'Alert', type: 'success' }} />

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
