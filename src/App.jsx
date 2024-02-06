import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Pricing from './pages/Pricing/Pricing';
import Resources from './pages/resources/Resources';
import Features from './pages/features/Features';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/resources" element={<Resources/>} />
      </Routes>

    </Router>
  )
}

export default App