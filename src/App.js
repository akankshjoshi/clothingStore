import React from 'react';
import './App.css';
//import Navbar from './navbar/navbar';
import LandingPage from './landingpage/landingpage';
import ProductSection from './productsection/productsection';
import Register from './register/register';
import Login from './login/login';
import Cart from './cart/cart';
import Checkout from './checkout/checkout';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path ='/' exact element={<LandingPage />}/>
        <Route path='productsection' exact element={<ProductSection />}/>
        <Route path='register' exact element={<Register />}/>
        <Route path='login' exact element={<Login />}/>
        <Route path='cart' exact element={<Cart />}/>
        <Route path='checkout' exact element={<Checkout />}/>
       
      </Routes>
    </div>
  );
}

export default App;
