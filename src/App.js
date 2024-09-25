// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Tournaments from './pages/Tournaments';
import Registration from './pages/Registration';
import MultiStageRegistration from './components/MultiStageForm'; // Import the new multi-stage form
import Contact from './pages/Contact';
import EventDetail from './pages/events/EventDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/register" element={<MultiStageRegistration />} />
        <Route path="/multi-stage-register" element={<MultiStageRegistration />} /> {/* New Route */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/register/:eventId" component={<MultiStageRegistration />} />
        <Route path="/event/:eventId" component={<EventDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
