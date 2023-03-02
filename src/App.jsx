import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Stories from './components/Stories';
import Home from './components/Home';
export default function App  (){
  return (
    <>
          <Header />
          <Home/>
          <Stories/>
    </>
  );
}



