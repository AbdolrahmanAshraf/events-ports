// import { motion } from 'framer-motion';
// import { FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';

// export const stats = [
//   { value: "500+", label: "Events", icon: <FaCalendarAlt className="text-blue-400 text-2xl" /> },
//   { value: "98%", label: "Satisfaction", icon: <FaUsers className="text-purple-400 text-2xl" /> },
//   { value: "50+", label: "Awards", icon: <FaTrophy className="text-amber-400 text-2xl" /> }
// ];

// export const StorySection = () => (
//   <motion.div
//     className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//   >
//     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3E9BD8] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0"></div>

//     <div className="flex flex-col lg:flex-row gap-12 items-center">
//       <motion.div
//         className="lg:w-1/2"
//         initial={{ x: -50, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="relative group rounded-2xl overflow-hidden aspect-video">
//           <img
//             src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//             alt="Eventino team"
//             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//             <h3 className="text-white text-xl font-bold">Our Creative Team</h3>
//           </div>
//         </div>
//       </motion.div>

//       <div className="lg:w-1/2">
//         <motion.h2
//           className="text-3xl font-bold text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           Our Story
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mb-6 leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           Founded in 2012, Eventino began as a small team of passionate event planners with a vision to revolutionize the industry. Today, we're a leading event management company specializing in corporate events, weddings, and exhibitions.
//         </motion.p>
//         <motion.p
//           className="text-gray-300 mb-8 leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           Our team of 50+ creative professionals brings diverse expertise to every project, ensuring each event is tailored to our clients' unique vision.
//         </motion.p>

//         <motion.div
//           className="grid grid-cols-3 gap-4 mb-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-center"
//               whileHover={{ y: -5 }}
//             >
//               <div className="mb-2">{stat.icon}</div>
//               <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
//               <p className="text-gray-300 text-sm">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   </motion.div>
// );





















// import { motion } from 'framer-motion';
// import { FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';

// export const stats = [
//   { value: "500+", label: "Events", icon: <FaCalendarAlt className="text-blue-400 text-2xl" /> },
//   { value: "98%", label: "Satisfaction", icon: <FaUsers className="text-purple-400 text-2xl" /> },
//   { value: "50+", label: "Awards", icon: <FaTrophy className="text-amber-400 text-2xl" /> }
// ];

// export const StorySection = () => (
//   <motion.div
//     className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//     initial={{ opacity: 0 }}
//     whileInView={{ opacity: 1 }}
//     viewport={{ once: true }}
//     transition={{ duration: 0.8 }}
//   >
//     <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3E9BD8] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0"></div>

//     <div className="flex flex-col lg:flex-row gap-12 items-center">
//       <motion.div
//         className="lg:w-1/2"
//         initial={{ x: -50, opacity: 0 }}
//         whileInView={{ x: 0, opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="relative w-full h-[400px]">
//           {/* Top triangle */}
//           <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
//             border-l-[100px] border-l-transparent
//             border-b-[173px] border-b-white/20
//             border-r-[100px] border-r-transparent
//             overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Team member 1"
//               className="absolute -left-[100px] -top-[50px] w-[200px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//           </div>
          
//           {/* Bottom left triangle */}
//           <div className="absolute bottom-0 left-0 w-0 h-0 
//             border-r-[200px] border-r-transparent
//             border-t-[173px] border-t-white/20
//             border-l-0 border-l-transparent
//             overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
//               alt="Team member 2"
//               className="absolute -left-[100px] -top-[50px] w-[200px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//           </div>
          
//           {/* Bottom center triangle */}
//           <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0 
//             border-l-[100px] border-l-transparent
//             border-t-[173px] border-t-white/20
//             border-r-[100px] border-r-transparent
//             overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//               alt="Team member 3"
//               className="absolute -left-[100px] -top-[50px] w-[200px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//           </div>
          
//           {/* Bottom right triangle */}
//           <div className="absolute bottom-0 right-0 w-0 h-0 
//             border-l-0 border-l-transparent
//             border-t-[173px] border-t-white/20
//             border-r-[200px] border-r-transparent
//             overflow-hidden group">
//             <img
//               src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
//               alt="Team member 4"
//               className="absolute -left-[100px] -top-[50px] w-[200px] h-[200px] object-cover group-hover:scale-110 transition-transform duration-500"
//             />
//           </div>
//         </div>
//       </motion.div>

//       <div className="lg:w-1/2">
//         <motion.h2
//           className="text-3xl font-bold text-white mb-6"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.2 }}
//         >
//           Our Story
//         </motion.h2>
//         <motion.p
//           className="text-gray-300 mb-6 leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.3 }}
//         >
//           Founded in 2012, Eventino began as a small team of passionate event planners with a vision to revolutionize the industry. Today, we're a leading event management company specializing in corporate events, weddings, and exhibitions.
//         </motion.p>
//         <motion.p
//           className="text-gray-300 mb-8 leading-relaxed"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.4 }}
//         >
//           Our team of 50+ creative professionals brings diverse expertise to every project, ensuring each event is tailored to our clients' unique vision.
//         </motion.p>

//         <motion.div
//           className="grid grid-cols-3 gap-4 mb-10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.1 }}
//         >
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ y: 20, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-center"
//               whileHover={{ y: -5 }}
//             >
//               <div className="mb-2">{stat.icon}</div>
//               <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
//               <p className="text-gray-300 text-sm">{stat.label}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   </motion.div>
// );

























import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';

export const stats = [
  { value: "500+", label: "Events", icon: <FaCalendarAlt className="text-blue-400 text-2xl" /> },
  { value: "98%", label: "Satisfaction", icon: <FaUsers className="text-purple-400 text-2xl" /> },
  { value: "50+", label: "Awards", icon: <FaTrophy className="text-amber-400 text-2xl" /> }
];

export const StorySection = () => (
  <motion.div
  className="p-6 sm:p-8 mb-20 relative overflow-hidden"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
<div className="absolute top-0 right-0 w-[40vw] h-[10vh] bg-white rounded-full filter blur-[100px] opacity-50 translate-x-1/4 translate-y-1/4 z-10"></div>

    {/* SVG Clip Path */}
    <svg width="0" height="0">
      <defs>
        <clipPath id="roundedTriangle" clipPathUnits="objectBoundingBox">
        <path d="M 0.5 0 L 1 1 H 0 Z" />
                </clipPath>
      </defs>
    </svg>


    <div className="flex flex-col lg:flex-row gap-12 py-20 my-20 items-center relative z-10">
      {/* Left: Images */}
      <motion.div
        className="w-full lg:w-1/2 rounded"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full flex flex-col items-center gap-6">
          {/* Top triangle */}
          <div className="w-40 sm:w-52 md:w-60 aspect-[1.15] shadow-lg rounded" style={{ clipPath: "url(#roundedTriangle)" }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="Top"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Bottom triangles */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {[
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1976&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80",
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
            ].map((url, i) => (
              <div key={i} className="w-28 sm:w-36 md:w-40 aspect-[1.15] shadow-lg" style={{ clipPath: "url(#roundedTriangle)" }}>
                <img
                  src={url}
                  alt={`Triangle ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Right: Text & Stats */}
      <div className="w-full lg:w-1/2">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-6 leading-relaxed text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Founded in 2012, Eventino began as a small team of passionate event planners with a vision to revolutionize the industry. Today, we're a leading event management company specializing in corporate events, weddings, and exhibitions.
        </motion.p>
        <motion.p
          className="text-gray-300 mb-8 leading-relaxed text-center lg:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Our team of 50+ creative professionals brings diverse expertise to every project, ensuring each event is tailored to our clients' unique vision.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-center"
              whileHover={{ y: -5 }}
            >
              <div className="mb-2">{stat.icon}</div>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </motion.div>
);
