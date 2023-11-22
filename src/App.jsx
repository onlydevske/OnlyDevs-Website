import React, { useState } from 'react';
import Header from './components/Header';
import Stories from './components/Stories';
import Home from './pages/Home';
import OurTeam from './components/OurTeam';
export default function App  (){
  return (
    <>
          <Header />
          <Home/>
          <OurTeam/>
          <Stories/>
    </>
  );
}



