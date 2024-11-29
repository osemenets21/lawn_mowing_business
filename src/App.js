import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MenuAppBar from './components/MenuAppBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Gallery from './pages/Gallery';



const App = () => (
  <div className="app">
    <Header />
    <MenuAppBar/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
  

    <Footer />
  </div>
);

export default App;