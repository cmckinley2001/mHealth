import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './routes/Home'
import Tracking from './routes/Tracking'
import Provider from './routes/Provider'
import Contact from './routes/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/provider' element={<Provider />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
