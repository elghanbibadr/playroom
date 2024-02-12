import React from 'react'
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Pricing from './pages/Pricing/Pricing';
import FeaturesPage from './pages/features/FeaturesPage';
import ResourcesPage from './pages/ResourcesPage';
import AppLayout from './componenets/ui/AppLayout';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout/>} >
        <Route index  path="/" element={<Home/>} />
          
        <Route path="pricing" element={<Pricing/>} />
        <Route path="features" element={<FeaturesPage/>} />
        <Route path="resources" element={<ResourcesPage/>} />
        </Route>
       
      </Routes>

    </Router>
  )
}

export default App