import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { DataProvider } from './components/Context';
import ProductDetails from './components/pages/ProductDetail';

function App() {
  return (
    <>
    <DataProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path="/product/:id" component={ProductDetails} exact />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
      </DataProvider>
    </>
  );
}

export default App;
