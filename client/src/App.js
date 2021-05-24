
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import Create from './components/create';
import { Router } from "@reach/router";
import Main from './views/Main'
import SingleUser from './views/SingleUser'
import SingleProduct from './views/SingleProduct'
import Nav from './components/nav'

function App() {

  return (
    <div className="App">
      <Nav />
      <Router>
        <Main path="/" />
        <SingleUser path="/user/:_id" />
        <SingleProduct path="/product/:_id" />
      </Router>
    </div>
  );
}

export default App;
