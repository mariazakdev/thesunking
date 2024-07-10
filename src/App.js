import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import HomePage from './Pages/HomePage/HomePage';
import './App.scss';

const App = () => {
  return (
    <div className='site'>
      <div className='site-header'>
        <Header />
      </div>
      <div className='site-content'>
        <HomePage />
      </div>
      <div className='site-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
