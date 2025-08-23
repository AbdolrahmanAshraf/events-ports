


import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';

// Component for scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}


// Lazy load components
const Home = lazy(() => import('./components/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage/ServicesPage'));
const GalleryPage = lazy(() => import('./pages/GalleryPage/GalleryPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Navbar = lazy(() => import('./components/Navbar'));

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <Router>
      <ParallaxProvider>
        <ScrollToTop />
        <div className="font-sans antialiased relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
          <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-0 bg-fixed bg-cover"></div>
          <Suspense >
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
          </Suspense>
        </div>
      </ParallaxProvider>
    </Router>
  );
};

export default App;