import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import CultureImage from '../../assets/image 13.png'; // Adjust path as needed
import ConnectionImage from '../../assets/image 14.png';
import integrityImage from '../../assets/image 15.png';
import innovationImage from '../../assets/innovation_12116489 1.jpg';

export const testimonials = [
  {
    quote: "Trust and transparency at every step",
    label: "Integrity",
    image: integrityImage,
  },
  {
    quote: "Pioneering ideas and technologies",
    label: "Innovation",
    image: innovationImage,
  },
  {
    quote: "Honoring diversity and heritage",
    label: "Cultural Enrichment",
    image: CultureImage,
  },
  {
    quote: "Crafting shared moments that resonate",
    label: "Connection",
    image: ConnectionImage,
  }
];

export const TestimonialsSection = () => (
  <section className="py-20">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-[50px] font-bold mb-6 pb-6 text-white">
        <span className="bg-gradient-to-r from-blue-700 to-blue-100 text-transparent bg-clip-text">
          Our Core Values
        </span>
      </h2>
    
    </motion.div>

    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100
            }}
            className="relative group"
            whileHover={{ y: -5 }}
          >
            {/* Label with improved styling */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-500 text-white w-40 h-16 rounded-full flex items-center justify-center text-sm font-bold tracking-wide shadow-lg z-10">
              {testimonial.label}
            </div>
            
            {/* Card with better spacing and hover effects */}
            <div className="bg-white/15 backdrop-blur-lg p-8 pt-12 py-12 rounded-2xl border border-white/10 shadow-xl h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20">
              <p className="text-gray-200 text-center text-lg leading-relaxed font-medium">
                {testimonial.quote}
              </p>   <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
            <img
  src={testimonial.image ?? testimonial.image}
  alt={testimonial.label}
  className="w-20 h-20 object-contain"
/>
    </div>
            </div>
            <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2">
            <img
  src={testimonial.image ?? testimonial.image}
  alt={testimonial.label}
  className="w-20 h-20 object-contain"
/>
    </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);