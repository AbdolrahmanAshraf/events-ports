import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import testBg1 from '../assets/testi-1.jpg';
import testBg2 from '../assets/testi-2.jpg';
import testBg3 from '../assets/testi-3.jpg';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Alex Smith',
    role: 'Corporate Client',
    image: testBg1,
    quote: `Eventino transformed our product launch into an unforgettable experience. Their attention to detail and creative lighting made all the difference!`,
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Wedding Client',
    image: testBg2,
    quote: `Our wedding was magical thanks to Eventino. They handled everything seamlessly and the audio/visual setup was perfect.`,
    rating: 5,
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Exhibition Organizer',
    image: testBg3,
    quote: `The exhibition booth design attracted 40% more visitors than last year. Professional team with innovative ideas!`,
    rating: 4,
  },
];

const Testimonials = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);

  const nextSlide = () => {
    setDirection(1);
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-[#1D2A5F]">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our clients say about our services
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto h-96">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={activeSlide}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 },
              }}
              className="absolute inset-0"
            >
              <div className="text-center h-full flex flex-col items-center justify-center">
                <motion.div
                  className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-2 border-blue-500/50 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <img
                    src={testimonials[activeSlide].image}
                    alt={`Testimonial by ${testimonials[activeSlide].name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>

                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonials[activeSlide].rating
                          ? 'text-yellow-400'
                          : 'text-gray-600'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <motion.p
                  className="text-gray-300 text-lg mb-6 italic max-w-2xl px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {testimonials[activeSlide].quote}
                </motion.p>
                <motion.h4
                  className="font-bold text-xl text-white"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {testimonials[activeSlide].name}
                </motion.h4>
                <motion.p
                  className="text-blue-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {testimonials[activeSlide].role}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > activeSlide ? 1 : -1);
                  setActiveSlide(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-blue-500 scale-125' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
