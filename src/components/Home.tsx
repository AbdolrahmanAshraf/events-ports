// import { ParallaxProvider } from 'react-scroll-parallax';
// import Hero from '../components/Hero';
// import Services from '../components/Services';
// import Gallery from '../components/Gallery';
// import Portfolio from '../components/Portfolio';
// import Testimonials from '../components/Testimonials';
// import Stats from '../components/Stats';
// import Team from '../components/Team';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <ParallaxProvider>
//       <Hero />
//       <Services />
//       <Gallery />
//       <Portfolio />
//       <Testimonials />
//       <Stats />
//       <Team />
//       <Contact />
//       <Footer />
//     </ParallaxProvider>
//   );
// };

// export default Home;












// import { ParallaxProvider } from 'react-scroll-parallax';
// import Hero from '../components/Hero';
// import About from '../components/About';
// import Services from '../components/Services';
// import Gallery from '../components/Gallery';
// import Portfolio from '../components/Portfolio';
// import Testimonials from '../components/Testimonials';
// import Stats from '../components/Stats';
// import Team from '../components/Team';
// import Contact from '../components/Contact';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <ParallaxProvider>
//       <Hero />
//       <About />
//       <Services />
//       <Gallery />
//       <Portfolio />
//       <Testimonials />
//       <Stats />
//       <Team />
//       <Contact />
//       <Footer />
//     </ParallaxProvider>
//   );
// };

// export default Home;







import { lazy, Suspense } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
// import LoadingSpinner from '../components/LoadingSpinner';
// import GetInTouch from './GetInTouch';

// Lazy load components
const Hero = lazy(() => import('../components/Hero'));
const AboutPreview = lazy(() => import('../components/About'));
const ServicesPreview = lazy(() => import('../components/Services'));
const GalleryPreview = lazy(() => import('../components/Gallery'));
// const Testimonials = lazy(() => import('../components/Testimonials'));
// const ContactCTA = lazy(() => import('../components/Contact'));
const Footer = lazy(() => import('../components/Footer'));
const GetIntouch = lazy(() => import('../components/GetInTouch'));


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const Home = () => {
  return (
    <ParallaxProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Suspense >
          <Hero displayText={''} />
          <AboutPreview />
          <GalleryPreview />
          <ServicesPreview />
          {/* <Testimonials />
          <ContactCTA /> */}
          <GetIntouch />
          <Footer />
        </Suspense>
      </motion.div>
    </ParallaxProvider>
  );
};

export default Home;