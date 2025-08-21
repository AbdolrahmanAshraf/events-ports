// import { motion } from 'framer-motion';
// import { useRef, ReactNode } from 'react';
// import { 
//   FaLightbulb, FaPalette, FaCameraRetro, 
//   FaChalkboardTeacher, FaMobileAlt, FaGlobe,
//   FaArrowRight
// } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// import { motion } from "framer-motion";

// interface Service {
//   icon: ReactNode;
//   title: string;
//   description: string;
// }

// interface ServiceCardProps extends Service {
//   delay: number;
//   isPreview?: boolean;
// }

// const services: Service[] = [
//   { icon: <FaLightbulb />, title: 'AUDIO SOLUTIONS', description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO THE AMBIANCE AND ACOUSTICS OF YOUR EVENT.' },
//   { icon: <FaPalette />, title: 'VIDEO PRODUCTION', description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION THAT CAPTIVATES AND ENGAGES AUDIENCES' },
//   { icon: <FaCameraRetro />, title: 'LIGHTING DESIGN', description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS THAT SET THE MOOD AND ENHANCE THE ATMOSPHERE' },
//   { icon: <FaChalkboardTeacher />, title: 'EVENT MANAGEMENT', description: 'FROM CONCEPTUALIZATION TO EXECUTION, WE HANDLE EVERY ASPECT OF EVENT PLANNING WITH METICULOUS ATTENTION TO DETAIL AND PRECISION' },
//   { icon: <FaMobileAlt />, title: 'EXHIBITION MANAGEMENT', description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS THAT LEAVE A LASTING IMPRESSION ON ATTENDEES.' },
//   { icon: <FaGlobe />, title: 'WEDDING MANAGEMENT', description: 'LET US BRING YOUR DREAM WEDDING TO LIFE, WITH PERSONALIZED TOUCHES AND FLAWLESS EXECUTION THAT CREATE CHERISHED MEMORIES FOR A LIFETIME.' }
// ];

// const Services = () => {
//   return (
//     <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
//       <div className="container mx-auto px-6 lg:px-16">
//         <motion.div 
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
//             Our Services
//           </h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Bringing your vision to life with precision and creativity
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.slice(0, 3).map((service, index) => (
//             <ServiceCard 
//               key={index} 
//               {...service} 
//               delay={index * 0.1}
//               isPreview={true}
//             />
//           ))}
//         </div>

//         {/* Learn More Button */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//         >
//           <Link 
//             to="/services" 
//             className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
//           >
//             Explore All Services
//             <FaArrowRight className="ml-2" />
//           </Link>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// const ServiceCard = ({ icon, title, description, delay, isPreview = false }: ServiceCardProps) => {
//   const cardRef = useRef<HTMLDivElement>(null);

//   return (
//     <motion.div
//       ref={cardRef}
//       className="relative group h-full"
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{ duration: 0.6, delay }}
//       whileHover="hover"
//     >
//       {/* Gradient glow */}
//       <div className="absolute inset-0 rounded-xl  opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
//       {/* Card content */}
//       <motion.div
//         className="h-full p-8 bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm flex flex-col items-center text-center relative overflow-hidden"
//         whileHover={{ y: -10 }}
//         transition={{ type: 'spring', stiffness: 400 }}
//       >
//         <div className="mb-6 text-4xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
//           {icon}
//         </div>
//         <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
//         <p className="text-gray-400">
//           {isPreview ? `${description.split(' ').slice(0, 15).join(' ')}...` : description}
//         </p>
        
//         {/* Hover effect */}
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//           variants={{
//             hover: { scale: 1.1 }
//           }}
//         />
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;









// import React from 'react';

// const services = [
//   {
//     id: 1,
//     title: "Corporate Events",
//     description: "From conferences to product launches, we design corporate events that combine professionalism with creativity.",
//     icon: "🏢"
//   },
//   {
//     id: 2,
//     title: "Weddings & Celebrations",
//     description: "Your special day deserves extraordinary attention. We craft wedding experiences as unique as your love story.",
//     icon: "💍"
//   },
//   {
//     id: 3,
//     title: "Galas & Fundraisers",
//     description: "Elevate your cause with events that inspire generosity and create lasting impressions on donors and guests.",
//     icon: "✨"
//   },
//   {
//     id: 4,
//     title: "Social Gatherings",
//     description: "Whether intimate or grand, we design social events that foster connection and create cherished memories.",
//     icon: "🎭"
//   }
// ];

// const Services: React.FC = () => {
//   return (
//     <section id="services" className="py-20 relative">
//       <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-16">
//           <h2 className="text-3xl font-semibold mb-3 text-blue-300">Service</h2>
//           <h3 className="text-4xl font-bold mb-6">
//             From Thought To<br />
//             Memory — Seamlessly<br />
//             Delivered
//           </h3>
//           <p className="text-blue-100 mb-8 leading-relaxed">
//             Whether orchestrating a corporate summit, an elegant 
//             wedding, or a cultural celebration, our team delivers 
//             experiences that combine strategic planning, meticulous detail, and 
//             executed to perfection. Our services ensure every moment is 
//             crafted to be cherished and remembered.
//           </p>
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300">
//             EXPLORE OUR EXPERTISE
//           </button>
//         </div>
//         <div className="lg:w-1/2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {services.map((service) => (
//               <div 
//                 key={service.id} 
//                 className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl hover:shadow-lg transition-shadow duration-300 border border-blue-800/50"
//               >
//                 <div className="text-3xl mb-3">{service.icon}</div>
//                 <h4 className="text-xl font-bold mb-2">{service.title}</h4>
//                 <p className="text-blue-200 text-sm">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;











// import { motion } from 'framer-motion';
// import { FaArrowRight } from 'react-icons/fa';

// const Services = () => {
//   const services = [
//     {
//       title: "AUDIO SOLUTIONS",
//       description: "IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO THE AMBIANCE AND ACOUSTICS OF YOUR EVENT."
//     },
//     {
//       title: "VIDEO PRODUCTION",
//       description: "ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION THAT CAPTIVATES AND ENGAGES AUDIENCES"
//     },
//     {
//       title: "LIGHTING DESIGN",
//       description: "TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS THAT SET THE MOOD AND ENHANCE THE ATMOSPHERE"
//     },
//     {
//       title: "EVENT MANAGEMENT",
//       description: "FROM CONCEPTUALIZATION TO EXECUTION, WE HANDLE EVERY ASPECT OF EVENT PLANNING WITH METICULOUS ATTENTION TO DETAIL"
//     }
//   ];

//   return (
//     <section id="services" className="py-20 mx-20 relative  text-white">
//       <div className="absolute inset-0 bg-opacity-10 z-0" style={{
//       }} />
      
//       <div className="container mx-auto px-6 lg:px-16 relative z-10">
//         <div className="flex flex-col lg:flex-row items-center">
//           <div className="lg:w-1/2 mb-12 lg:mb-0">
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-2xl uppercase text-blue-300 mb-2">Service</h2>
//               <h3 className="text-4xl md:text-5xl font-light leading-tight mb-6">
//                 From Thought To
//                 <br />
//                 <span className="font-bold">Memory — Seamlessly</span>
//                 <br />
//                 Delivered
//               </h3>
//               <p className="text-blue-100 mb-8 leading-relaxed">
//                 Whether Orchestrating A Corporate Summit, An Elegant 
//                 Wedding, Or A Cultural Celebration, Our Team Delivers 
//                 Experiences That Combine Strategic Planning, Meticulous Detail, And
//                 Executed To Perfection. Our Services Ensure Every Moment Is
//                 Crafted To Be Cherished And Remembered.
//               </p>
              
//               <motion.button
//                 className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-full transition duration-300 flex items-center"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 EXPLORE OUR EXPERTISE
//                 <FaArrowRight className="ml-2" />
//               </motion.button>
//             </motion.div>
//           </div>
          
//           <div className="lg:w-1/2">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {services.map((service, index) => (
//                 <motion.div
//                   key={index}
//                   className="bg-blue-900/30 backdrop-blur-sm p-6 rounded-xl border border-blue-800/50"
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5, transition: { duration: 0.2 } }}
//                 >
//                   <h4 className="text-xl font-bold mb-3">{service.title}</h4>
//                   <p className="text-blue-200 text-sm">{service.description}</p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

















// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const Services = () => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/services');
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section id="services" className="py-20 my-20 flex justify-center relative">
//               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2  z-0"></div>
//               <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 -translate-x-1/4 -translate-y-1/5 z-0"></div>
//               <div className="container max-w-7xl mx-auto px-6 relative">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Text Section (moved to left side like About component) */}
//           <motion.div 
//             className="lg:w-1/2 relative"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">Our Services</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Expert Solutions</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Tailored For You</div>
//             </h2>
            
//             <p className="text-white mb-8 leading-relaxed">
//               We provide comprehensive event management solutions designed to
//               meet your unique needs. From corporate gatherings to private celebrations,
//               our team delivers exceptional experiences with meticulous attention to detail.
//             </p>
            
//             <div className="flex gap-4">
//               <motion.button
//                 onClick={handleNavigate}
//                 className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 View Services
//               </motion.button>
//             </div>
//           </motion.div>

//           {/* Image Section (moved to right side like About component) */}
//           <motion.div 
//             className="lg:w-1/2 relative"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Event Services"
//               className="w-full h-auto rounded-xl"
//               loading="lazy"
//             />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;







import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

interface StrapiImage {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
}
const Services = () => {

 const navigate = useNavigate();
   const [imageInfo, setImageInfo] = useState<{
     url: string;
     alt: string;
     width?: number;
     height?: number;
   } | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
 
   useEffect(() => {
     const fetchAboutImage = async () => {
       try {
         const response = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=home-about&populate=coverImage');
         if (!response.ok) {
           throw new Error('Failed to fetch image');
         }
         const data = await response.json();
         const imageData = data?.data?.[0]?.coverImage as StrapiImage;
 
         if (imageData) {
           const imageUrl = imageData.formats?.large?.url || imageData.url;
           setImageInfo({
             url: `http://localhost:1337${imageUrl}`,
             alt: imageData.alternativeText || 'About Eventino',
             width: imageData.width ?? undefined,
             height: imageData.height ?? undefined,
           });
         }
       } catch (error: any) {
         console.error('Error fetching image from Strapi:', error);
         setError(error.message);
       } finally {
         setLoading(false);
       }
     };
 
     fetchAboutImage();
   }, []);

  const handleNavigate = () => {
    navigate("/services");
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 my-20 flex justify-center relative">
      {/* Left blur circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0" />
      
      {/* Right circle stays still */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white rounded-full opacity-40 -translate-x-1/4 -translate-y-1/5 z-0" />

      <div className="container max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">
                Our Services
              </div>
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">
                Expert Solutions
              </div>
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">
                Tailored For You
              </div>
            </h2>

            <p className="text-white mb-8 leading-relaxed">
              We provide comprehensive event management solutions designed to meet your unique needs. From corporate gatherings to private celebrations, our team delivers exceptional experiences with meticulous attention to detail.
            </p>

            <div className="flex gap-4">
              <motion.button
                onClick={handleNavigate}
                className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 bg-white blur-[80px] z-10 rounded-full pointer-events-none" />

            {loading ? (
              <div className="w-full h-64 bg-gray-200 rounded-xl animate-pulse"></div>
            ) : error ? (
              <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">Error loading image</p>
              </div>
            ) : imageInfo ? (
              <img 
                src={imageInfo.url}
                alt={imageInfo.alt}
                className="w-full h-auto rounded-xl relative z-20"
                loading="lazy"
                width={imageInfo.width}
                height={imageInfo.height}
              />
            ) : (
              <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-500">No image available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
