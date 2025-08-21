




















// import { motion } from 'framer-motion';
// import { FaLightbulb, FaPalette, FaCameraRetro, FaChalkboardTeacher, FaMobileAlt, FaGlobe } from 'react-icons/fa';
// import Footer from '../components/Footer';

// // Import all images directly
// import corporateGala from '../assets/imgs/corporate-gala.jpg';
// import luxuryWedding from '../assets/imgs/luxury-wedding.jpg';
// import productLaunch from '../assets/imgs/product-launch.jpg';
// import charityEvent from '../assets/imgs/charity-event.jpg';
// import fashionShow from '../assets/imgs/fashion-show.jpg';
// import privateConcert from '../assets/imgs/private-concert.jpg';
// import chanelLogo from '../assets/imgs/chanel.jpg';
// import rolexLogo from '../assets/imgs/rolex.jpg';
// import sothebysLogo from '../assets/imgs/sothebys.jpg';
// import teslaLogo from '../assets/imgs/tesla.jpg';
// import fallbackImage from '../assets/imgs/fallback.jpg';
// import btsVideo from '../assets/imgs/bts-reel.mp4';

// // Asset configuration
// const IMG = {
//   projects: {
//     corporateGala,
//     luxuryWedding,
//     productLaunch,
//     charityEvent,
//     fashionShow,
//     privateConcert,
//   },
//   brands: {
//     chanel: chanelLogo,
//     rolex: rolexLogo,
//     sothebys: sothebysLogo,
//     tesla: teslaLogo,
//   },
//   btsVideo,
//   fallback: fallbackImage
// };

// const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
//   <img
//     src={src}
//     alt={alt}
//     className={className}
//     onError={(e) => {
//       const target = e.target as HTMLImageElement;
//       target.src = IMG.fallback;
//       target.alt = 'Fallback image';
//     }}
//   />
// );

// const ServiceCard = ({ icon, title, description, delay }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay: number;
// }) => (
//   <motion.div
//     className="relative group h-full"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.6, delay }}
//   >
//     <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
//     <motion.div
//       className="h-full p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden"
//       whileHover={{ y: -10 }}
//       transition={{ type: 'spring', stiffness: 400 }}
//     >
//       <div className="mb-6 text-4xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
//       <p className="text-gray-400">{description}</p>
//     </motion.div>
//   </motion.div>
// );

// const ServicesPage = () => {
//   const services = [
//     { 
//       icon: <FaLightbulb className="text-blue-400" />, 
//       title: 'AUDIO SOLUTIONS', 
//       description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO YOUR EVENT.' 
//     },
//     { 
//       icon: <FaPalette className="text-blue-400" />, 
//       title: 'VIDEO PRODUCTION', 
//       description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION.' 
//     },
//     { 
//       icon: <FaCameraRetro className="text-blue-400" />, 
//       title: 'LIGHTING DESIGN', 
//       description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS.' 
//     },
//     { 
//       icon: <FaChalkboardTeacher className="text-blue-400" />, 
//       title: 'EVENT MANAGEMENT', 
//       description: 'FROM CONCEPT TO EXECUTION WITH METICULOUS ATTENTION TO DETAIL.' 
//     },
//     { 
//       icon: <FaMobileAlt className="text-blue-400" />, 
//       title: 'EXHIBITION MANAGEMENT', 
//       description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS.' 
//     },
//     { 
//       icon: <FaGlobe className="text-blue-400" />, 
//       title: 'WEDDING MANAGEMENT', 
//       description: 'PERSONALIZED TOUCHES AND FLAWLESS EXECUTION FOR CHERISHED MEMORIES.' 
//     }
//   ];

//   const projects = [
//     { image: IMG.projects.corporateGala, title: "Tech Summit 2023", category: "Corporate Gala" },
//     { image: IMG.projects.luxuryWedding, title: "Côte d'Azur Wedding", category: "Destination Wedding" },
//     { image: IMG.projects.productLaunch, title: "Luxury Auto Launch", category: "Exhibition" },
//     { image: IMG.projects.charityEvent, title: "Met Gala Afterparty", category: "VIP Event" },
//     { image: IMG.projects.fashionShow, title: "Paris Fashion Week", category: "Runway Production" },
//     { image: IMG.projects.privateConcert, title: "Billionaire Birthday", category: "Entertainment" }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-black">
//       {/* Navbar spacer */}
//       <div className="pt-20"></div>
      
//       <main className="flex-grow">
//         {/* Services Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-6 lg:px-16">
//             <motion.div 
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
//                 Our Services
//               </h2>
//               <p className="text-gray-400 max-w-2xl mx-auto">
//                 Bringing your vision to life with precision and creativity
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <ServiceCard 
//                   key={index}
//                   icon={service.icon}
//                   title={service.title}
//                   description={service.description}
//                   delay={index * 0.1}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="py-20 bg-gray-900">
//           <div className="container mx-auto px-6">
//             <motion.h2 
//               className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Signature Projects
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
//               {projects.map((project, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="relative group overflow-hidden aspect-square"
//                 >
//                   <ImageWithFallback 
//                     src={project.image} 
//                     alt={`${project.title} - ${project.category}`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div>
//                       <p className="text-blue-400 font-light">{project.category}</p>
//                       <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BTS Video Section */}
//         <section className="relative h-screen max-h-[800px] overflow-hidden">
//           <video 
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//             className="w-full h-full object-cover opacity-90"
//           >
//             <source src={IMG.btsVideo} type="video/mp4" />
//             Your browser does not support videos
//           </video>
//           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="text-center"
//             >
//               <p className="text-blue-400 mb-2 tracking-widest">BEHIND THE SCENES</p>
//               <h2 className="text-5xl md:text-7xl font-bold text-white">
//                 Precision in <span className="italic font-light">Every</span> Detail
//               </h2>
//             </motion.div>
//           </div>
//         </section>

//         {/* Collaborations Section */}
//         <section className="py-20 bg-black">
//           <div className="container mx-auto px-6">
//             <motion.h3 
//               className="text-center text-gray-400 mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Selected Collaborations
//             </motion.h3>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
//               {Object.entries(IMG.brands).map(([brandName, logoPath]) => (
//                 <motion.div
//                   key={brandName}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="grayscale hover:grayscale-0 transition-all duration-300"
//                 >
//                   <ImageWithFallback 
//                     src={logoPath}
//                     alt={`${brandName} logo`}
//                     className="h-12 object-contain opacity-80 hover:opacity-100"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;













// import { motion } from 'framer-motion';
// import { FaLightbulb, FaPalette, FaCameraRetro, FaChalkboardTeacher, FaMobileAlt, FaGlobe } from 'react-icons/fa';
// import Footer from '../components/Footer';

// // Import all images directly
// import corporateGala from '../assets/imgs/corporate-gala.jpg';
// import luxuryWedding from '../assets/imgs/luxury-wedding.jpg';
// import productLaunch from '../assets/imgs/product-launch.jpg';
// import charityEvent from '../assets/imgs/charity-event.jpg';
// import fashionShow from '../assets/imgs/fashion-show.jpg';
// import privateConcert from '../assets/imgs/private-concert.jpg';
// import chanelLogo from '../assets/imgs/chanel.jpg';
// import rolexLogo from '../assets/imgs/rolex.jpg';
// import sothebysLogo from '../assets/imgs/sothebys.jpg';
// import teslaLogo from '../assets/imgs/tesla.jpg';
// import fallbackImage from '../assets/imgs/fallback.jpg';
// import btsVideo from '../assets/imgs/bts-reel.mp4';

// // Asset configuration
// const IMG = {
//   projects: {
//     corporateGala,
//     luxuryWedding,
//     productLaunch,
//     charityEvent,
//     fashionShow,
//     privateConcert,
//   },
//   brands: {
//     chanel: chanelLogo,
//     rolex: rolexLogo,
//     sothebys: sothebysLogo,
//     tesla: teslaLogo,
//   },
//   btsVideo,
//   fallback: fallbackImage
// };

// const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
//   <img
//     src={src}
//     alt={alt}
//     className={className}
//     onError={(e) => {
//       const target = e.target as HTMLImageElement;
//       target.src = IMG.fallback;
//       target.alt = 'Fallback image';
//     }}
//   />
// );

// const ServiceCard = ({ icon, title, description, delay }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay: number;
// }) => (
//   <motion.div
//     className="relative group h-full"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.6, delay }}
//   >
//     <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
//     <motion.div
//       className="h-full p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden"
//       whileHover={{ y: -10 }}
//       transition={{ type: 'spring', stiffness: 400 }}
//     >
//       <div className="mb-6 text-4xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
//       <p className="text-gray-300">{description}</p>
//     </motion.div>
//   </motion.div>
// );

// const ServicesPage = () => {
//   const services = [
//     { 
//       icon: <FaLightbulb />, 
//       title: 'AUDIO SOLUTIONS', 
//       description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO YOUR EVENT.' 
//     },
//     { 
//       icon: <FaPalette />, 
//       title: 'VIDEO PRODUCTION', 
//       description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION.' 
//     },
//     { 
//       icon: <FaCameraRetro />, 
//       title: 'LIGHTING DESIGN', 
//       description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS.' 
//     },
//     { 
//       icon: <FaChalkboardTeacher />, 
//       title: 'EVENT MANAGEMENT', 
//       description: 'FROM CONCEPT TO EXECUTION WITH METICULOUS ATTENTION TO DETAIL.' 
//     },
//     { 
//       icon: <FaMobileAlt />, 
//       title: 'EXHIBITION MANAGEMENT', 
//       description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS.' 
//     },
//     { 
//       icon: <FaGlobe />, 
//       title: 'WEDDING MANAGEMENT', 
//       description: 'PERSONALIZED TOUCHES AND FLAWLESS EXECUTION FOR CHERISHED MEMORIES.' 
//     }
//   ];

//   const projects = [
//     { image: IMG.projects.corporateGala, title: "Tech Summit 2023", category: "Corporate Gala" },
//     { image: IMG.projects.luxuryWedding, title: "Côte d'Azur Wedding", category: "Destination Wedding" },
//     { image: IMG.projects.productLaunch, title: "Luxury Auto Launch", category: "Exhibition" },
//     { image: IMG.projects.charityEvent, title: "Met Gala Afterparty", category: "VIP Event" },
//     { image: IMG.projects.fashionShow, title: "Paris Fashion Week", category: "Runway Production" },
//     { image: IMG.projects.privateConcert, title: "Billionaire Birthday", category: "Entertainment" }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900">
//       {/* Navbar spacer */}
//       <div className="pt-20"></div>
      
//       <main className="flex-grow">
//         {/* Services Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-6 lg:px-16">
//             <motion.div 
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
//                 Our Services
//               </h2>
//               <p className="text-gray-300 max-w-2xl mx-auto">
//                 Bringing your vision to life with precision and creativity
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <ServiceCard 
//                   key={index}
//                   icon={service.icon}
//                   title={service.title}
//                   description={service.description}
//                   delay={index * 0.1}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="py-20 bg-gray-900/50">
//           <div className="container mx-auto px-6">
//             <motion.h2 
//               className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Signature Projects
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
//               {projects.map((project, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="relative group overflow-hidden aspect-square"
//                 >
//                   <ImageWithFallback 
//                     src={project.image} 
//                     alt={`${project.title} - ${project.category}`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div>
//                       <p className="text-blue-400 font-light">{project.category}</p>
//                       <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BTS Video Section */}
//         <section className="relative h-screen max-h-[800px] overflow-hidden">
//           <video 
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//             className="w-full h-full object-cover opacity-90"
//           >
//             <source src={IMG.btsVideo} type="video/mp4" />
//             Your browser does not support videos
//           </video>
//           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="text-center"
//             >
//               <p className="text-blue-400 mb-2 tracking-widest">BEHIND THE SCENES</p>
//               <h2 className="text-5xl md:text-7xl font-bold text-white">
//                 Precision in <span className="italic font-light">Every</span> Detail
//               </h2>
//             </motion.div>
//           </div>
//         </section>

//         {/* Collaborations Section */}
//         <section className="py-20 bg-gray-900/50">
//           <div className="container mx-auto px-6">
//             <motion.h3 
//               className="text-center text-gray-300 mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Selected Collaborations
//             </motion.h3>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
//               {Object.entries(IMG.brands).map(([brandName, logoPath]) => (
//                 <motion.div
//                   key={brandName}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="grayscale hover:grayscale-0 transition-all duration-300"
//                 >
//                   <ImageWithFallback 
//                     src={logoPath}
//                     alt={`${brandName} logo`}
//                     className="h-12 object-contain opacity-80 hover:opacity-100"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;



































// import { motion } from 'framer-motion';
// import { FaLightbulb, FaPalette, FaCameraRetro, FaChalkboardTeacher, FaMobileAlt, FaGlobe } from 'react-icons/fa';
// import Footer from '../components/Footer';

// // Import all images directly
// import corporateGala from '../assets/imgs/corporate-gala.jpg';
// import luxuryWedding from '../assets/imgs/luxury-wedding.jpg';
// import productLaunch from '../assets/imgs/product-launch.jpg';
// import charityEvent from '../assets/imgs/charity-event.jpg';
// import fashionShow from '../assets/imgs/fashion-show.jpg';
// import privateConcert from '../assets/imgs/private-concert.jpg';
// import chanelLogo from '../assets/imgs/chanel.jpg';
// import rolexLogo from '../assets/imgs/rolex.jpg';
// import sothebysLogo from '../assets/imgs/sothebys.jpg';
// import teslaLogo from '../assets/imgs/tesla.jpg';
// import fallbackImage from '../assets/imgs/fallback.jpg';
// import btsVideo from '../assets/imgs/bts-reel.mp4';

// // Asset configuration
// const IMG = {
//   projects: {
//     corporateGala,
//     luxuryWedding,
//     productLaunch,
//     charityEvent,
//     fashionShow,
//     privateConcert,
//   },
//   brands: {
//     chanel: chanelLogo,
//     rolex: rolexLogo,
//     sothebys: sothebysLogo,
//     tesla: teslaLogo,
//   },
//   btsVideo,
//   fallback: fallbackImage
// };

// const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => (
//   <img
//     src={src}
//     alt={alt}
//     className={className}
//     onError={(e) => {
//       const target = e.target as HTMLImageElement;
//       target.src = IMG.fallback;
//       target.alt = 'Fallback image';
//     }}
//   />
// );

// const ServiceCard = ({ icon, title, description, delay }: {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   delay: number;
// }) => (
//   <motion.div
//     className="relative group h-full"
//     initial={{ opacity: 0, y: 50 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     viewport={{ once: true, margin: "-50px" }}
//     transition={{ duration: 0.6, delay }}
//   >
//     <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
//     <motion.div
//       className="h-full p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden"
//       whileHover={{ y: -10 }}
//       transition={{ type: 'spring', stiffness: 400 }}
//     >
//       <div className="mb-6 text-4xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//         {icon}
//       </div>
//       <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
//       <p className="text-gray-300">{description}</p>
//     </motion.div>
//   </motion.div>
// );

// const ServicesPage = () => {
//   const services = [
//     { 
//       icon: <FaLightbulb />, 
//       title: 'AUDIO SOLUTIONS', 
//       description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO YOUR EVENT.' 
//     },
//     { 
//       icon: <FaPalette />, 
//       title: 'VIDEO PRODUCTION', 
//       description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION.' 
//     },
//     { 
//       icon: <FaCameraRetro />, 
//       title: 'LIGHTING DESIGN', 
//       description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS.' 
//     },
//     { 
//       icon: <FaChalkboardTeacher />, 
//       title: 'EVENT MANAGEMENT', 
//       description: 'FROM CONCEPT TO EXECUTION WITH METICULOUS ATTENTION TO DETAIL.' 
//     },
//     { 
//       icon: <FaMobileAlt />, 
//       title: 'EXHIBITION MANAGEMENT', 
//       description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS.' 
//     },
//     { 
//       icon: <FaGlobe />, 
//       title: 'WEDDING MANAGEMENT', 
//       description: 'PERSONALIZED TOUCHES AND FLAWLESS EXECUTION FOR CHERISHED MEMORIES.' 
//     }
//   ];

//   const projects = [
//     { image: IMG.projects.corporateGala, title: "Tech Summit 2023", category: "Corporate Gala" },
//     { image: IMG.projects.luxuryWedding, title: "Côte d'Azur Wedding", category: "Destination Wedding" },
//     { image: IMG.projects.productLaunch, title: "Luxury Auto Launch", category: "Exhibition" },
//     { image: IMG.projects.charityEvent, title: "Met Gala Afterparty", category: "VIP Event" },
//     { image: IMG.projects.fashionShow, title: "Paris Fashion Week", category: "Runway Production" },
//     { image: IMG.projects.privateConcert, title: "Billionaire Birthday", category: "Entertainment" }
//   ];

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-black to-gray-900">
//       {/* Navbar spacer */}
//       <div className="pt-20"></div>
      
//       <main className="flex-grow">
//         {/* Services Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-6 lg:px-16">
//             <motion.div 
//               className="text-center mb-16"
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-2">
//                 Our Services
//               </h2>
//               <p className="text-gray-300 max-w-2xl mx-auto">
//                 Bringing your vision to life with precision and creativity
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <ServiceCard 
//                   key={index}
//                   icon={service.icon}
//                   title={service.title}
//                   description={service.description}
//                   delay={index * 0.1}
//                 />
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Projects Section */}
//         <section className="py-20 bg-gray-900/50">
//           <div className="container mx-auto px-6">
//             <motion.h2 
//               className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Signature Projects
//             </motion.h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
//               {projects.map((project, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ duration: 0.5, delay: i * 0.1 }}
//                   className="relative group overflow-hidden aspect-square"
//                 >
//                   <ImageWithFallback 
//                     src={project.image} 
//                     alt={`${project.title} - ${project.category}`}
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//                     <div>
//                       <p className="text-blue-400 font-light">{project.category}</p>
//                       <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* BTS Video Section */}
//         <section className="relative h-screen max-h-[800px] overflow-hidden">
//           <video 
//             autoPlay 
//             loop 
//             muted 
//             playsInline
//             className="w-full h-full object-cover opacity-90"
//           >
//             <source src={IMG.btsVideo} type="video/mp4" />
//             Your browser does not support videos
//           </video>
//           <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="text-center"
//             >
//               <p className="text-blue-400 mb-2 tracking-widest">BEHIND THE SCENES</p>
//               <h2 className="text-5xl md:text-7xl font-bold text-white">
//                 Precision in <span className="italic font-light">Every</span> Detail
//               </h2>
//             </motion.div>
//           </div>
//         </section>

//         {/* Collaborations Section */}
//         <section className="py-20 bg-gray-900/50">
//           <div className="container mx-auto px-6">
//             <motion.h3 
//               className="text-center text-gray-300 mb-16"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               Selected Collaborations
//             </motion.h3>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-12 place-items-center">
//               {Object.entries(IMG.brands).map(([brandName, logoPath]) => (
//                 <motion.div
//                   key={brandName}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   className="grayscale hover:grayscale-0 transition-all duration-300"
//                 >
//                   <ImageWithFallback 
//                     src={logoPath}
//                     alt={`${brandName} logo`}
//                     className="h-12 object-contain opacity-80 hover:opacity-100"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ServicesPage;



































import Footer from '../../components/Footer';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { OurServicesSection } from './OurServicesSection';
import { HowWeDoItSection } from './HowWeDoItSection';

const ServicesPage = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      
      <div className="container mx-auto pb-10 px-6 relative z-10">
        <ServicesSection />
        <OurServicesSection />
        <HowWeDoItSection />
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;