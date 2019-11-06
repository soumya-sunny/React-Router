import {BrowserRouter, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Route exact path="/" component={Home}/>
        <Route  path="/about" component={About}/>
        <Route path="/contact" component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
