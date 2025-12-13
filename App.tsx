import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import MotionLeague from './pages/MotionLeague';
import VulgarBroadcasting from './pages/VulgarBroadcasting';
import Corporate from './pages/Corporate';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/motion" element={<MotionLeague />} />
          <Route path="/vulgar" element={<VulgarBroadcasting />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;