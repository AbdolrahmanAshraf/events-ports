// import { motion } from 'framer-motion';
// import { FaLightbulb, FaPalette, FaCameraRetro, FaChalkboardTeacher, FaMobileAlt, FaGlobe } from 'react-icons/fa';

// const services = [
//   { 
//     icon: <FaLightbulb className="text-blue-400 text-4xl" />, 
//     title: 'AUDIO SOLUTIONS', 
//     description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO YOUR EVENT.' 
//   },
//   { 
//     icon: <FaPalette className="text-blue-400 text-4xl" />, 
//     title: 'VIDEO PRODUCTION', 
//     description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION.' 
//   },
//   { 
//     icon: <FaCameraRetro className="text-blue-400 text-4xl" />, 
//     title: 'LIGHTING DESIGN', 
//     description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS.' 
//   },
//   { 
//     icon: <FaChalkboardTeacher className="text-blue-400 text-4xl" />, 
//     title: 'EVENT MANAGEMENT', 
//     description: 'FROM CONCEPT TO EXECUTION WITH METICULOUS ATTENTION TO DETAIL.' 
//   },
//   { 
//     icon: <FaMobileAlt className="text-blue-400 text-4xl" />, 
//     title: 'EXHIBITION MANAGEMENT', 
//     description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS.' 
//   },
//   { 
//     icon: <FaGlobe className="text-blue-400 text-4xl" />, 
//     title: 'WEDDING MANAGEMENT', 
//     description: 'PERSONALIZED TOUCHES AND FLAWLESS EXECUTION FOR CHERISHED MEMORIES.' 
//   }
// ];

// export const OurServicesSection = () => (
//   <>
//     <motion.div
//       className="text-center mb-16"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//         <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//           Our Services
//         </span>
//       </h2>
//       <p className="text-gray-300 max-w-2xl mx-auto">
//         Comprehensive solutions for every event need
//       </p>
//     </motion.div>

//     <motion.div
//       className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1500px]">
//         {services.map((service, index) => (
//           <div key={index} className="relative">
//             {/* Card content */}
//             <motion.div
//               className="relative z-10 bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/30 overflow-hidden origin-bottom"
//               initial={false}
//               whileHover={{ rotateX: -90 }}
//               transition={{ duration: 0.6, ease: 'easeInOut' }}
//               style={{
//                 transformStyle: 'preserve-3d',
//                 backfaceVisibility: 'hidden',
//               }}
//             >
//               <div className="flex items-start gap-6">
//                 <div className="flex-shrink-0">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-white">{service.title}</h3>
//                 </div>
//               </div>
//             </motion.div>

//             {/* Description under the flipped card */}
//             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-8 rounded-xl bg-white/30 backdrop-blur-md text-white border border-white/30">
//               <p className="text-sm text-center">{service.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </motion.div>
//   </>
// );









import { motion } from 'framer-motion';
import { FaLightbulb, FaPalette, FaCameraRetro, FaChalkboardTeacher, FaMobileAlt, FaGlobe } from 'react-icons/fa';

const services = [
  { 
    icon: <FaLightbulb className="text-blue-400 text-4xl" />, 
    title: 'AUDIO SOLUTIONS', 
    description: 'IMMERSE YOUR GUESTS IN CRYSTAL-CLEAR SOUNDSCAPES TAILORED TO YOUR EVENT.' 
  },
  { 
    icon: <FaPalette className="text-blue-400 text-4xl" />, 
    title: 'VIDEO PRODUCTION', 
    description: 'ILLUMINATE YOUR VISION WITH STUNNING VISUALS AND SEAMLESS VIDEO INTEGRATION.' 
  },
  { 
    icon: <FaCameraRetro className="text-blue-400 text-4xl" />, 
    title: 'LIGHTING DESIGN', 
    description: 'TRANSFORM SPACES WITH SOPHISTICATED LIGHTING ARRANGEMENTS.' 
  },
  { 
    icon: <FaChalkboardTeacher className="text-blue-400 text-4xl" />, 
    title: 'EVENT MANAGEMENT', 
    description: 'FROM CONCEPT TO EXECUTION WITH METICULOUS ATTENTION TO DETAIL.' 
  },
  { 
    icon: <FaMobileAlt className="text-blue-400 text-4xl" />, 
    title: 'EXHIBITION MANAGEMENT', 
    description: 'SHOWCASE YOUR BRAND WITH CONFIDENCE THROUGH EXPERTLY CURATED EXHIBITIONS.' 
  },
  { 
    icon: <FaGlobe className="text-blue-400 text-4xl" />, 
    title: 'WEDDING MANAGEMENT', 
    description: 'PERSONALIZED TOUCHES AND FLAWLESS EXECUTION FOR CHERISHED MEMORIES.' 
  }
];

export const OurServicesSection = () => (
  <>
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
          Our Services
        </span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto">
        Comprehensive solutions for every event need
      </p>
    </motion.div>

    <motion.div
       className="rounded-3xl p-8 py-20 mb-20 bg-blue-200/60 backdrop-blur-lg border border-blue-300/20 shadow-2xl"
       initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 perspective-[1500px]">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Card content */}
            <motion.div
              className="relative z-10 bg-blue-900 p-8 py-20 rounded-xl border border-blue-400/30 overflow-hidden origin-bottom shadow-lg"
              initial={false}
              whileHover={{ rotateX: -90 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              style={{
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            </motion.div>

            {/* Description under the flipped card */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center p-8 rounded-xl bg-blue-200 text-black border border-blue-400/30 shadow-lg">
              <p className="text-l text-bold text-center">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  </>
);