import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import PhotoGallery from './pages/PhotoGallery';
import Order from './pages/Order';
import ContactMe from './pages/ContactMe';
import Videos from './pages/Videos';
import MusicReleases from './pages/MusicReleases';
import Anthology from './pages/Anthology';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<ContactMe />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/music" element={<MusicReleases />} />
            <Route path="/anthology" element={<Anthology />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;