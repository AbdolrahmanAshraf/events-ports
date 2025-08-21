// import { useState, useEffect } from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';

// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Testimonials from './components/Testimonials';
// import Stats from './components/Stats';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Gallery from './components/Gallery';

// const App = () => {
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     // Clear any hash from the URL on initial load
//     if (window.location.hash) {
//       window.history.replaceState(null, null, ' ');
//     }

//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <ParallaxProvider>
//       <div className="font-montserrat scroll-smooth">
//         <Navbar scrolled={scrolled} />
//         <Hero />
//         <About />
//         <Services />
//         <Gallery />
//         <Portfolio />
//         <Testimonials />
//         <Stats />
//         <Team />
//         <Contact />
//         <Footer />
//       </div>
//     </ParallaxProvider>
//   );
// };

// export default App;









// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';

// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutPage from './pages/AboutPage';
// import AboutPage from './components/Footer';

// const App = () => {
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <Router>
//       <ParallaxProvider>
//         <div className="font-montserrat">
//           <Navbar scrolled={scrolled} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             {/* Add other routes as needed */}
//           </Routes>
//         </div>
//       </ParallaxProvider>
//     </Router>
//   );
// };

// export default App;









// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';

// const App = () => {
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <Router>
//       <ParallaxProvider>
//         <div className="font-montserrat">
//           <Navbar scrolled={scrolled} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/about" element={<ServicesPage />} />
//           </Routes>
//         </div>
//       </ParallaxProvider>
//     </Router>
//   );
// };

// export default App;


















// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import Navbar from './components/Navbar';
// import Home from './components/Home';
// import AboutPage from './pages/AboutPage';
// import ServicesPage from './pages/ServicesPage';
// import GalleryPage from './pages/GalleryPage';
// import ContactPage from './pages/ContactPage';
// import { MdContactPage } from 'react-icons/md';
// const App = () => {
//   const [scrolled, setScrolled] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) {
//         setScrolled(isScrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <Router>
//       <ParallaxProvider>
//         <div className="font-montserrat">
//           <Navbar scrolled={scrolled} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutPage />} />
//             <Route path="/services" element={<ServicesPage />} /> {/* Fixed this line */}
//             <Route path="/gallery" element={<GalleryPage />} />
//             <Route path="/gallery" element={<ContactPage />} />
//           </Routes>
//         </div>
//       </ParallaxProvider>
//     </Router>
//   );
// };

// export default App;




















// import { lazy, Suspense, useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ParallaxProvider } from 'react-scroll-parallax';
// import LoadingSpinner from './components/LoadingSpinner';

// // Lazy load pages
// const Home = lazy(() => import('./components/Home'));
// const AboutPage = lazy(() => import('./pages/AboutPage'));
// const ServicesPage = lazy(() => import('./pages/ServicesPage'));
// const GalleryPage = lazy(() => import('./pages/GalleryPage'));
// const ContactPage = lazy(() => import('./pages/ContactPage'));
// const Navbar = lazy(() => import('./components/Navbar'));

// const App = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const isScrolled = window.scrollY > 50;
//       if (isScrolled !== scrolled) setScrolled(isScrolled);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrolled]);

//   return (
//     <Router>
//       <ParallaxProvider>
//         <div className="font-sans antialiased relative min-h-screen bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white overflow-hidden">
//         <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3701434/pexels-photo-3701434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-0 bg-fixed bg-cover"></div>
//           <Suspense fallback={<LoadingSpinner />}>
//             <Navbar scrolled={scrolled} />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<AboutPage />} />
//               <Route path="/services" element={<ServicesPage />} />
//               <Route path="/gallery" element={<GalleryPage />} />
//               <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//           </Suspense>
//         </div>
//       </ParallaxProvider>
//     </Router>
//   );
// };

// export default App;















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

// Fallback loading component
// const LoadingSpinner = () => (
//   <div className="fixed inset-0 flex items-center justify-center bg-blue-950 bg-opacity-80 z-50">
//     <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white"></div>
//   </div>
// );

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