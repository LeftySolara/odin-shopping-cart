import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Home from './components/home';
import Shop from './components/shop';
import Cart from './components/cart';
import './app.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/cart" render={() => <Cart items={cart} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
