import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingSpinner from "./componenets/ui/LoadingSpinner";
// Lazy loading components
const Pricing = React.lazy(() => import("./pages/Pricing/Pricing"));
const ResourcesPage = React.lazy(() => import("./pages/Resscources/ResourcesPage"));
const AppLayout = React.lazy(() => import("./componenets/ui/AppLayout"));
const Home = React.lazy(() => import("./pages/Home/HomePage"));
const FeaturesPage = React.lazy(() => import("./pages/features/FeaturesPage"));

const App = () => {
  return (
    <Router>
      <Suspense  fallback={<LoadingSpinner/>}>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
            <Route index path="/" element={<Home/>} />
            <Route path="pricing" element={<Pricing/>} />
            <Route path="features" element={<FeaturesPage/>} />
            <Route path="resources" element={<ResourcesPage/>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
