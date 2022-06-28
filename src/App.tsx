import React from 'react';
// pages
import Home from './pages/Home';
import NotFoundPage from './pages/NotFound';
import Characters from './pages/Character';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Characters' element={<Characters />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
