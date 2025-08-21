import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroBg from '../../assets/services/Mask group.png';  // <-- adjust path if needed

export const HeroSection = () => (
  <section className="relative pb-20 mb-20 overflow-hidden h-screen flex items-center">
    <div className="absolute inset-0 z-0">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-80"></div>
    </div>

    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-white rounded-full filter blur-[300px] opacity-50 translate-x-1/4 translate-y-1/4 z-10"></div>
    
    <div className="container mx-auto px-6 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white max-w-2xl"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
          Premium
          <br />
          <span className="font-bold">Event Services</span>
          <br />
          That Inspire
        </h1>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 text-white font-medium rounded-none mt-8"
        >
          <Link to="/contact">Get Started</Link>
        </motion.button>
      </motion.div>
    </div>
  </section>
);
