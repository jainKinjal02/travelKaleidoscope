import React from 'react';
import TravelKaleidoscope from './TravelKaleidoscope';
import './App.css';

const App = () => {
  const images = [
    '/image1.jpg',
    '/image2.jpg',
    '/image3.jpg',
    '/image4.jpg',
    '/image5.jpg',
    '/image6.jpg',
    '/image7.jpg',
  ];

  return (
    <div className="App">
      <h1>Travel Kaleidoscope</h1>
      <TravelKaleidoscope images={images} />
    </div>
  );
};

export default App;