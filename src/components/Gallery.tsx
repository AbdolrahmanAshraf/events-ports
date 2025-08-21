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

// const Gallery = () => {
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
//     <section id="gallery" className="py-20 ">
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

// export default Gallery;














// import { motion } from 'framer-motion';

// const Gallery = () => {
//   const featuredImages = [
//     {
//       id: 1,
//       title: 'Corporate Gala Night',
//       image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//     },
//     {
//       id: 2,
//       title: 'Elegant Wedding Celebration',
//       image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//     },
//     {
//       id: 3,
//       title: 'Product Launch Event',
//       image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 flex justify-center relative">
//       <div className="container max-w-7xl mx-auto px-6 relative">
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">Gallery</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Memories, Captured</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">And Celebrated</div>
//           </h2>
          
//           <p className="text-white mb-8 leading-relaxed max-w-2xl mx-auto">
//             Every Image In Our Gallery Tells A Story Of Precision, Beauty, And Heartfelt Connection. 
//             Discover How Eventing Transforms Ideas Into Vivid, Lasting Memories Through Masterful 
//             Event Design And Flawless Execution.
//           </p>
//         </motion.div>

//         {/* Three Images in Highly Blurred Container */}
//         <motion.div 
//   className="relative bg-blue-300/20 p-10 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-2xl border border-white/20"
//   initial={{ opacity: 0 }}
//   whileInView={{ opacity: 1 }}
//   transition={{ duration: 0.8 }}
// >
//             <div className="absolute -top-5 left-1/2 -translate-x-1/2">
//     <span className="bg-white text-[#4866AD] text-m font-bold font-semibold px-20 py-6 rounded-full shadow-md">
//       Recent Events
//     </span>
//   </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
//             {featuredImages.map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="relative group"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="overflow-hidden rounded-3xl">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-80 object-cover"
//                     loading="lazy"
//                     initial={{ opacity: 0.9 }}
//                     whileHover={{ opacity: 1 }}
//                   />
//                   <div className="absolute inset-0 bg-white bg-opacity-80 opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-end p-6 rounded-3xl">
//                     <h3 className="text-white text-lg font-medium">{item.title}</h3>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;















// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';


// const Gallery = () => {

//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/services');
//     window.scrollTo(0, 0); // Scroll to top after navigation
//   };
//   const featuredImages = [
//     {
//       id: 1,
//       title: 'Corporate Gala Night',
//       image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'May 15, 2023'
//     },
//     {
//       id: 2,
//       title: 'Elegant Wedding Celebration',
//       image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'June 22, 2023'
//     },
//     {
//       id: 3,
//       title: 'Product Launch Event',
//       image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'July 5, 2023'
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 flex justify-center relative bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950">
//       <div className="container max-w-6xl mx-auto px-6 relative"> {/* Reduced container max-width */}
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-12 pb-5" 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-3">Gallery</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Memories, Captured</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">And Celebrated</div>
//           </h2>
//         </motion.div>

//         {/* Glass Panel Container */}
//         <motion.div 
//           className="relative bg-blue-900/20 p-11 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl border border-white/20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Floating "Recent Events" Badge - Made smaller */}
//           <div className="absolute -top-5 left-1/2 -translate-x-1/2">
//   <span className="px-20 py-6 rounded-full shadow-md bg-gradient-to-r from-[#8BAEFF] to-[#0007D3]">
//     <span className="bg-gradient-to-r from-[#0007D3] to-[#FFFFFF] text-transparent bg-clip-text font-bold text-m font-bold">
//       Recent Events
//     </span>
//   </span>
// </div>

//           {/* Image Grid - Adjusted spacing and size */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14 p-8">
//             {featuredImages.map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="relative group"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="overflow-hidden rounded-2xl aspect-square">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                   {/* White Overlay */}
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
//                   {/* Info Panel */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                     <h3 className="text-white text-lg font-medium">{item.title}</h3>
//                     <p className="text-blue-300 text-xs">{item.date}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//         <div className="mt-8 flex items-center justify-center gap-4 text-white">
//   <p className=" text-base sm:text-lg max-w-xl">
//     Explore our latest curated moments — crafted with creativity, precision, and unforgettable energy.
//   </p>
//   <motion.button
//                 onClick={handleNavigate}
//                 className="px-11 py-4 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 Explore The Gallery
//               </motion.button>
// </div>

//       </div>
//     </section>
//   );
// };

// export default Gallery;






















// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const Gallery = () => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/gallery');
//     window.scrollTo(0, 0); // Scroll to top after navigation
//   };

//   const featuredImages = [
//     {
//       id: 1,
//       title: 'Corporate Gala Night',
//       image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'May 15, 2023'
//     },
//     {
//       id: 2,
//       title: 'Elegant Wedding Celebration',
//       image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'June 22, 2023'
//     },
//     {
//       id: 3,
//       title: 'Product Launch Event',
//       image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'July 5, 2023'
//     },
//     {
//       id: 4,
//       title: 'Charity Fundraiser',
//       image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'August 12, 2023'
//     },
//     {
//       id: 5,
//       title: 'Tech Conference',
//       image: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'September 8, 2023'
//     },
//     {
//       id: 6,
//       title: 'Annual Awards Ceremony',
//       image: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
//       date: 'October 20, 2023'
//     }
//   ];

//   return (
//     <section id="gallery" className="py-20 my-20 flex justify-center relative">
//         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3E9BD8] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0"></div>
//         <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 -translate-x-1/4 -translate-y-1/5 z-0"></div>
//       <div className="container max-w-6xl mx-auto px-6 relative">
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-12 pb-5" 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-3">Gallery</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Memories, Captured</div>
//             <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">And Celebrated</div>
//           </h2>
//         </motion.div>

//         {/* Glass Panel Container */}
//         <motion.div 
//           className="relative bg-blue-900/20 p-11 rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl border border-white/20"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Floating "Recent Events" Badge - Made smaller */}
//           <div className="absolute -top-5 left-1/2 -translate-x-1/2">
//             <span className="px-20 py-6 rounded-full shadow-md bg-gradient-to-r from-[#8BAEFF] to-[#0007D3]">
//               <span className="bg-gradient-to-r from-[#0007D3] to-[#FFFFFF] text-transparent bg-clip-text font-bold text-m font-bold">
//                 Recent Events
//               </span>
//             </span>
//           </div>

//           {/* Image Grid - Now with 2 rows */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-14 p-8">
//             {featuredImages.slice(0, 3).map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="relative group"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="overflow-hidden rounded-2xl aspect-square">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                   {/* White Overlay */}
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
//                   {/* Info Panel */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                     <h3 className="text-white text-lg font-medium">{item.title}</h3>
//                     <p className="text-blue-300 text-xs">{item.date}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
//             {featuredImages.slice(3, 6).map((item) => (
//               <motion.div
//                 key={item.id}
//                 className="relative group"
//                 whileHover={{ scale: 1.03 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="overflow-hidden rounded-2xl aspect-square">
//                   <motion.img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover"
//                     loading="lazy"
//                   />
//                   {/* White Overlay */}
//                   <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl"></div>
//                   {/* Info Panel */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
//                     <h3 className="text-white text-lg font-medium">{item.title}</h3>
//                     <p className="text-blue-300 text-xs">{item.date}</p>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//         <div className="mt-8 flex items-center justify-center gap-4 text-white">
//           <p className="text-base sm:text-lg max-w-xl">
//             Explore our latest curated moments — crafted with creativity, precision, and unforgettable energy.
//           </p>
//           <motion.button
//             onClick={handleNavigate}
//             className="px-11 py-4 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Explore The Gallery
//           </motion.button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Gallery;














{/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0" />
<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#8BAEFF] rounded-full filter blur-[30px] opacity-50 -translate-x-1/4 -translate-y-1/5 z-0" /> */}




import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface GalleryImage {
  id: number;
  name: string;
  url: string;
  alternativeText?: string;
  createdAt?: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          'http://localhost:1337/api/events?filters[slug][$eq]=gallery-slider&populate=gallery'
        );
        const data = response.data.data[0]?.gallery || [];
        const formatted = data.map((img: any) => ({
          id: img.id,
          name: img.name,
          url: `http://localhost:1337${img.formats?.small?.url || img.url}`,
          alternativeText: img.alternativeText,
          createdAt: img.createdAt,
        }));
        setImages(formatted);
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleNavigate = () => {
    navigate('/gallery');
    window.scrollTo(0, 0);
  };

  return (
    <section id="gallery" className="py-10 md:py-20 my-10 md:my-20 flex justify-center relative">
      {/* Background elements - adjusted for mobile */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white rounded-full filter blur-[100px] md:blur-[150px] opacity-50 md:translate-x-1/4 -translate-y-1/2 z-0" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#8BAEFF] rounded-full filter blur-[20px] md:blur-[30px] opacity-50 md:-translate-x-1/4 -translate-y-1/5 z-0" />
      
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-8 md:mb-12 pb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-4 md:mb-6 space-y-1 md:space-y-2">
            <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-2 md:pb-3">Gallery</div>
            <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Memories, Captured</div>
            <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">And Celebrated</div>
          </h2>
        </motion.div>

        {/* Glass Panel */}
        <motion.div 
          className="relative bg-blue-900/20 p-6 sm:p-8 md:p-11 rounded-2xl md:rounded-[2rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-xl border border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge - adjusted for mobile */}
          <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2">
            <span className="px-8 sm:px-12 md:px-20 py-2 sm:py-4 md:py-6 rounded-full shadow-md bg-[#3951B4]">
              <span className="bg-[#FFFFFF] text-transparent bg-clip-text font-bold text-xs sm:text-sm md:text-m">
                Recent Events
              </span>
            </span>
          </div>

          {/* Grid - adjusted columns for different screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 pt-10 sm:pt-12 md:pt-14 p-4 sm:p-6 md:p-8">
            {images.map((item) => (
              <motion.div
                key={item.id}
                className="relative group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden rounded-xl md:rounded-2xl aspect-square">
                  <motion.img
                    src={item.url}
                    alt={item.alternativeText || item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl md:rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 md:p-4">
                    <h3 className="text-white text-sm sm:text-base md:text-lg font-medium">{item.name}</h3>
                    <p className="text-blue-300 text-xs">{new Date(item.createdAt || '').toDateString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - stacked on mobile */}
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-white text-center sm:text-left">
          <p className="text-sm sm:text-base md:text-lg max-w-xl mb-3 sm:mb-0">
            Explore our latest curated moments — crafted with creativity, precision, and unforgettable energy.
          </p>
          <motion.button
            onClick={handleNavigate}
            className="px-6 sm:px-8 md:px-11 py-2 sm:py-3 md:py-4 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300 text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore The Gallery
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;