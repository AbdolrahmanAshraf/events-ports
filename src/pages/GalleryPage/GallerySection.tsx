  // import { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import img1 from '../../assets/11.png';
// import img2 from '../../assets/21.png';
// import img3 from '../../assets/31.png';
// import img4 from '../../assets/41.png';
// import img5 from '../../assets/51.png';
// import img6 from '../../assets/61.png';

// type GalleryCategory = 'all' | 'corporate' | 'exhibition' | 'luxury' | 'weddings';

// const tabVariants = {
//   hover: { scale: 1.05, backgroundColor: '#8BAEFF' },
//   active: { scale: 1.1, backgroundColor: '#2533DE' },
//   initial: { scale: 1 },
// };

// const dropdownVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// const imageHover = {
//   hover: { scale: 1.1, transition: { duration: 0.3 } },
//   initial: { scale: 1 },
// };

// const galleryFadeVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// export default function GallerySection() {
//   const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const galleryData: Record<GalleryCategory, { id: number; src: string; alt: string }[]> = {
//     all: [
//       { id: 1, src: img1, alt: 'Corporate Event' },
//       { id: 2, src: img2, alt: 'Exhibition Setup' },
//       { id: 3, src: img3, alt: 'Luxury Gathering' },
//       { id: 4, src: img4, alt: 'Wedding Ceremony' },
//       { id: 5, src: img5, alt: 'Product Launch' },
//       { id: 6, src: img6, alt: 'Conference' },
//     ],
//     corporate: [
//       { id: 1, src: img1, alt: 'Corporate Event' },
//       { id: 6, src: img6, alt: 'Conference' },
//     ],
//     exhibition: [
//       { id: 2, src: img2, alt: 'Exhibition Setup' },
//       { id: 5, src: img5, alt: 'Product Launch' },
//     ],
//     luxury: [{ id: 3, src: img3, alt: 'Luxury Gathering' }],
//     weddings: [{ id: 4, src: img4, alt: 'Wedding Ceremony' }],
//   };

//   const categories: GalleryCategory[] = ['all', 'corporate', 'exhibition', 'luxury', 'weddings'];

//   const handleTabClick = (tab: GalleryCategory) => {
//     setActiveTab(tab);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <section className="py-20 px-4 bg-[#1D2A5F] text-[#D7EEFF] relative z-10">
//       {/* slight width cap for balance */}
//       <div className="max-w-[100rem] mx-auto">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8BAEFF] to-[#2533DE] bg-clip-text text-transparent">
//             Our Gallery
//           </h2>
//           <p className="text-xl max-w-2xl mx-auto">
//             Explore our collection of memorable events and experiences
//           </p>
//         </div>

//         {/* Mobile Dropdown */}
//         <div className="md:hidden mb-8 relative z-20">
//           <button
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//             className="w-full bg-[#8325FD] text-white font-bold py-3 px-4 rounded-full flex justify-between items-center cursor-pointer"
//           >
//             {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//             <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//           </button>
//           <AnimatePresence>
//             {isDropdownOpen && (
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={dropdownVariants}
//                 className="absolute mt-2 w-full bg-[#8325FD] rounded-lg shadow-lg z-30"
//               >
//                 {categories.map((tab) => (
//                   <motion.button
//                     key={tab}
//                     onClick={() => handleTabClick(tab)}
//                     className={`w-full text-left px-4 py-2 text-white cursor-pointer ${
//                       activeTab === tab ? 'bg-[#8BAEFF]' : 'hover:bg-[#8BAEFF]'
//                     }`}
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     transition={{ type: 'spring', stiffness: 300 }}
//                   >
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </motion.button>
//                 ))}
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* Desktop Tabs */}
//         <div className="hidden md:flex justify-center mb-12 z-20">
//           <div className="inline-flex bg-[#6792F9] p-1 rounded-full w-full">
//             {/* force tabs to use the full width grid uses */}
//             {categories.map((tab) => (
//               <motion.button
//                 key={tab}
//                 onClick={() => handleTabClick(tab)}
//                 className="flex-1 min-w-0 px-6 py-2 rounded-full font-bold text-white text-center"
//                 variants={tabVariants}
//                 initial="initial"
//                 animate={activeTab === tab ? 'active' : 'initial'}
//                 whileHover="hover"
//                 transition={{ type: 'spring', stiffness: 300 }}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* Gallery Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={galleryFadeVariants}
//             transition={{ duration: 0.5 }}
//           >
//             {galleryData[activeTab].map((img) => (
//               <motion.div
//                 key={img.id}
//                 className="group overflow-hidden rounded-xl shadow-lg relative cursor-pointer"
//                 whileHover="hover"
//                 initial="initial"
//                 variants={imageHover}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => console.log('Image clicked:', img.alt)}
//               >
//                 <img
//                   src={img.src}
//                   alt={img.alt}
//                   className="w-full h-80 object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <h3 className="text-white text-xl font-bold">
//                     {img.alt}
//                   </h3>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }














// import { useState, useEffect } from 'react';
// import { FaChevronDown, FaTimes } from 'react-icons/fa';
// import { motion, AnimatePresence } from 'framer-motion';
// import axios from 'axios';

// // Types
// type GalleryCategory = 'all' | 'corporate' | 'exhibition' | 'luxury' | 'weddings';

// interface GalleryImage {
//   id: number;
//   name: string;
//   url: string;
//   alternativeText?: string;
//   category?: GalleryCategory;
// }

// // Strapi API response types
// interface StrapiGalleryImage {
//   id: number;
//   name: string;
//   url: string;
//   alternativeText?: string;
//   category?: GalleryCategory;
// }

// interface StrapiGalleryResponse {
//   data: {
//     gallery: StrapiGalleryImage[];
//   }[];
// }

// // Animation variants
// const tabVariants = {
//   hover: { backgroundColor: '#8BAEFF' },
//   active: { backgroundColor: '#8BAEFF' },
//   initial: { backgroundColor: 'transparent' },
// };

// const dropdownVariants = {
//   hidden: { opacity: 0, y: -10 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// const imageHover = {
//   hover: { scale: 1.05, transition: { duration: 0.3 } },
//   initial: { scale: 1 },
// };

// const galleryFadeVariants = {
//   hidden: { opacity: 0, y: 10 },
//   visible: { opacity: 1, y: 0 },
//   exit: { opacity: 0, y: -10 },
// };

// function GallerySection() {
//   const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [galleryData, setGalleryData] = useState<Record<GalleryCategory, GalleryImage[]>>({
//     all: [],
//     corporate: [],
//     exhibition: [],
//     luxury: [],
//     weddings: [],
//   });
//   const [isLoading, setIsLoading] = useState(true);
//   const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

//   const categories: GalleryCategory[] = ['all', 'corporate', 'exhibition', 'luxury', 'weddings'];

//   useEffect(() => {
//     const fetchGalleryData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get<StrapiGalleryResponse>(
//           'http://localhost:1337/api/events?filters[slug][$eq]=mult-gallery&populate=gallery'
//         );

//         const strapiData = response.data.data.flatMap((entry) => entry.gallery || []);

//         const formattedImages: GalleryImage[] = strapiData.map((img) => ({
//           id: img.id,
//           name: img.name,
//           url: `http://localhost:1337${img.url}`,
//           alternativeText: img.alternativeText,
//           category: img.category || categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
//         }));

//         const organizedData: Record<GalleryCategory, GalleryImage[]> = {
//           all: formattedImages,
//           corporate: formattedImages.filter((img) => img.category === 'corporate'),
//           exhibition: formattedImages.filter((img) => img.category === 'exhibition'),
//           luxury: formattedImages.filter((img) => img.category === 'luxury'),
//           weddings: formattedImages.filter((img) => img.category === 'weddings'),
//         };

//         setGalleryData(organizedData);
//       } catch (error) {
//         console.error('Error fetching gallery data:', error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchGalleryData();
//   }, []);

//   const handleTabClick = (tab: GalleryCategory) => {
//     setActiveTab(tab);
//     setIsDropdownOpen(false);
//   };

//   if (isLoading) {
//     return (
//       <section className="py-20 px-4 bg-[#1D2A5F] text-[#D7EEFF] relative z-10">
//         <div className="max-w-[100rem] mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8BAEFF] to-[#2533DE] bg-clip-text text-transparent">
//               Our Gallery
//             </h2>
//             <p className="text-xl max-w-2xl mx-auto">
//               Explore our collection of memorable events and experiences
//             </p>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {[...Array(8)].map((_, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-700 rounded-xl h-80 relative overflow-hidden animate-pulse"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-600/70 to-transparent"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="py-20 px-4 bg-[#1D2A5F] text-[#D7EEFF] relative z-10">
//       <div className="max-w-[100rem] mx-auto relative"> {/* Added relative positioning */}
//         {/* Header */}
//         <div className="text-center ">
//           <h2 className="text-[50px] font-bold mb-1 bg-[#D7EEFF] font-dancing bg-clip-text text-transparent">
//             Categories
//           </h2>
//           <p 
//   className="text-[40px] font-bold max-w-2xl mx-auto bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent font-playfair"
// >
//   Explore Our Signature <br /> 
//   Experiences
// </p>
//         </div>
//         {/* Tabs Wrapper */}
//         <div className="max-w-full mx-auto mb-12 z-20">
//           {/* Desktop Tabs */}
//           <div className="hidden md:flex justify-center">
//             <div className="flex bg-[#405B9A] p-2 rounded-full gap-2 w-full max-w-4xl"> {/* Adjusted width here */}
//               {categories.map((tab) => (
//                 <motion.button
//                   key={tab}
//                   onClick={() => handleTabClick(tab)}
//                   className={`flex-1 min-w-0 px-6 py-2 rounded-full font-bold text-center transition-all duration-300 ease-in-out relative z-10
//                     ${
//                       activeTab === tab
//                         ? 'text-white bg-gradient-to-b from-[#575CE9] to-[#6792F9]'
//                         : 'text-white'
//                     }`}
//                   variants={tabVariants}
//                   initial="initial"
//                   animate={activeTab === tab ? 'active' : 'initial'}
//                   whileHover="hover"
//                 >
//                   <span className="relative z-20">
//                     {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                   </span>
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Mobile Dropdown */}
//           <div className="md:hidden relative">
//             <button
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="w-full bg-[#8325FD] text-white font-bold py-3 px-4 rounded-full flex justify-between items-center cursor-pointer"
//             >
//               {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
//               <FaChevronDown className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
//             </button>
//             <AnimatePresence>
//               {isDropdownOpen && (
//                 <motion.div
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={dropdownVariants}
//                   className="absolute mt-2 w-full bg-[#8325FD] rounded-lg shadow-lg z-30"
//                 >
//                   {categories.map((tab) => (
//                     <motion.button
//                       key={tab}
//                       onClick={() => handleTabClick(tab)}
//                       className={`w-full text-left px-4 py-2 text-white cursor-pointer transition-colors ${
//                         activeTab === tab
//                           ? 'bg-[#8BAEFF] text-black font-bold'
//                           : 'hover:bg-[#8BAEFF] hover:text-black'
//                       }`}
//                       whileHover={{ scale: 1.03 }}
//                       whileTap={{ scale: 0.95 }}
//                       transition={{ type: 'spring', stiffness: 300 }}
//                     >
//                       {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                     </motion.button>
//                   ))}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

// {/* Glassy Background Div */}
// <div className="absolute inset-x-0 top-[23%] -bottom-10 p-12 backdrop-blur-2xl bg-white/10 rounded-[5rem] z-0"></div>

//         {/* Gallery Grid */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeTab}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 p-6"
//             initial="hidden"
//             animate="visible"
//             exit="exit"
//             variants={galleryFadeVariants}
//             transition={{ duration: 0.5 }}
//           >
//             {galleryData[activeTab].map((img) => (
//               <motion.div
//                 key={img.id}
//                 className="group overflow-hidden rounded-xl shadow-lg relative cursor-pointer"
//                 whileHover="hover"
//                 initial="initial"
//                 variants={imageHover}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => setLightboxImage(img)}
//               >
//                 <img
//                   src={img.url}
//                   alt={img.alternativeText || img.name}
//                   className="w-full h-80 object-cover"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                   <h3 className="text-white text-xl font-bold">{img.alternativeText || img.name}</h3>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </AnimatePresence>
//       </div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {lightboxImage && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div className="relative max-w-3xl w-full">
//               <button
//                 className="absolute top-2 right-2 text-white text-2xl"
//                 onClick={() => setLightboxImage(null)}
//               >
//                 <FaTimes />
//               </button>
//               <img
//                 src={lightboxImage.url}
//                 alt={lightboxImage.alternativeText || lightboxImage.name}
//                 className="w-full h-auto rounded-xl"
//               />
//               <p className="text-white text-center mt-4 font-bold">
//                 {lightboxImage.alternativeText || lightboxImage.name}
//               </p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

// export default GallerySection;












import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import { GalleryTabs } from './GalleryTabs';

// Types
type GalleryCategory = 'all' | 'corporate' | 'exhibition' | 'luxury' | 'weddings';

interface GalleryImage {
  id: number;
  name: string;
  url: string;
  alternativeText?: string;
  category?: GalleryCategory;
}

// Strapi API response types
interface StrapiGalleryImage {
  id: number;
  name: string;
  url: string;
  alternativeText?: string;
  category?: GalleryCategory;
}

interface StrapiGalleryResponse {
  data: {
    gallery: StrapiGalleryImage[];
  }[];
}

// Animation variants
const imageHover = {
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  initial: { scale: 1 },
};

const galleryFadeVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

function GallerySection() {
  const [activeTab, setActiveTab] = useState<GalleryCategory>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [galleryData, setGalleryData] = useState<Record<GalleryCategory, GalleryImage[]>>({
    all: [],
    corporate: [],
    exhibition: [],
    luxury: [],
    weddings: [],
  });
  const [isLoading, setIsLoading] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const categories: GalleryCategory[] = ['all', 'corporate', 'exhibition', 'luxury', 'weddings'];

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<StrapiGalleryResponse>(
          'http://localhost:1337/api/events?filters[slug][$eq]=mult-gallery&populate=gallery'
        );

        const strapiData = response.data.data.flatMap((entry) => entry.gallery || []);

        const formattedImages: GalleryImage[] = strapiData.map((img) => ({
          id: img.id,
          name: img.name,
          url: `http://localhost:1337${img.url}`,
          alternativeText: img.alternativeText,
          category: img.category || categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
        }));

        const organizedData: Record<GalleryCategory, GalleryImage[]> = {
          all: formattedImages,
          corporate: formattedImages.filter((img) => img.category === 'corporate'),
          exhibition: formattedImages.filter((img) => img.category === 'exhibition'),
          luxury: formattedImages.filter((img) => img.category === 'luxury'),
          weddings: formattedImages.filter((img) => img.category === 'weddings'),
        };

        setGalleryData(organizedData);
      } catch (error) {
        console.error('Error fetching gallery data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const handleTabClick = (tab: GalleryCategory) => {
    setActiveTab(tab);
    setIsDropdownOpen(false);
  };

  if (isLoading) {
    return (
      <section className="py-20 px-4 bg-[#1D2A5F] text-[#D7EEFF] relative z-10">
        <div className="max-w-[100rem] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#8BAEFF] to-[#2533DE] bg-clip-text text-transparent">
              Our Gallery
            </h2>
            <p className="text-xl max-w-2xl mx-auto">
              Explore our collection of memorable events and experiences
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-700 rounded-xl h-80 relative overflow-hidden animate-pulse"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-600/70 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 text-[#D7EEFF] relative z-10">
      <div className="max-w-[100rem] mx-auto relative z-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-[50px] font-bold mb-1 bg-[#D7EEFF] font-dancing bg-clip-text text-transparent">
            Categories
          </h2>
          <p
            className="text-[40px] font-bold max-w-2xl mx-auto bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent font-playfair"
          >
            Explore Our Signature <br />
            Experiences
          </p>
        </div>

        {/* GalleryTabs Component */}
        <GalleryTabs
          activeTab={activeTab}
          onTabClick={handleTabClick}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />

        {/* Glassy Background Div */}
        <div className="absolute inset-x-0 top-[23%] mt-12 -bottom-10 p-12 backdrop-blur-2xl bg-white/10 rounded-[5rem] z-5"></div>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={galleryFadeVariants}
            transition={{ duration: 0.5 }}
          >
            {galleryData[activeTab].map((img) => (
              <motion.div
                key={img.id}
                className="group overflow-hidden rounded-xl shadow-lg relative cursor-pointer"
                whileHover="hover"
                initial="initial"
                variants={imageHover}
                transition={{ duration: 0.3 }}
                onClick={() => setLightboxImage(img)}
              >
                <img
                  src={img.url}
                  alt={img.alternativeText || img.name}
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{img.alternativeText || img.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full">
              <button
                className="absolute top-2 right-2 text-white text-2xl"
                onClick={() => setLightboxImage(null)}
              >
                <FaTimes />
              </button>
              <img
                src={lightboxImage.url}
                alt={lightboxImage.alternativeText || lightboxImage.name}
                className="w-full h-auto rounded-xl"
              />
              <p className="text-white text-center mt-4 font-bold">
                {lightboxImage.alternativeText || lightboxImage.name}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default GallerySection;