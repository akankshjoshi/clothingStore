import React from 'react';
import './landingpage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Welcome to our NAJM Store</h1>
        <p>Shop the latest fashion trends!</p>
        <a href="productsection" className="btn">Shop Now</a>
      </header>
    </div>
  );
};

export default LandingPage;
