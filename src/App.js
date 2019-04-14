import React, { Component } from 'react';
import { Router, Link } from "@reach/router"
import Home from'./router/home';
import Todos from './router/todo.jsx';
import './App.css';
import './css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css'
 export default class App extends Component {
  
    
  render() {

    
    return (
    <Router>
    <Home path="/" />
    <Todos path="/todos" />
  </Router>
     
    )}
}


