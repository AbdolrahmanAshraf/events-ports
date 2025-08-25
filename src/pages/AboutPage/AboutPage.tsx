// import { motion } from 'framer-motion';
// import { FaUsers, FaCalendarAlt, FaTrophy, FaLightbulb, FaPalette, FaQuoteLeft } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Footer from '../../components/Footer';

// const AboutPage = () => {
//   // ========== Data ==========
//   const stats = [
//     { value: "500+", label: "Events", icon: <FaCalendarAlt className="text-blue-400 text-2xl" /> },
//     { value: "98%", label: "Satisfaction", icon: <FaUsers className="text-purple-400 text-2xl" /> },
//     { value: "50+", label: "Awards", icon: <FaTrophy className="text-amber-400 text-2xl" /> }
//   ];

//   const values = [
//     {
//       title: "Creativity",
//       description: "Innovative designs that push boundaries",
//       icon: <FaPalette className="text-blue-500 text-4xl" />
//     },
//     {
//       title: "Excellence",
//       description: "Flawless execution with attention to detail",
//       icon: <FaTrophy className="text-purple-500 text-4xl" />
//     },
//     {
//       title: "Passion",
//       description: "Genuine love for creating memorable experiences",
//       icon: <FaLightbulb className="text-amber-500 text-4xl" />
//     }
//   ];

//   const testimonials = [
//     {
//       quote: "Eventino transformed our product launch into an unforgettable experience. Their attention to detail was impeccable.",
//       name: "Sarah Johnson",
//       role: "Corporate Client"
//     },
//     {
//       quote: "Our wedding was magical thanks to Eventino. They handled everything seamlessly from start to finish.",
//       name: "Michael & Emily",
//       role: "Wedding Clients"
//     },
//     {
//       quote: "The exhibition design attracted 40% more visitors than last year. Professional team with innovative ideas!",
//       name: "David Chen",
//       role: "Marketing Director"
//     }
//   ];

//   // ========== Background Elements ==========
//   const BackgroundElements = () => (
//     <>
//       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full filter blur-[150px] opacity-20 translate-x-1/4 -translate-y-1/2 z-0"></div>
//       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full filter blur-[180px] opacity-15 -translate-x-1/4 translate-y-1/4 z-0"></div>
//     </>
//   );

//   // ========== Hero Section ==========
//   const HeroSection = () => (
//     <section className="relative pb-20 mb-20 overflow-hidden h-screen flex items-center">
//       <div className="absolute inset-0 z-0">
//         <div 
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
//         ></div>
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-80"></div>
//       </div>

//       <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-white rounded-full filter blur-[300px] opacity-50 translate-x-1/4 translate-y-1/4 z-10"></div>
      
//       <div className="container mx-auto px-6 relative z-20">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-white max-w-2xl"
//         >
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
//             Creating
//             <br />
//             <span className="font-bold">Moments That</span>
//             <br />
//             Last A Lifetime
//           </h1>
          
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-8 py-3 bg-blue-600 text-white font-medium rounded-none mt-8"
//           >
//             <Link to="/contact">Plan Your Event</Link>
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );

//   // ========== Story Section ==========
//   const StorySection = () => (
//     <motion.div
//       className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3E9BD8] rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0"></div>

//       <div className="flex flex-col lg:flex-row gap-12 items-center">
//         <motion.div
//           className="lg:w-1/2"
//           initial={{ x: -50, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="relative group rounded-2xl overflow-hidden aspect-video">
//             <img
//               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
//               alt="Eventino team"
//               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
//               <h3 className="text-white text-xl font-bold">Our Creative Team</h3>
//             </div>
//           </div>
//         </motion.div>

//         <div className="lg:w-1/2">
//           <motion.h2
//             className="text-3xl font-bold text-white mb-6"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2 }}
//           >
//             Our Story
//           </motion.h2>
//           <motion.p
//             className="text-gray-300 mb-6 leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3 }}
//           >
//             Founded in 2012, Eventino began as a small team of passionate event planners with a vision to revolutionize the industry. Today, we're a leading event management company specializing in corporate events, weddings, and exhibitions.
//           </motion.p>
//           <motion.p
//             className="text-gray-300 mb-8 leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.4 }}
//           >
//             Our team of 50+ creative professionals brings diverse expertise to every project, ensuring each event is tailored to our clients' unique vision.
//           </motion.p>

//           <motion.div
//             className="grid grid-cols-3 gap-4 mb-10"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ staggerChildren: 0.1 }}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ y: 20, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ 
//                   duration: 0.5, 
//                   delay: index * 0.1,
//                   type: "spring",
//                   stiffness: 100
//                 }}
//                 className="bg-white/20 backdrop-blur-md p-4 rounded-xl border border-white/30 text-center"
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="mb-2">{stat.icon}</div>
//                 <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
//                 <p className="text-gray-300 text-sm">{stat.label}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );

//   // ========== Values Section ==========
//   const ValuesSection = () => (
//     <>
//             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0"></div>

//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//             Our Values
//           </span>
//         </h2>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           The principles that guide everything we do
//         </p>
//       </motion.div>

//       <motion.div
//         className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {values.map((value, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/30 text-center"
//               whileHover={{ y: -10 }}
//             >
//               <div className="flex justify-center mb-6">
//                 {value.icon}
//               </div>
//               <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
//               <p className="text-gray-300">{value.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );

//   // ========== Testimonials Section ==========
//   const TestimonialsSection = () => (
//     <>
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//           <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//             Client Testimonials
//           </span>
//         </h2>
//         <p className="text-gray-300 max-w-2xl mx-auto">
//           Don't just take our word for it
//         </p>
//       </motion.div>

//       <motion.div
//         className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ 
//                 duration: 0.5, 
//                 delay: index * 0.1,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               className="bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/30"
//             >
//               <FaQuoteLeft className="text-blue-500/30 text-4xl mb-4" />
//               <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
//               <div>
//                 <h4 className="font-bold text-white">{testimonial.name}</h4>
//                 <p className="text-blue-400 text-sm">{testimonial.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );

//   // ========== CTA Section ==========
//   const CTASection = () => (
//     <motion.div
//       className="text-center"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
//         <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//           Ready to Create Your Perfect Event?
//         </span>
//       </h2>
//       <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//         Contact us today to discuss your vision with our team of experts
//       </p>
//       <motion.button
//         className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//       >
//         Get in Touch
//       </motion.button>
//     </motion.div>
//   );

//   // ========== Main Component ==========
//   return (
//     <div className="relative overflow-hidden">
//       <BackgroundElements />
//       <HeroSection />
      
//       <div className="container mx-auto pb-10 px-6 relative z-10">
//         <div className="absolute top-0 right-0 w-[100vw] h-[20vh] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-10"></div>
        
//         <StorySection />
//         <ValuesSection />
//         <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 -translate-y-1/2 z-0 pointer-events-none"></div>
//         <TestimonialsSection />
//         <CTASection />
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default AboutPage;


















































import { HeroSection } from './HeroSection';
import { StorySection } from './StorySection';
import  ValuesSection from './ValuesSection';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';
import OurValue from './OurValue';
import { OurMission } from './OurMission';


const AboutPage = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <StorySection />
        <ValuesSection />
        <OurMission/>
        <OurValue/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default AboutPage;