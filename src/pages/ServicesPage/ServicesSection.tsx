import { motion } from 'framer-motion';
import servicesImg from '../../assets/3d-render-arab-businesspeople-man-woman-man-reviewing-documents-together-teamwork-collaboration-success-partnership 1.png'

export const ServicesSection = () => (
  <motion.div
    className="p-8 mb-20"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="flex flex-col lg:flex-row gap-12 items-center">
      
      {/* Text on the left */}
      <div className="lg:w-1/2 px-20  ">
        <motion.h2
          className="text-6xl md:text-7xl font-extrabold text-white mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text">
            Our Services
          </span>
        </motion.h2>

        <motion.p
          className="text-4xl md:text-5xl mb-6 leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-blue-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Our Expertise, Tailored to Your Vision
        </motion.p>

        <motion.p
          className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Explore the services that set Eventino apart — each designed to ensure your event is as seamless as it is spectacular.
        </motion.p>
      </div>

      {/* Image on the right */}
      <motion.div
        className="lg:w-1/2"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group overflow-hidden">
          <img
            src={servicesImg}
            alt="Event services"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </motion.div>
    </div>
  </motion.div>
);
