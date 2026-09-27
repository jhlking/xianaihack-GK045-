import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Combiner from './pages/Combiner.jsx';
import Community from './pages/Community.jsx';
import Workshop from './pages/Workshop.jsx';
import PhoneDemo from './pages/DemoPages.jsx';
import { CombDemo, WardDemo } from './pages/DemoPages.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Combiner />} />
      <Route path="/combine" element={<Combiner />} />
      <Route path="/combine/:slug" element={<Workshop />} />
      <Route path="/demos" element={<App />} />
      <Route path="/community" element={<Community />} />
      <Route path="/demo/phone" element={<PhoneDemo />} />
      <Route path="/demo/comb" element={<CombDemo />} />
      <Route path="/demo/ward" element={<WardDemo />} />
    </Routes>
  </HashRouter>
);
