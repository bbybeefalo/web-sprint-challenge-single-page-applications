import React from "react";
import { Route, Link } from 'react-router-dom';
import Form from './Form.js';
import Home from './Home.js';

const App = () => {


  return (
    <header>
      <div class="nav-bar">
      <h1>Bloomtech Eats</h1>
      <div class='nav-links'>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order</Link>
      </div>
      </div>
      <Route exact path='/' component={Home} />
      <Route path='/pizza' component={Form} />
    </header>
  );
};

export default App;
