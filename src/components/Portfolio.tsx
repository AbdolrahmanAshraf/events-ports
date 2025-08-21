import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import confetti from 'canvas-confetti';

interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

interface Filter {
  id: string;
  label: string;
}

// Sample portfolio images (replace with your actual event images)
const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'corporate',
    title: 'Tech Conference 2023',
    description: 'Full event production for 500+ attendees',
    image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2012&q=80'
  },
  {
    id: 2,
    category: 'wedding',
    title: 'Smith-Johnson Wedding',
    description: 'Luxury wedding decor and lighting',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 3,
    category: 'exhibition',
    title: 'Art Gallery Opening',
    description: 'Interactive lighting installation',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 4,
    category: 'corporate',
    title: 'Product Launch Event',
    description: '360° brand experience design',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 5,
    category: 'wedding',
    title: 'Beachfront Celebration',
    description: 'Ocean-view wedding design',
    image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  },
  {
    id: 6,
    category: 'exhibition',
    title: 'Trade Show Booth',
    description: 'Custom modular exhibition design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  }
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const filters: Filter[] = [
    { id: 'all', label: 'All Events' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'exhibition', label: 'Exhibitions' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
    confetti({
      particleCount: 30,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
            Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful events and get inspired for your next occasion
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden flex justify-center mb-8">
          <motion.button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="px-6 py-3 rounded-full bg-white shadow-md flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFilter />
            {filters.find(f => f.id === activeFilter)?.label}
          </motion.button>
        </div>

        {/* Mobile Filter Dropdown */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              className="lg:hidden bg-white rounded-2xl shadow-xl p-4 mb-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-2 gap-2">
                {filters.map(filter => (
                  <motion.button
                    key={filter.id}
                    onClick={() => {
                      setActiveFilter(filter.id);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                    whileHover={{ scale: 1.03 }}
                  >
                    {filter.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Filters */}
        <motion.div 
          className="hidden lg:flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex bg-white rounded-full shadow-md p-1">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full text-sm ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-600 text-white'
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {filteredItems.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <motion.div 
                  className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openModal(item)}
                >
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
                      <p className="text-white/90">{item.description}</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* Portfolio Modal */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="relative max-w-6xl w-full bg-white rounded-2xl overflow-hidden max-h-[90vh]"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors"
                >
                  <FiX size={20} />
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                  <div className="h-[50vh] lg:h-auto overflow-hidden">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 overflow-y-auto">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-100 to-blue-100 text-blue-800">
                        {selectedItem.category.charAt(0).toUpperCase() + selectedItem.category.slice(1)}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{selectedItem.title}</h3>
                    <p className="text-gray-700 mb-6">{selectedItem.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="font-semibold text-lg mb-3">Event Details</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>200+ attendees</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Full lighting and decor package</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>Custom branding integration</span>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#contact"
                        className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-400 to-blue-900 text-white font-semibold hover:shadow-lg transition-all"
                        onClick={closeModal}
                      >
                        Book Similar Event
                      </a>
                      <a
                        href="#"
                        className="px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition-all"
                      >
                        View More Photos
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;