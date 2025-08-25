// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import Masonry from 'react-masonry-css';

// // Define types for the gallery item
// interface GalleryItem {
//   id: number;
//   category: 'corporate' | 'wedding' | 'exhibition';
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   date: string;
// }

// // Sample event gallery data (replace with your actual event images)
// const galleryItems: GalleryItem[] = [
//   {
//     id: 1,
//     category: 'corporate',
//     title: 'Tech Summit 2023',
//     description: 'Full event production for 500+ attendees with custom stage design',
//     image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=2012&q=80',
//     tags: ['lighting', 'stage-design', 'branding'],
//     date: '2023-05-15'
//   },
//   {
//     id: 2,
//     category: 'wedding',
//     title: 'Beachfront Wedding',
//     description: 'Luxury beach wedding with custom floral arrangements',
//     image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     tags: ['decor', 'floral', 'luxury'],
//     date: '2023-06-22'
//   },
//   {
//     id: 3,
//     category: 'exhibition',
//     title: 'Art Gallery Opening',
//     description: 'Interactive light installation for modern art exhibition',
//     image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     tags: ['installation', 'lighting', 'interactive'],
//     date: '2023-04-10'
//   },
//   {
//     id: 4,
//     category: 'corporate',
//     title: 'Product Launch',
//     description: 'Immersive 360° brand experience for new product reveal',
//     image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     tags: ['360-experience', 'digital', 'brand-activation'],
//     date: '2023-07-05'
//   },
//   {
//     id: 5,
//     category: 'wedding',
//     title: 'Garden Celebration',
//     description: 'Elegant garden wedding with vintage decor elements',
//     image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     tags: ['outdoor', 'floral', 'tablescapes'],
//     date: '2023-08-12'
//   },
//   {
//     id: 6,
//     category: 'exhibition',
//     title: 'Trade Show Booth',
//     description: 'Modular exhibition design with interactive elements',
//     image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//     tags: ['modular', 'branding', 'interactive'],
//     date: '2023-03-18'
//   }
// ];

// // Define type for masonry breakpoints
// interface BreakpointColumnsObj {
//   default: number;
//   [key: number]: number;
// }

// const GalleryPage = () => {
//   const [activeFilter, setActiveFilter] = useState<'all' | GalleryItem['category']>('all');
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [activeTag, setActiveTag] = useState<string>('all');
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Extract all unique tags from gallery items
//   const allTags = ['all', ...new Set(galleryItems.flatMap(item => item.tags))];

//   // Filter items based on active filters
//   const filteredItems = galleryItems.filter(item => {
//     const categoryMatch = activeFilter === 'all' || item.category === activeFilter;
//     const tagMatch = activeTag === 'all' || item.tags.includes(activeTag);
//     return categoryMatch && tagMatch;
//   });

//   // Simulate loading (remove in production)
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // Lightbox controls
//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   const navigateImage = (direction: 'prev' | 'next') => {
//     setSelectedImage(prev => {
//       if (prev === null) return null;
//       if (direction === 'prev') {
//         return prev === 0 ? filteredItems.length - 1 : prev - 1;
//       } else {
//         return prev === filteredItems.length - 1 ? 0 : prev + 1;
//       }
//     });
//   };

//   // Keyboard navigation for lightbox
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (selectedImage !== null) {
//         if (e.key === 'ArrowLeft') navigateImage('prev');
//         if (e.key === 'ArrowRight') navigateImage('next');
//         if (e.key === 'Escape') closeLightbox();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedImage]);

//   // Masonry breakpoints
//   const breakpointColumnsObj: BreakpointColumnsObj = {
//     default: 3,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   return (
//     <section id="gallery" className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-6 lg:px-16">
//         {/* Header */}
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//             Event Gallery
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Explore our stunning event transformations
//           </p>
//         </motion.div>

//         {/* Filter Controls */}
//         <div className="flex flex-col gap-4 mb-12">
//           {/* Category Filters */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {['all', 'corporate', 'wedding', 'exhibition'].map(category => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveFilter(category as 'all' | GalleryItem['category'])}
//                 className={`px-4 py-2 rounded-full text-sm capitalize ${
//                   activeFilter === category
//                     ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white shadow-md'
//                     : 'bg-white text-gray-800 shadow-sm hover:shadow-md'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 aria-current={activeFilter === category}
//               >
//                 {category === 'all' ? 'All Events' : category}
//               </motion.button>
//             ))}
//           </div>

//           {/* Tag Filters */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {allTags.map(tag => (
//               <motion.button
//                 key={tag}
//                 onClick={() => setActiveTag(tag)}
//                 className={`px-3 py-1 rounded-full text-xs ${
//                   activeTag === tag
//                     ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white'
//                     : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                 }`}
//                 whileHover={{ scale: 1.05 }}
//                 aria-current={activeTag === tag}
//               >
//                 {tag === 'all' ? 'All Tags' : tag}
//               </motion.button>
//             ))}
//           </div>
//         </div>

//         {/* Loading State */}
//         {isLoading && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[...Array(6)].map((_, index) => (
//               <div key={index} className="bg-gray-100 rounded-xl h-64 animate-pulse"></div>
//             ))}
//           </div>
//         )}

//         {/* Gallery Grid */}
//         {!isLoading && (
//           <Masonry
//             breakpointCols={breakpointColumnsObj}
//             className="flex -ml-4"
//             columnClassName="pl-4"
//           >
//             {filteredItems.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 className="mb-6 relative group"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <motion.div 
//                   className="overflow-hidden rounded-xl shadow-lg cursor-pointer relative"
//                   whileHover={{ scale: 1.02 }}
//                   onClick={() => openLightbox(index)}
//                   aria-label={`View ${item.title} event`}
//                 >
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     loading="lazy"
//                     className="w-full h-auto object-cover"
//                     initial={{ scale: 1 }}
//                     whileHover={{ scale: 1.1 }}
//                     transition={{ duration: 0.5 }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                     <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
//                     <div className="flex flex-wrap gap-2 mb-2">
//                       {item.tags.map(tag => (
//                         <span key={tag} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="flex justify-center mt-4">
//                       <button
//                         aria-label="View details"
//                         className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                       >
//                         <FaSearchPlus />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             ))}
//           </Masonry>
//         )}

//         {/* Empty State */}
//         {!isLoading && filteredItems.length === 0 && (
//           <motion.div
//             className="text-center py-20"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
//             <p className="text-gray-500 mb-6">Try adjusting your filters</p>
//             <button
//               onClick={() => {
//                 setActiveFilter('all');
//                 setActiveTag('all');
//               }}
//               className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all"
//             >
//               Reset Filters
//             </button>
//           </motion.div>
//         )}

//         {/* Lightbox */}
//         <AnimatePresence>
//           {selectedImage !== null && (
//             <motion.div
//               className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={closeLightbox}
//               aria-modal="true"
//               role="dialog"
//             >
//               <motion.div
//                 className="relative max-w-6xl w-full max-h-[90vh]"
//                 initial={{ scale: 0.9, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 exit={{ scale: 0.9, opacity: 0 }}
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 {/* Navigation Arrows */}
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigateImage('prev');
//                   }}
//                   aria-label="Previous image"
//                   className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                 >
//                   <FaChevronLeft size={20} />
//                 </button>
//                 <button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigateImage('next');
//                   }}
//                   aria-label="Next image"
//                   className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                 >
//                   <FaChevronRight size={20} />
//                 </button>

//                 {/* Close Button */}
//                 <button
//                   onClick={closeLightbox}
//                   aria-label="Close preview"
//                   className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                 >
//                   <FaTimes size={20} />
//                 </button>

//                 {/* Lightbox Content */}
//                 <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
//                   {/* Image */}
//                   <div className="h-full overflow-hidden">
//                     <motion.img
//                       key={selectedImage}
//                       src={filteredItems[selectedImage].image}
//                       alt={filteredItems[selectedImage].title}
//                       className="w-full h-full object-contain"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </div>

//                   {/* Details */}
//                   <div className="bg-white p-6">
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-2xl font-bold">{filteredItems[selectedImage].title}</h3>
//                       <span className="text-sm text-gray-500">
//                         {new Date(filteredItems[selectedImage].date).toLocaleDateString('en-US', {
//                           year: 'numeric',
//                           month: 'long',
//                           day: 'numeric'
//                         })}
//                       </span>
//                     </div>
//                     <div className="flex flex-wrap gap-2 mb-4">
//                       {filteredItems[selectedImage].tags.map(tag => (
//                         <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <p className="text-gray-700">{filteredItems[selectedImage].description}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// };

// export default GalleryPage;















































// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaTrophy, FaStar } from 'react-icons/fa';
// import Masonry from 'react-masonry-css';

// // Import local images (adjust paths as needed)
// import corporate1 from '../assets/imgs/fashion-show.jpg';
// import corporate2 from '../assets/imgs/luxury-wedding.jpg';
// import wedding1 from '../assets/imgs/private-concert.jpg';
// import wedding2 from '../assets/imgs/product-launch.jpg';
// import exhibition1 from '../assets/imgs/fashion-show.jpg';
// import exhibition2 from '../assets/imgs/luxury-wedding.jpg';

// // Define types for the gallery item
// interface GalleryItem {
//   id: number;
//   category: 'corporate' | 'wedding' | 'exhibition';
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   date: string;
// }

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   quote: string;
//   rating: number;
//   image: string;
// }

// interface Achievement {
//   id: number;
//   title: string;
//   description: string;
//   year: string;
//   icon: JSX.Element;
// }

// // Gallery data with local images
// const galleryItems: GalleryItem[] = [
//   {
//     id: 1,
//     category: 'corporate',
//     title: 'Tech Summit 2023',
//     description: 'Full event production for 500+ attendees with custom stage design',
//     image: corporate1,
//     tags: ['lighting', 'stage-design', 'branding'],
//     date: '2023-05-15'
//   },
//   {
//     id: 2,
//     category: 'wedding',
//     title: 'Beachfront Wedding',
//     description: 'Luxury beach wedding with custom floral arrangements',
//     image: wedding1,
//     tags: ['decor', 'floral', 'luxury'],
//     date: '2023-06-22'
//   },
//   {
//     id: 3,
//     category: 'exhibition',
//     title: 'Art Gallery Opening',
//     description: 'Interactive light installation for modern art exhibition',
//     image: exhibition1,
//     tags: ['installation', 'lighting', 'interactive'],
//     date: '2023-04-10'
//   },
//   {
//     id: 4,
//     category: 'corporate',
//     title: 'Product Launch',
//     description: 'Immersive 360° brand experience for new product reveal',
//     image: corporate2,
//     tags: ['360-experience', 'digital', 'brand-activation'],
//     date: '2023-07-05'
//   },
//   {
//     id: 5,
//     category: 'wedding',
//     title: 'Garden Celebration',
//     description: 'Elegant garden wedding with vintage decor elements',
//     image: wedding2,
//     tags: ['outdoor', 'floral', 'tablescapes'],
//     date: '2023-08-12'
//   },
//   {
//     id: 6,
//     category: 'exhibition',
//     title: 'Trade Show Booth',
//     description: 'Modular exhibition design with interactive elements',
//     image: exhibition2,
//     tags: ['modular', 'branding', 'interactive'],
//     date: '2023-03-18'
//   }
// ];

// // Testimonials data
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Sarah Johnson',
//     role: 'Wedding Client',
//     quote: 'The team created the most magical day for us. Every detail was perfect and exceeded our expectations.',
//     rating: 5,
//     image: wedding1
//   },
//   {
//     id: 2,
//     name: 'Michael Chen',
//     role: 'Corporate Client',
//     quote: 'Our product launch was a huge success thanks to their innovative approach and flawless execution.',
//     rating: 5,
//     image: corporate1
//   },
//   {
//     id: 3,
//     name: 'Emma Rodriguez',
//     role: 'Art Gallery Director',
//     quote: 'The interactive installation they created became the centerpiece of our exhibition. Visitors loved it!',
//     rating: 4,
//     image: exhibition1
//   }
// ];

// // Achievements data
// const achievements: Achievement[] = [
//   {
//     id: 1,
//     title: 'Best Event Design 2023',
//     description: 'Awarded for innovative stage design at Tech Summit 2023',
//     year: '2023',
//     icon: <FaTrophy className="text-yellow-500 text-4xl" />
//   },
//   {
//     id: 2,
//     title: 'Top Wedding Planner',
//     description: 'Recognized by Bridal Magazine as top wedding planner in the region',
//     year: '2022',
//     icon: <FaStar className="text-yellow-500 text-4xl" />
//   },
//   {
//     id: 3,
//     title: 'Sustainability Award',
//     description: 'Honored for eco-friendly event practices and materials',
//     year: '2023',
//     icon: <FaTrophy className="text-yellow-500 text-4xl" />
//   }
// ];

// // Define type for masonry breakpoints
// interface BreakpointColumnsObj {
//   default: number;
//   [key: number]: number;
// }

// const GalleryPage = () => {
//   const [activeFilter, setActiveFilter] = useState<'all' | GalleryItem['category']>('all');
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [activeTag, setActiveTag] = useState<string>('all');
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Extract all unique tags from gallery items
//   const allTags = ['all', ...new Set(galleryItems.flatMap(item => item.tags))];

//   // Filter items based on active filters
//   const filteredItems = galleryItems.filter(item => {
//     const categoryMatch = activeFilter === 'all' || item.category === activeFilter;
//     const tagMatch = activeTag === 'all' || item.tags.includes(activeTag);
//     return categoryMatch && tagMatch;
//   });

//   // Simulate loading (remove in production)
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // Lightbox controls
//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   const navigateImage = (direction: 'prev' | 'next') => {
//     setSelectedImage(prev => {
//       if (prev === null) return null;
//       if (direction === 'prev') {
//         return prev === 0 ? filteredItems.length - 1 : prev - 1;
//       } else {
//         return prev === filteredItems.length - 1 ? 0 : prev + 1;
//       }
//     });
//   };

//   // Keyboard navigation for lightbox
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (selectedImage !== null) {
//         if (e.key === 'ArrowLeft') navigateImage('prev');
//         if (e.key === 'ArrowRight') navigateImage('next');
//         if (e.key === 'Escape') closeLightbox();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedImage]);

//   // Masonry breakpoints
//   const breakpointColumnsObj: BreakpointColumnsObj = {
//     default: 3,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50">
//       {/* Gallery Section */}
//       <section id="gallery" className="py-20">
//         <div className="container mx-auto px-6 lg:px-16">
//           {/* Header */}
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//               Event Gallery
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Explore our stunning event transformations
//             </p>
//           </motion.div>

//           {/* Filter Controls */}
//           <div className="flex flex-col gap-4 mb-12">
//             {/* Category Filters */}
//             <div className="flex flex-wrap justify-center gap-2">
//               {['all', 'corporate', 'wedding', 'exhibition'].map(category => (
//                 <motion.button
//                   key={category}
//                   onClick={() => setActiveFilter(category as 'all' | GalleryItem['category'])}
//                   className={`px-4 py-2 rounded-full text-sm capitalize ${
//                     activeFilter === category
//                       ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white shadow-md'
//                       : 'bg-white text-gray-800 shadow-sm hover:shadow-md'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   aria-current={activeFilter === category}
//                 >
//                   {category === 'all' ? 'All Events' : category}
//                 </motion.button>
//               ))}
//             </div>

//             {/* Tag Filters */}
//             <div className="flex flex-wrap justify-center gap-2">
//               {allTags.map(tag => (
//                 <motion.button
//                   key={tag}
//                   onClick={() => setActiveTag(tag)}
//                   className={`px-3 py-1 rounded-full text-xs ${
//                     activeTag === tag
//                       ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white'
//                       : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   aria-current={activeTag === tag}
//                 >
//                   {tag === 'all' ? 'All Tags' : tag}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {/* Loading State */}
//           {isLoading && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-gray-100 rounded-xl h-64 animate-pulse"></div>
//               ))}
//             </div>
//           )}

//           {/* Gallery Grid */}
//           {!isLoading && (
//             <Masonry
//               breakpointCols={breakpointColumnsObj}
//               className="flex -ml-4"
//               columnClassName="pl-4"
//             >
//               {filteredItems.map((item, index) => (
//                 <motion.div
//                   key={item.id}
//                   className="mb-6 relative group"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: "-50px" }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <motion.div 
//                     className="overflow-hidden rounded-xl shadow-lg cursor-pointer relative"
//                     whileHover={{ scale: 1.02 }}
//                     onClick={() => openLightbox(index)}
//                     aria-label={`View ${item.title} event`}
//                   >
//                     <motion.img
//                       src={item.image}
//                       alt={item.title}
//                       loading="lazy"
//                       className="w-full h-auto object-cover"
//                       initial={{ scale: 1 }}
//                       whileHover={{ scale: 1.1 }}
//                       transition={{ duration: 0.5 }}
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                       <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
//                       <div className="flex flex-wrap gap-2 mb-2">
//                         {item.tags.map(tag => (
//                           <span key={tag} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <div className="flex justify-center mt-4">
//                         <button
//                           aria-label="View details"
//                           className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                         >
//                           <FaSearchPlus />
//                         </button>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               ))}
//             </Masonry>
//           )}

//           {/* Empty State */}
//           {!isLoading && filteredItems.length === 0 && (
//             <motion.div
//               className="text-center py-20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <h3 className="text-2xl font-bold text-gray-700 mb-2">No events found</h3>
//               <p className="text-gray-500 mb-6">Try adjusting your filters</p>
//               <button
//                 onClick={() => {
//                   setActiveFilter('all');
//                   setActiveTag('all');
//                 }}
//                 className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all"
//               >
//                 Reset Filters
//               </button>
//             </motion.div>
//           )}

//           {/* Lightbox */}
//           <AnimatePresence>
//             {selectedImage !== null && (
//               <motion.div
//                 className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={closeLightbox}
//                 aria-modal="true"
//                 role="dialog"
//               >
//                 <motion.div
//                   className="relative max-w-6xl w-full max-h-[90vh]"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.9, opacity: 0 }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   {/* Navigation Arrows */}
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage('prev');
//                     }}
//                     aria-label="Previous image"
//                     className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage('next');
//                     }}
//                     aria-label="Next image"
//                     className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaChevronRight size={20} />
//                   </button>

//                   {/* Close Button */}
//                   <button
//                     onClick={closeLightbox}
//                     aria-label="Close preview"
//                     className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaTimes size={20} />
//                   </button>

//                   {/* Lightbox Content */}
//                   <div className="bg-white rounded-xl overflow-hidden h-full flex flex-col">
//                     {/* Image */}
//                     <div className="h-full overflow-hidden">
//                       <motion.img
//                         key={selectedImage}
//                         src={filteredItems[selectedImage].image}
//                         alt={filteredItems[selectedImage].title}
//                         className="w-full h-full object-contain"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>

//                     {/* Details */}
//                     <div className="bg-white p-6">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-2xl font-bold">{filteredItems[selectedImage].title}</h3>
//                         <span className="text-sm text-gray-500">
//                           {new Date(filteredItems[selectedImage].date).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric'
//                           })}
//                         </span>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {filteredItems[selectedImage].tags.map(tag => (
//                           <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <p className="text-gray-700">{filteredItems[selectedImage].description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6 lg:px-16">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//               Client Testimonials
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Hear what our clients say about our services
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial) => (
//               <motion.div
//                 key={testimonial.id}
//                 className="bg-white p-8 rounded-xl shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="flex items-center mb-4">
//                   <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
//                     <img 
//                       src={testimonial.image} 
//                       alt={testimonial.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h3 className="font-bold text-lg">{testimonial.name}</h3>
//                     <p className="text-gray-600 text-sm">{testimonial.role}</p>
//                   </div>
//                 </div>
//                 <div className="mb-4">
//                   <FaQuoteLeft className="text-gray-300 text-xl mb-2" />
//                   <p className="text-gray-700 italic">"{testimonial.quote}"</p>
//                 </div>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar 
//                       key={i}
//                       className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-lg`}
//                     />
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section id="achievements" className="py-20">
//         <div className="container mx-auto px-6 lg:px-16">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//               Our Achievements
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Recognitions and awards we're proud of
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {achievements.map((achievement) => (
//               <motion.div
//                 key={achievement.id}
//                 className="bg-white p-8 rounded-xl shadow-lg text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6 }}
//               >
//                 <div className="flex justify-center mb-4">
//                   {achievement.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
//                 <p className="text-gray-600 mb-2">{achievement.description}</p>
//                 <span className="text-blue-600 font-medium">{achievement.year}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default GalleryPage;






















// import { useState, useEffect, JSX } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaTrophy, FaAward, FaMedal, FaQuoteLeft } from 'react-icons/fa';
// import Masonry from 'react-masonry-css';

// // Import local images (adjust paths as needed)
// import corporate1 from '../assets/imgs/fashion-show.jpg';
// import corporate2 from '../assets/imgs/luxury-wedding.jpg';
// import wedding1 from '../assets/imgs/private-concert.jpg';
// import wedding2 from '../assets/imgs/product-launch.jpg';
// import exhibition1 from '../assets/imgs/fashion-show.jpg';
// import exhibition2 from '../assets/imgs/luxury-wedding.jpg';
// import testBg1 from '../assets/testi-1.jpg';
// import testBg2 from '../assets/testi-2.jpg';
// import testBg3 from '../assets/testi-3.jpg';
// import Footer from '../../components/Footer';

// // Define types
// interface GalleryItem {
//   id: number;
//   category: 'corporate' | 'wedding' | 'exhibition';
//   title: string;
//   description: string;
//   image: string;
//   tags: string[];
//   date: string;
// }

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
//   rating: number;
// }

// interface Achievement {
//   id: number;
//   title: string;
//   description: string;
//   year: string;
//   icon: JSX.Element;
// }

// // Gallery data
// const galleryItems: GalleryItem[] = [
//   {
//     id: 1,
//     category: 'corporate',
//     title: 'Tech Summit 2023',
//     description: 'Full event production for 500+ attendees with custom stage design',
//     image: corporate1,
//     tags: ['lighting', 'stage-design', 'branding'],
//     date: '2023-05-15'
//   },
//   {
//     id: 2,
//     category: 'wedding',
//     title: 'Beachfront Wedding',
//     description: 'Luxury beach wedding with custom floral arrangements',
//     image: wedding1,
//     tags: ['decor', 'floral', 'luxury'],
//     date: '2023-06-22'
//   },
//   {
//     id: 3,
//     category: 'exhibition',
//     title: 'Art Gallery Opening',
//     description: 'Interactive light installation for modern art exhibition',
//     image: exhibition1,
//     tags: ['installation', 'lighting', 'interactive'],
//     date: '2023-04-10'
//   },
//   {
//     id: 4,
//     category: 'corporate',
//     title: 'Product Launch',
//     description: 'Immersive 360° brand experience for new product reveal',
//     image: corporate2,
//     tags: ['360-experience', 'digital', 'brand-activation'],
//     date: '2023-07-05'
//   },
//   {
//     id: 5,
//     category: 'wedding',
//     title: 'Garden Celebration',
//     description: 'Elegant garden wedding with vintage decor elements',
//     image: wedding2,
//     tags: ['outdoor', 'floral', 'tablescapes'],
//     date: '2023-08-12'
//   },
//   {
//     id: 6,
//     category: 'exhibition',
//     title: 'Trade Show Booth',
//     description: 'Modular exhibition design with interactive elements',
//     image: exhibition2,
//     tags: ['modular', 'branding', 'interactive'],
//     date: '2023-03-18'
//   }
// ];

// // Testimonials data
// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'Alex Smith',
//     role: 'Corporate Client',
//     image: testBg1,
//     quote: `Eventino transformed our product launch into an unforgettable experience. Their attention to detail and creative lighting made all the difference!`,
//     rating: 5,
//   },
//   {
//     id: 2,
//     name: 'Sarah Johnson',
//     role: 'Wedding Client',
//     image: testBg2,
//     quote: `Our wedding was magical thanks to Eventino. They handled everything seamlessly and the audio/visual setup was perfect.`,
//     rating: 5,
//   },
//   {
//     id: 3,
//     name: 'Michael Chen',
//     role: 'Exhibition Organizer',
//     image: testBg3,
//     quote: `The exhibition booth design attracted 40% more visitors than last year. Professional team with innovative ideas!`,
//     rating: 4,
//   },
// ];

// // Achievements data
// const achievements: Achievement[] = [
//   {
//     id: 1,
//     title: 'Best Event Design 2023',
//     description: 'Awarded for innovative stage design at Tech Summit 2023',
//     year: '2023',
//     icon: <FaTrophy className="text-yellow-500 text-4xl" />
//   },
//   {
//     id: 2,
//     title: 'Top Wedding Planner',
//     description: 'Recognized by Bridal Magazine as top wedding planner in the region',
//     year: '2022',
//     icon: <FaAward className="text-blue-500 text-4xl" />
//   },
//   {
//     id: 3,
//     title: 'Sustainability Award',
//     description: 'Honored for eco-friendly event practices and materials',
//     year: '2023',
//     icon: <FaMedal className="text-green-500 text-4xl" />
//   }
// ];

// // Masonry breakpoints
// interface BreakpointColumnsObj {
//   default: number;
//   [key: number]: number;
// }

// const GalleryPage = () => {
//   // Gallery state
//   const [activeFilter, setActiveFilter] = useState<'all' | GalleryItem['category']>('all');
//   const [selectedImage, setSelectedImage] = useState<number | null>(null);
//   const [activeTag, setActiveTag] = useState<string>('all');
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   // Testimonials state
//   const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
//   const [direction, setDirection] = useState<number>(1);

//   // Extract all unique tags from gallery items
//   const allTags = ['all', ...new Set(galleryItems.flatMap(item => item.tags))];

//   // Filter gallery items
//   const filteredItems = galleryItems.filter(item => {
//     const categoryMatch = activeFilter === 'all' || item.category === activeFilter;
//     const tagMatch = activeTag === 'all' || item.tags.includes(activeTag);
//     return categoryMatch && tagMatch;
//   });

//   // Testimonial navigation
//   const nextTestimonial = () => {
//     setDirection(1);
//     setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
//   };

//   const prevTestimonial = () => {
//     setDirection(-1);
//     setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//   };

//   // Simulate loading
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);
//     return () => clearTimeout(timer);
//   }, []);

//   // Auto-rotate testimonials
//   useEffect(() => {
//     const interval = setInterval(nextTestimonial, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // Lightbox controls
//   const openLightbox = (index: number) => {
//     setSelectedImage(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   const navigateImage = (direction: 'prev' | 'next') => {
//     setSelectedImage(prev => {
//       if (prev === null) return null;
//       if (direction === 'prev') {
//         return prev === 0 ? filteredItems.length - 1 : prev - 1;
//       } else {
//         return prev === filteredItems.length - 1 ? 0 : prev + 1;
//       }
//     });
//   };

//   // Keyboard navigation for lightbox
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (selectedImage !== null) {
//         if (e.key === 'ArrowLeft') navigateImage('prev');
//         if (e.key === 'ArrowRight') navigateImage('next');
//         if (e.key === 'Escape') closeLightbox();
//       }
//     };
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [selectedImage]);

//   // Masonry breakpoints
//   const breakpointColumnsObj: BreakpointColumnsObj = {
//     default: 3,
//     1100: 3,
//     700: 2,
//     500: 1
//   };

//   // Testimonial animation variants
//   const testimonialVariants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 100 : -100,
//       opacity: 0,
//       scale: 0.95,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       scale: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 100 : -100,
//       opacity: 0,
//       scale: 0.95,
//     }),
//   };

//   return (
//     <div className="bg-gradient-to-b from-black to-gray-900 min-h-screen">
//       {/* Gallery Section */}
//       <section id="gallery" className="py-20">
//         <div className="container mx-auto px-6 lg:px-16">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//               Event Gallery
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Explore our stunning event transformations
//             </p>
//           </motion.div>

//           {/* Filter Controls */}
//           <div className="flex flex-col gap-4 mb-12">
//             <div className="flex flex-wrap justify-center gap-2">
//               {['all', 'corporate', 'wedding', 'exhibition'].map(category => (
//                 <motion.button
//                   key={category}
//                   onClick={() => setActiveFilter(category as 'all' | GalleryItem['category'])}
//                   className={`px-4 py-2 rounded-full text-sm capitalize ${
//                     activeFilter === category
//                       ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white shadow-md'
//                       : 'bg-gray-800 text-gray-200 shadow-sm hover:shadow-md'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   {category === 'all' ? 'All Events' : category}
//                 </motion.button>
//               ))}
//             </div>

//             <div className="flex flex-wrap justify-center gap-2">
//               {allTags.map(tag => (
//                 <motion.button
//                   key={tag}
//                   onClick={() => setActiveTag(tag)}
//                   className={`px-3 py-1 rounded-full text-xs ${
//                     activeTag === tag
//                       ? 'bg-gradient-to-r from-blue-400 to-blue-900 text-white'
//                       : 'bg-gray-800 text-gray-200 hover:bg-gray-700'
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {tag === 'all' ? 'All Tags' : tag}
//                 </motion.button>
//               ))}
//             </div>
//           </div>

//           {isLoading ? (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {[...Array(6)].map((_, index) => (
//                 <div key={index} className="bg-gray-800 rounded-xl h-64 animate-pulse"></div>
//               ))}
//             </div>
//           ) : (
//             <>
//               <Masonry
//                 breakpointCols={breakpointColumnsObj}
//                 className="flex -ml-4"
//                 columnClassName="pl-4"
//               >
//                 {filteredItems.map((item, index) => (
//                   <motion.div
//                     key={item.id}
//                     className="mb-6 relative group"
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true, margin: "-50px" }}
//                     transition={{ duration: 0.6 }}
//                   >
//                     <motion.div 
//                       className="overflow-hidden rounded-xl shadow-lg cursor-pointer relative"
//                       whileHover={{ scale: 1.02 }}
//                       onClick={() => openLightbox(index)}
//                     >
//                       <motion.img
//                         src={item.image}
//                         alt={item.title}
//                         loading="lazy"
//                         className="w-full h-auto object-cover"
//                         initial={{ scale: 1 }}
//                         whileHover={{ scale: 1.1 }}
//                         transition={{ duration: 0.5 }}
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
//                         <h3 className="text-white text-xl font-bold mb-1">{item.title}</h3>
//                         <div className="flex flex-wrap gap-2 mb-2">
//                           {item.tags.map(tag => (
//                             <span key={tag} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full backdrop-blur-sm">
//                               {tag}
//                             </span>
//                           ))}
//                         </div>
//                         <div className="flex justify-center mt-4">
//                           <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all">
//                             <FaSearchPlus />
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   </motion.div>
//                 ))}
//               </Masonry>

//               {filteredItems.length === 0 && (
//                 <motion.div
//                   className="text-center py-20"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.6 }}
//                 >
//                   <h3 className="text-2xl font-bold text-gray-200 mb-2">No events found</h3>
//                   <p className="text-gray-400 mb-6">Try adjusting your filters</p>
//                   <button
//                     onClick={() => {
//                       setActiveFilter('all');
//                       setActiveTag('all');
//                     }}
//                     className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg transition-all"
//                   >
//                     Reset Filters
//                   </button>
//                 </motion.div>
//               )}
//             </>
//           )}

//           <AnimatePresence>
//             {selectedImage !== null && (
//               <motion.div
//                 className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 onClick={closeLightbox}
//               >
//                 <motion.div
//                   className="relative max-w-6xl w-full max-h-[90vh]"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={{ scale: 1, opacity: 1 }}
//                   exit={{ scale: 0.9, opacity: 0 }}
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage('prev');
//                     }}
//                     className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaChevronLeft size={20} />
//                   </button>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       navigateImage('next');
//                     }}
//                     className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaChevronRight size={20} />
//                   </button>

//                   <button
//                     onClick={closeLightbox}
//                     className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all"
//                   >
//                     <FaTimes size={20} />
//                   </button>

//                   <div className="bg-gray-800 rounded-xl overflow-hidden h-full flex flex-col">
//                     <div className="h-full overflow-hidden">
//                       <motion.img
//                         key={selectedImage}
//                         src={filteredItems[selectedImage].image}
//                         alt={filteredItems[selectedImage].title}
//                         className="w-full h-full object-contain"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         exit={{ opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     </div>

//                     <div className="bg-gray-800 p-6">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-2xl font-bold text-white">{filteredItems[selectedImage].title}</h3>
//                         <span className="text-sm text-gray-300">
//                           {new Date(filteredItems[selectedImage].date).toLocaleDateString('en-US', {
//                             year: 'numeric',
//                             month: 'long',
//                             day: 'numeric'
//                           })}
//                         </span>
//                       </div>
//                       <div className="flex flex-wrap gap-2 mb-4">
//                         {filteredItems[selectedImage].tags.map(tag => (
//                           <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full">
//                             {tag}
//                           </span>
//                         ))}
//                       </div>
//                       <p className="text-gray-300">{filteredItems[selectedImage].description}</p>
//                     </div>
//                   </div>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section id="testimonials" className="py-20">
//         <div className="container mx-auto px-6 lg:px-16">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
//               Client Testimonials
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Hear what our clients say about our services
//             </p>
//           </motion.div>

//           <div className="relative max-w-3xl mx-auto h-96">
//             <AnimatePresence custom={direction} mode="wait">
//               <motion.div
//                 key={activeTestimonial}
//                 custom={direction}
//                 variants={testimonialVariants}
//                 initial="enter"
//                 animate="center"
//                 exit="exit"
//                 transition={{
//                   x: { type: 'spring', stiffness: 300, damping: 30 },
//                   opacity: { duration: 0.2 },
//                   scale: { duration: 0.3 },
//                 }}
//                 className="absolute inset-0"
//               >
//                 <div className="text-center h-full flex flex-col items-center justify-center">
//                   <motion.div
//                     className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-2 border-blue-500/50 relative"
//                     whileHover={{ scale: 1.05 }}
//                     transition={{ type: 'spring', stiffness: 400 }}
//                   >
//                     <img
//                       src={testimonials[activeTestimonial].image}
//                       alt={`Testimonial by ${testimonials[activeTestimonial].name}`}
//                       className="w-full h-full object-cover"
//                       loading="lazy"
//                     />
//                   </motion.div>

//                   <div className="flex justify-center mb-4">
//                     {[...Array(5)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className={`w-5 h-5 ${
//                           i < testimonials[activeTestimonial].rating
//                             ? 'text-yellow-400'
//                             : 'text-gray-600'
//                         }`}
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>

//                   <motion.p
//                     className="text-gray-300 text-lg mb-6 italic max-w-2xl px-4"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.3 }}
//                   >
//                     {testimonials[activeTestimonial].quote}
//                   </motion.p>
//                   <motion.h4
//                     className="font-bold text-xl text-white"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.4 }}
//                   >
//                     {testimonials[activeTestimonial].name}
//                   </motion.h4>
//                   <motion.p
//                     className="text-blue-400"
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.5 }}
//                   >
//                     {testimonials[activeTestimonial].role}
//                   </motion.p>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             <button
//               onClick={prevTestimonial}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-colors duration-300"
//               aria-label="Previous testimonial"
//             >
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={nextTestimonial}
//               className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 p-2 rounded-full bg-gray-800/50 hover:bg-blue-500/20 transition-colors duration-300"
//               aria-label="Next testimonial"
//             >
//               <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>

//             <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
//               {testimonials.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > activeTestimonial ? 1 : -1);
//                     setActiveTestimonial(index);
//                   }}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     activeTestimonial === index ? 'bg-blue-500 scale-125' : 'bg-gray-600'
//                   }`}
//                   aria-label={`Go to testimonial ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Achievements Section */}
//       <section id="achievements" className="py-20">
//         <div className="container mx-auto px-6 lg:px-16">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//               Our Achievements
//             </h2>
//             <p className="text-gray-300 max-w-2xl mx-auto">
//               Recognitions and awards we're proud of
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {achievements.map((achievement) => (
//               <motion.div
//                 key={achievement.id}
//                 className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-50px" }}
//                 transition={{ duration: 0.6, delay: achievement.id * 0.1 }}
//               >
//                 <div className="flex justify-center mb-6">
//                   {achievement.icon}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3 text-white">{achievement.title}</h3>
//                 <p className="text-gray-300 mb-4">{achievement.description}</p>
//                 <span className="text-blue-400 font-medium">{achievement.year}</span>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer/>
//     </div>
//   );
// };

// export default GalleryPage;




















import HeroSection from './HeroSection';
import GallerySection from './GallerySection';
import Testimonials from './Testimonials';
import GetInTouch from '../../components/GetInTouch';
import Footer from '../../components/Footer';
import Bullet from './Bullet';
import CurvySections from './ThreeLines';

const GalleryPage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Bullet />
      <GallerySection />
      <Testimonials/>
      <CurvySections/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default GalleryPage;