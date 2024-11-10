import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Service from './components/Service';
import About from './components/About';
import Gallery from './components/Gallery';
import Price from './components/Price';
import Review from './components/Review';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/signup';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />  {/* Always rendered on top */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/price" element={<Price />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />  {/* Always rendered at the bottom */}
    </div>
  );
}

export default App;
