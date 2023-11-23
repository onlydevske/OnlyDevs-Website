import React, { useState } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Home from './pages/Home';
import OurTeam from './components/OurTeam';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Resources from './pages/Resources';
import Contributors from './pages/Contributors';
import Forum from './pages/Forum';
import AboutUs from './pages/AboutUs';
export default function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/resources"  element={<Resources/>} />
        <Route path="/contributors" element={<Contributors />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}



