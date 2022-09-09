import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Tradable from './components/Tradable';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Nav />
     <Slider />
     <Tradable />
     <Header />
     <Footer />
    </div>
  );
}

export default App;

