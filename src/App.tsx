import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Packages } from './components/Packages';
import { PackageDetails } from './components/PackageDetails';
import { Contact } from './components/Contact';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { LeaveReview } from './components/LeaveReview';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setUserInteracted } from './utils/sound';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Process />
      <LeaveReview />
      <Contact />
    </>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white cursor-none">
        <CustomCursor />
        <AnimatePresence mode="wait">
          {loading ? (
            <LoadingScreen key="loading" />
          ) : (
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/packages/:id" element={<PackageDetails />} />
              </Routes>
          
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;