import { FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Types
type GalleryCategory = 'all' | 'corporate' | 'exhibition' | 'luxury' | 'weddings';

// Animation variants
const tabVariants = {
  hover: { backgroundColor: '#8BAEFF' },
  active: { backgroundColor: '#8BAEFF' },
  initial: { backgroundColor: 'transparent' },
};

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

interface GalleryTabsProps {
  activeTab: GalleryCategory;
  onTabClick: (tab: GalleryCategory) => void;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (isOpen: boolean) => void;
}

const categories: GalleryCategory[] = ['all', 'corporate', 'exhibition', 'luxury', 'weddings'];

export function GalleryTabs({ activeTab, onTabClick, isDropdownOpen, setIsDropdownOpen }: GalleryTabsProps) {
  return (
    <div className="max-w-full mx-auto mb-12 mt-4 z-20">
      {/* Desktop Tabs */}
      <div className="hidden md:flex justify-center">
        <div className="flex bg-[#405B9A] p-2 rounded-full gap-2 w-full max-w-4xl">
          {categories.map((tab) => (
            <motion.button
              key={tab}
              onClick={() => onTabClick(tab)}
              className={`flex-1 min-w-0 px-6 py-2 rounded-full font-bold text-center transition-all duration-300 ease-in-out relative z-10 ${
                activeTab === tab
                  ? 'text-white bg-gradient-to-b from-[#575CE9] to-[#6792F9]'
                  : 'text-white'
              }`}
              variants={tabVariants}
              initial="initial"
              animate={activeTab === tab ? 'active' : 'initial'}
              whileHover="hover"
            >
              <span className="relative z-20">
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-[#8325FD] text-white font-bold py-3 px-4 rounded-full flex justify-between items-center cursor-pointer"
        >
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
          <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
              className="absolute mt-2 w-full bg-[#8325FD] rounded-lg shadow-lg z-30"
            >
              {categories.map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => onTabClick(tab)}
                  className={`w-full text-left px-4 py-2 text-white cursor-pointer transition-colors ${
                    activeTab === tab
                      ? 'bg-[#8BAEFF] text-black font-bold'
                      : 'hover:bg-[#8BAEFF] hover:text-black'
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}