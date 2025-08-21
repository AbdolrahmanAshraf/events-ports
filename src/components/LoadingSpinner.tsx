// // import { motion } from 'framer-motion';

// // const LoadingSpinner = () => {
// //   return (
// //     <div className="fixed inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm z-50">
// //       <div className="text-center space-y-6">
// //         {/* Logo/Brand */}
// //         <motion.div
// //           initial={{ scale: 0.8, opacity: 0 }}
// //           animate={{ scale: 1, opacity: 1 }}
// //           transition={{ duration: 0.4 }}
// //           className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
// //         >
// //           Eventino
// //         </motion.div>
        
// //         {/* Dual Ring Spinner */}
// //         <div className="relative w-20 h-20 mx-auto">
// //           <motion.div
// //             className="absolute inset-0 border-4 border-blue-400 border-t-transparent rounded-full"
// //             animate={{ rotate: 360 }}
// //             transition={{
// //               duration: 1.2,
// //               repeat: Infinity,
// //               ease: "linear"
// //             }}
// //           />
// //           <motion.div
// //             className="absolute inset-0 border-4 border-purple-400 border-b-transparent rounded-full"
// //             animate={{ rotate: -360 }}
// //             transition={{
// //               duration: 1.5,
// //               repeat: Infinity,
// //               ease: "linear",
// //               delay: 0.2
// //             }}
// //           />
// //         </div>
        
// //         {/* Progress Indicator */}
// //         <div className="w-48 mx-auto bg-gray-200 rounded-full h-1.5 overflow-hidden">
// //           <motion.div
// //             className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
// //             initial={{ width: 0 }}
// //             animate={{ width: "100%" }}
// //             transition={{
// //               duration: 2,
// //               repeat: Infinity,
// //               repeatType: "reverse",
// //               ease: "easeInOut"
// //             }}
// //           />
// //         </div>
        
// //         {/* Status Text */}
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           transition={{ delay: 0.3 }}
// //           className="text-gray-500 text-sm"
// //         >
// //           <motion.p
// //             animate={{ opacity: [0.6, 1, 0.6] }}
// //             transition={{
// //               duration: 2,
// //               repeat: Infinity
// //             }}
// //           >
// //             Preparing something amazing...
// //           </motion.p>
// //         </motion.div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default LoadingSpinner;











// import { motion, useAnimation, useMotionValue } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const LoadingSpinner = ({ withProgress = true }) => {
//   const [progress, setProgress] = useState(0);
//   const pathLength = useMotionValue(0);
//   const controls = useAnimation();
//   const pulseControls = useAnimation();

//   // Animation sequences
//   useEffect(() => {
//     const loadSequence = async () => {
//       // Infinite rotation
//       controls.start({
//         rotate: 360,
//         transition: { 
//           duration: 2, 
//           ease: "linear", 
//           repeat: Infinity 
//         }
//       });

//       // Pulsing effect
//       while (true) {
//         await pulseControls.start({
//           scale: 1.1,
//           opacity: 1,
//           transition: { duration: 0.8 }
//         });
//         await pulseControls.start({
//           scale: 1,
//           opacity: 0.7,
//           transition: { duration: 1.2 }
//         });
//       }
//     };

//     // Simulate progress if enabled
//     if (withProgress) {
//       const interval = setInterval(() => {
//         setProgress(prev => {
//           const increment = Math.random() * 15;
//           return prev >= 100 ? 100 : prev + increment;
//         });
//       }, 300);
//       return () => clearInterval(interval);
//     }

//     loadSequence();
//   }, []);

//   // Update SVG path animation
//   useEffect(() => {
//     pathLength.set(progress / 100);
//   }, [progress]);

//   return (
//     <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/10 backdrop-blur-[1px] z-[9999]">
//       <div className="relative w-40 h-40 mb-8">
//         {/* Gradient background circle */}
//         <motion.div
//           className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 via-blue-500 to-emerald-400"
//           animate={pulseControls}
//           initial={{ opacity: 0.7 }}
//         />

//         {/* Progress ring (only shows when withProgress=true) */}
//         {withProgress && (
//           <svg className="w-full h-full absolute" viewBox="0 0 100 100">
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="45"
//               fill="transparent"
//               stroke="rgba(255,255,255,0.3)"
//               strokeWidth="6"
//             />
//             <motion.circle
//               cx="50"
//               cy="50"
//               r="45"
//               fill="transparent"
//               stroke="url(#loaderGradient)"
//               strokeWidth="6"
//               strokeLinecap="round"
//               strokeDasharray="283"
//               strokeDashoffset="283"
//               style={{ pathLength }}
//             />
//             <defs>
//               <linearGradient id="loaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                 <stop offset="0%" stopColor="#FFFFFF" />
//                 <stop offset="100%" stopColor="#E0E0E0" />
//               </linearGradient>
//             </defs>
//           </svg>
//         )}

//         {/* Rotating center icon */}
//         <motion.div 
//           className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
//           animate={controls}
//         >
//           <svg
//             width="48"
//             height="48"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <motion.path
//               d="M19 14C19 15.5913 18.3679 17.1174 17.2426 18.2426C16.1174 19.3679 14.5913 20 13 20C11.4087 20 9.88258 19.3679 8.75736 18.2426C7.63214 17.1174 7 15.5913 7 14C7 12.4087 7.63214 10.8826 8.75736 9.75736C9.88258 8.63214 11.4087 8 13 8"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               animate={{
//                 rotate: [0, 180],
//                 opacity: [0.8, 1],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//             />
//             <motion.path
//               d="M12 2V6M12 18V22M6 12H2M22 12H18"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               animate={{
//                 scale: [1, 1.1],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//                 repeatType: "mirror",
//               }}
//             />
//           </svg>
//         </motion.div>

//         {/* Floating particles */}
//         {!withProgress && (
//           <>
//             {[...Array(6)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-2 h-2 bg-white rounded-full"
//                 initial={{
//                   x: Math.cos((i * Math.PI) / 3) * 20,
//                   y: Math.sin((i * Math.PI) / 3) * 20,
//                 }}
//                 animate={{
//                   x: Math.cos((i * Math.PI) / 3 + Math.PI * 2) * 30,
//                   y: Math.sin((i * Math.PI) / 3 + Math.PI * 2) * 30,
//                   opacity: [0.4, 0.9, 0.4],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: i * 0.2,
//                   ease: "easeInOut"
//                 }}
//               />
//             ))}
//           </>
//         )}
//       </div>

//       {/* Progress or status text */}
//       <motion.div 
//         className="text-center"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//       >
//         {withProgress ? (
//           <>
//             <motion.p 
//               className="text-white text-xl font-medium mb-1"
//               animate={{
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//               }}
//             >
//               {Math.round(progress)}%
//             </motion.p>
//             <motion.p 
//               className="text-white/80 text-sm"
//               animate={{
//                 opacity: [0.7, 1, 0.7],
//               }}
//               transition={{
//                 duration: 2,
//                 repeat: Infinity,
//               }}
//             >
//               {progress < 30 ? "Preparing assets..." : 
//                progress < 70 ? "Optimizing content..." : 
//                "Finalizing experience..."}
//             </motion.p>
//           </>
//         ) : (
//           <motion.p
//             className="text-white/80 text-sm"
//             animate={{
//               opacity: [0.6, 1, 0.6],
//             }}
//             transition={{
//               duration: 2,
//               repeat: Infinity,
//             }}
//           >
//             Crafting your visual experience...
//           </motion.p>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default LoadingSpinner;