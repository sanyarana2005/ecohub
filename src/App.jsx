import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import VRForestTrail from './pages/VRForestTrail';
import GamifiedSorting from './pages/GamifiedSorting';
import EWasteHub from './pages/EWasteHub';
import CommunitySupport from './pages/CommunitySupport';
import BlogKnowledge from './pages/BlogKnowledge';

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/vr-forest-trail" element={<VRForestTrail />} />
        <Route path="/gamified-sorting" element={<GamifiedSorting />} />
        <Route path="/e-waste-hub" element={<EWasteHub />} />
        <Route path="/community-support" element={<CommunitySupport />} />
        <Route path="/blog-knowledge" element={<BlogKnowledge />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;