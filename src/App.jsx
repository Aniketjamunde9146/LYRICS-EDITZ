import React from 'react';
import './App.css';
import Home from './pages/Home';
import MyEdits from './pages/MyEdits';
import Pricing from './pages/Pricing';
import Footer from './pages/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Home />
      <MyEdits />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;