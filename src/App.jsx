import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Pricing from './pages/Pricing/Pricing';
import Features from './pages/features/Features';
import ResourcesPage from './pages/ResourcesPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/resources" element={<ResourcesPage/>} />
      </Routes>

    </Router>
  )
}

export default App