import React, { useState } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Home from './pages/Home';
import OurTeam from './components/OurTeam';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
export default function App() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element ={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}



