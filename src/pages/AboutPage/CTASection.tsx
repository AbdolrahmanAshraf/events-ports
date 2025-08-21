import { motion } from 'framer-motion';

export const CTASection = () => (
  <motion.div
    className="text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
      <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
        Ready to Create Your Perfect Event?
      </span>
    </h2>
    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
      Contact us today to discuss your vision with our team of experts
    </p>
    <motion.button
      className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Get in Touch
    </motion.button>
  </motion.div>
);