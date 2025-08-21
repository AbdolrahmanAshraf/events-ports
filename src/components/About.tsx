// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import { FaDownload, FaPaperPlane } from 'react-icons/fa';

// // Define types for the components
// interface FloatingBlobProps {
//   position: string;
//   size: string;
//   duration: number;
//   delay?: number;
// }

// interface ProgressBarProps {
//   skill: string;
//   percentage: number;
//   color: string;
// }

// interface AboutProps {
//   imageUrl?: string;
// }

// // Extracted variants for better performance
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6 }
//   }
// };

// const FloatingBlob: React.FC<FloatingBlobProps> = ({ position, size, duration, delay = 0 }) => {
//   const style = {
//     top: position.includes('top') ? '5%' : 'auto',
//     bottom: position.includes('bottom') ? '5%' : 'auto',
//     left: position.includes('left') ? '5%' : 'auto',
//     right: position.includes('right') ? '5%' : 'auto',
//     width: size,
//     height: size
//   };

//   return (
//     <motion.div
//       className={`absolute rounded-full bg-blue-100/30 blur-xl will-change-transform`}
//       style={style}
//       animate={{
//         y: [0, position.includes('top') ? 20 : -20, 0],
//         scale: [1, 1.1, 1]
//       }}
//       transition={{
//         duration,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay
//       }}
//       aria-hidden="true"
//     />
//   );
// };

// const ProgressBar: React.FC<ProgressBarProps> = ({ skill, percentage, color }) => {
//   return (
//     <div className="mb-6 last:mb-0">
//       <div className="flex justify-between mb-2">
//         <span className="text-gray-800 font-medium">{skill}</span>
//         <span className="text-gray-800 font-medium">{percentage}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//         <motion.div
//           className={`h-full rounded-full bg-gradient-to-r ${color}`}
//           initial={{ width: 0 }}
//           whileInView={{ width: `${percentage}%` }}
//           viewport={{ once: true, margin: "-20% 0px" }}
//           transition={{ 
//             duration: 1.5,
//             delay: 0.2,
//             type: 'spring',
//             damping: 10
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const About: React.FC<AboutProps> = ({ imageUrl = "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" }) => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <section 
//       id="about" 
//       className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
//       ref={ref}
//     >
//       {/* Floating decorative elements */}
//       <FloatingBlob position="top left" size="10rem" duration={8} />
//       <FloatingBlob position="bottom right" size="15rem" duration={10} delay={2} />

//       <div className="container mx-auto px-6 lg:px-16 relative z-10">
//         <motion.div 
//           className="flex flex-col lg:flex-row items-center gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           {/* Image Section with 3D tilt effect */}
//           <motion.div 
//             className="lg:w-1/2"
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="relative group">
//               <motion.img 
//                 src={imageUrl}
//                 alt="Eventino team planning an event"
//                 className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-8 border-white"
//                 loading="lazy"
//                 initial={{ rotateY: 0 }}
//                 whileHover={{ rotateY: 5 }}
//                 transition={{ type: 'spring', stiffness: 100 }}
//               />
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 initial={{ scale: 0.9 }}
//                 whileHover={{ scale: 1 }}
//                 aria-hidden="true"
//               />
//             </div>
//           </motion.div>
          
//           {/* Text Section */}
//           <motion.div 
//             className="lg:w-1/2"
//             variants={containerVariants}
//           >
//             <motion.div variants={itemVariants}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//                 About Eventino
//               </h2>
//               <div className="text-lg text-gray-500 mb-6 font-medium">
//                 EVENT PLANNING & DESIGN SPECIALISTS
//               </div>
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//                 At <strong className="text-blue-600">Eventino</strong>, we transform ordinary spaces into extraordinary experiences. 
//                 With over <strong>10 years</strong> in the industry, our team of creative professionals 
//                 specializes in corporate events, weddings, and exhibitions. We handle everything 
//                 from <strong>lighting design</strong> to <strong>full event production</strong>.
//               </p>
//             </motion.div>

//             {/* Animated Skills */}
//             <motion.div 
//               className="space-y-6 mb-10"
//               variants={itemVariants}
//             >
//               <ProgressBar skill="Event Planning" percentage={98} color="from-blue-500 to-blue-500" />
//               <ProgressBar skill="Lighting Design" percentage={95} color="from-blue-500 to-teal-400" />
//               <ProgressBar skill="Venue Decoration" percentage={92} color="from-orange-500 to-blue-500" />
//               <ProgressBar skill="Client Satisfaction" percentage={100} color="from-green-500 to-emerald-400" />
//             </motion.div>
            
//             {/* Interactive Buttons */}
//             <motion.div 
//               className="flex flex-wrap gap-4"
//               variants={itemVariants}
//             >
//               <motion.a
//                 href="#"
//                 className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 aria-label="Download our portfolio"
//               >
//                 <FaDownload /> Our Portfolio
//               </motion.a>
//               <motion.a
//                 href="#contact"
//                 className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 aria-label="Get a quote"
//               >
//                 <FaPaperPlane /> Get a Quote
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;
























// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { useEffect } from 'react';
// import { FaDownload, FaPaperPlane } from 'react-icons/fa';

// interface FloatingBlobProps {
//   position: string;
//   size: string;
//   duration: number;
//   delay?: number;
// }

// interface ProgressBarProps {
//   skill: string;
//   percentage: number;
//   color: string;
// }

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//       delayChildren: 0.3
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: { duration: 0.6 }
//   }
// };

// const FloatingBlob = ({ position, size, duration, delay = 0 }: FloatingBlobProps) => {
//   const style = {
//     top: position.includes('top') ? '5%' : 'auto',
//     bottom: position.includes('bottom') ? '5%' : 'auto',
//     left: position.includes('left') ? '5%' : 'auto',
//     right: position.includes('right') ? '5%' : 'auto',
//     width: size,
//     height: size
//   };

//   return (
//     <motion.div
//       className="absolute rounded-full bg-blue-100/30 blur-xl will-change-transform"
//       style={style}
//       animate={{
//         y: [0, position.includes('top') ? 20 : -20, 0],
//         scale: [1, 1.1, 1]
//       }}
//       transition={{
//         duration,
//         repeat: Infinity,
//         ease: "easeInOut",
//         delay
//       }}
//       aria-hidden="true"
//     />
//   );
// };

// const ProgressBar = ({ skill, percentage, color }: ProgressBarProps) => {
//   return (
//     <div className="mb-6 last:mb-0">
//       <div className="flex justify-between mb-2">
//         <span className="text-gray-800 font-medium">{skill}</span>
//         <span className="text-gray-800 font-medium">{percentage}%</span>
//       </div>
//       <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
//         <motion.div
//           className={`h-full rounded-full bg-gradient-to-r ${color}`}
//           initial={{ width: 0 }}
//           whileInView={{ width: `${percentage}%` }}
//           viewport={{ once: true, margin: "-20% 0px" }}
//           transition={{ 
//             duration: 1.5,
//             delay: 0.2,
//             type: 'spring',
//             damping: 10
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// const About = () => {
//   const controls = useAnimation();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     if (inView) {
//       controls.start('visible');
//     }
//   }, [controls, inView]);

//   return (
//     <section 
//       className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
//       ref={ref}
//     >
//       <FloatingBlob position="top left" size="10rem" duration={8} />
//       <FloatingBlob position="bottom right" size="15rem" duration={10} delay={2} />

//       <div className="container mx-auto px-6 lg:px-16 relative z-10">
//         <motion.div 
//           className="flex flex-col lg:flex-row items-center gap-12"
//           variants={containerVariants}
//           initial="hidden"
//           animate={controls}
//         >
//           <motion.div 
//             className="lg:w-1/2"
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//           >
//             <div className="relative group">
//               <motion.img 
//                 src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//                 alt="Eventino team planning an event"
//                 className="rounded-2xl shadow-2xl w-full max-w-lg mx-auto border-8 border-white"
//                 loading="lazy"
//                 initial={{ rotateY: 0 }}
//                 whileHover={{ rotateY: 5 }}
//                 transition={{ type: 'spring', stiffness: 100 }}
//               />
//               <motion.div 
//                 className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
//                 initial={{ scale: 0.9 }}
//                 whileHover={{ scale: 1 }}
//                 aria-hidden="true"
//               />
//             </div>
//           </motion.div>
          
//           <motion.div 
//             className="lg:w-1/2"
//             variants={containerVariants}
//           >
//             <motion.div variants={itemVariants}>
//               <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
//                 About Eventino
//               </h2>
//               <div className="text-lg text-gray-500 mb-6 font-medium">
//                 EVENT PLANNING & DESIGN SPECIALISTS
//               </div>
//               <p className="text-gray-700 mb-8 text-lg leading-relaxed">
//                 At <strong className="text-blue-600">Eventino</strong>, we transform ordinary spaces into extraordinary experiences. 
//                 With over <strong>10 years</strong> in the industry, our team of creative professionals 
//                 specializes in corporate events, weddings, and exhibitions.
//               </p>
//             </motion.div>

//             <motion.div 
//               className="space-y-6 mb-10"
//               variants={itemVariants}
//             >
//               <ProgressBar skill="Event Planning" percentage={98} color="from-blue-500 to-blue-500" />
//               <ProgressBar skill="Lighting Design" percentage={95} color="from-blue-500 to-teal-400" />
//               <ProgressBar skill="Venue Decoration" percentage={92} color="from-orange-500 to-blue-500" />
//               <ProgressBar skill="Client Satisfaction" percentage={100} color="from-green-500 to-emerald-400" />
//             </motion.div>
            
//             <motion.div 
//               className="flex flex-wrap gap-4"
//               variants={itemVariants}
//             >
//               <motion.a
//                 href="#"
//                 className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 text-white font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 aria-label="Download our portfolio"
//               >
//                 <FaDownload /> Our Portfolio
//               </motion.a>
//               <motion.a
//                 href="#contact"
//                 className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all"
//                 whileHover={{ y: -3, scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 aria-label="Get a quote"
//               >
//                 <FaPaperPlane /> Get a Quote
//               </motion.a>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;


























// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const About = () => {
//   return (
//     <section id="about" className="py-20 flex justify-center">
//     <div className="container max-w-7xl mx-auto px-6">
//       <div className="flex flex-col lg:flex-row items-center gap-12">
//         {/* Image Section */}
//         <motion.div 
//           className="lg:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img 
//             src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//             alt="About Eventino"
//             className="w-full h-auto rounded-xl"
//             loading="lazy"
//           />
//         </motion.div>
        
//         {/* Text Section */}
//         <motion.div 
//           className="lg:w-1/2"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//         <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//   <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">About Us</div>
//   <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Where Vision Meets</div>
//   <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Lasting Impact</div>
// </h2>

          
//           <p className="text-white mb-8 leading-relaxed">
//             For Our Life Years, Everyone Has More Examined By Leaders
//             And Observers Over the Range. This Most Important
//             Disclaimer: To Our Approach to Service Management
//             Management Solutions — All Rights Reserved.
//           </p>
          
//           <div className="flex gap-4">
//           <Link
//   to="/about"
//   className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white transition-colors duration-300 hover:bg-white "
// >
//   About Eventino
// </Link>


//           </div>
//         </motion.div>
//       </div>
//     </div>
//   </section>
  
//   );
// };

// export default About;















// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const About = () => {
//   return (
//     <section id="about" className="py-20 flex justify-center">
//       <div className="container max-w-7xl mx-auto px-6">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section */}
//           <motion.div 
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <img 
//               src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//               alt="About Eventino"
//               className="w-full h-auto rounded-xl"
//               loading="lazy"
//             />
//           </motion.div>
          
//           {/* Text Section */}
//           <motion.div 
//             className="lg:w-1/2"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">About Us</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Where Vision Meets</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Lasting Impact</div>
//             </h2>
            
//             <p className="text-white mb-8 leading-relaxed">
//               For Our Life Years, Everyone Has More Examined By Leaders
//               And Observers Over the Range. This Most Important
//               Disclaimer: To Our Approach to Service Management
//               Management Solutions — All Rights Reserved.
//             </p>
            
//             <div className="flex gap-4">
//             <div className="flex gap-4">
//               <Link
//                 to="/about"
//                 className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md transition-all duration-300 hover:bg-white hover:text-[#3E9BD8] active:scale-95 cursor-pointer"
//               >
//                 About Eventino
//               </Link>
//             </div>

//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
























// import { motion } from 'framer-motion';
// import { useNavigate } from 'react-router-dom';

// const About = () => {
//   const navigate = useNavigate();

//   const handleNavigate = () => {
//     navigate('/about');
//     window.scrollTo(0, 0); // Scroll to top after navigation
//   };

//   return (
//     <section id="about" className="py-20 my-20 flex justify-center relative">
//               <div className="absolute top-0 right-0 w-[100vw] h-[20vh] bg-[#3539BB] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-10"></div>

//    {/* <div className="absolute top-0 left-0 w-full h-[200px] z-0 pointer-events-none">
//   <div className="w-full h-full bg-gradient-to-b from-black/60 to-transparent blur-[100px]" />
// </div> */}
//       <div className="container max-w-7xl mx-auto px-6 relative">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           {/* Image Section */}
//           <motion.div 
//   className="lg:w-1/2 relative"
//   initial={{ opacity: 0, x: -50 }}
//   whileInView={{ opacity: 1, x: 0 }}
//   viewport={{ once: true }}
//   transition={{ duration: 0.8 }}
// >
//   {/* Top-left blur effect */}
//   <div className="absolute top-0 left-0 w-40 h-40 bg-white blur-[80px] z-10 rounded-full pointer-events-none" />

//   <img 
//     src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
//     alt="About Eventino"
//     className="w-full h-auto rounded-xl relative z-20"
//     loading="lazy"
//   />
// </motion.div>
          
//           {/* Text Section */}
//           <motion.div 
//             className="lg:w-1/2 relative"
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">About Us</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Where Vision Meets</div>
//               <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Lasting Impact</div>
//             </h2>
            
//             <p className="text-white mb-8 leading-relaxed">
//               For Our Life Years, Everyone Has More Examined By Leaders
//               And Observers Over the Range. This Most Important
//               Disclaimer: To Our Approach to Service Management
//               Management Solutions — All Rights Reserved.
//             </p>
            
//             <div className="flex gap-4">
//               <motion.button
//                 onClick={handleNavigate}
//                 className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 About Eventino
//               </motion.button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;














import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const About = () => {
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
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <section id="about" className="py-20 my-20 flex justify-center relative">
      <div className="absolute top-0 right-0 w-[100vw] h-[20vh] bg-[#3539BB] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-10"></div>

      <div className="container max-w-7xl mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
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

          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6 space-y-2">
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold pb-6">About Us</div>
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Where Vision Meets</div>
              <div className="bg-gradient-to-r from-[#CFE8FA] to-[#3E9BD8] text-transparent bg-clip-text font-bold">Lasting Impact</div>
            </h2>

            <p className="text-white mb-8 leading-relaxed">
              For Our Life Years, Everyone Has More Examined By Leaders
              And Observers Over the Range. This Most Important
              Disclaimer: To Our Approach to Service Management
              Management Solutions — All Rights Reserved.
            </p>

            <div className="flex gap-4">
              <motion.button
                onClick={handleNavigate}
                className="px-11 py-6 bg-[#3E9BD8] text-white font-medium rounded-full border border-white shadow-md hover:bg-white hover:text-[#3E9BD8] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Eventino
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
