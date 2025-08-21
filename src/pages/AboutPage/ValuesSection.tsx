// import { motion } from 'framer-motion';
// import { FaPalette, FaTrophy, FaLightbulb } from 'react-icons/fa';

// export const values = [
//   {
//     title: "Creativity",
//     description: "Innovative designs that push boundaries",
//     icon: <FaPalette className="text-blue-500 text-4xl" />
//   },
//   {
//     title: "Excellence",
//     description: "Flawless execution with attention to detail",
//     icon: <FaTrophy className="text-purple-500 text-4xl" />
//   },
//   {
//     title: "Passion",
//     description: "Genuine love for creating memorable experiences",
//     icon: <FaLightbulb className="text-amber-500 text-4xl" />
//   }
// ];

// export const ValuesSection = () => (
//   <>

//     <section className="relative overflow-hidden">
//     <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3E9BD8] rounded-full filter blur-[150px] opacity-50 translate-y-1/2 translate-x-1/2 z-0"></div>


//     <motion.div
//       className="text-center mb-16"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//         <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//           Our Values
//         </span>
//       </h2>
//       <p className="text-gray-300 max-w-2xl mx-auto">
//         The principles that guide everything we do
//       </p>
//     </motion.div>

//     <motion.div
//       className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-xl p-8 mb-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.8 }}
//     >
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {values.map((value, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ 
//               duration: 0.5, 
//               delay: index * 0.1,
//               type: "spring",
//               stiffness: 100
//             }}
//             className="bg-white/20 backdrop-blur-md p-8 rounded-xl border border-white/30 text-center"
//             whileHover={{ y: -10 }}
//           >
//             <div className="flex justify-center mb-6">
//               {value.icon}
//             </div>
//             <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
//             <p className="text-gray-300">{value.description}</p>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//     </section>
//   </>
// );
















// import { motion } from 'framer-motion';
// import { FaPalette, FaTrophy, FaLightbulb } from 'react-icons/fa';

// export const values = [
//   {
//     title: "Creativity",
//     description: "Innovative designs that push boundaries",
//     icon: <FaPalette className="text-blue-500 text-4xl" />
//   },
//   {
//     title: "Excellence",
//     description: "Flawless execution with attention to detail",
//     icon: <FaTrophy className="text-purple-500 text-4xl" />
//   },
//   {
//     title: "Passion",
//     description: "Genuine love for creating memorable experiences",
//     icon: <FaLightbulb className="text-amber-500 text-4xl" />
//   }
// ];

// export const ValuesSection = () => (
//   <section className="py-20 my-20 flex justify-center relative overflow-hidden">
//     {/* Blur Backgrounds */}
//     {/* <div className="absolute top-0 right-0 w-[500px] h-[100px] bg-white rounded-full filter blur-[150px] opacity-50 translate-x-1/4 translate-y-1/2  z-0"></div> */}
//     {/* <div className="absolute bottom-0 left-0 w-[500px] h-[200px] bg-white rounded-full filter blur-[150px] opacity-50 -translate-x-1/4 -translate-y-1/3 z-0"></div> */}

// {/* Blur Backgrounds */}
// <div className="absolute top-[200px] right-[-150px] w-[400px] h-[150px] bg-white rounded-full filter blur-[150px] opacity-50 z-0"></div>
// <div className="absolute bottom-[-120px] left-[-150px] w-[400px] h-[200px] bg-white rounded-full filter blur-[150px] opacity-40 z-0"></div>


//     {/* Content Container */}
//     <div className="container  mx-auto px-6 relative z-10">
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
//     </div>
//   </section>
// );













// import { motion } from 'framer-motion';
// import { FaPalette, FaTrophy, FaLightbulb } from 'react-icons/fa';
// import rightImage from '../../assets/3d-rendering-target-bulb-icon 1.jpg';
// import LeftImage from '../../assets/3d-rendering-target-bulb-icon 1.jpg';

// export const values = [
//   {
//     title: "Creativity",
//     description: "Innovative designs that push boundaries",
//     icon: <FaPalette className="text-blue-500 text-4xl" />
//   },
//   {
//     title: "Excellence",
//     description: "Flawless execution with attention to detail",
//     icon: <FaTrophy className="text-purple-500 text-4xl" />
//   },
//   {
//     title: "Passion",
//     description: "Genuine love for creating memorable experiences",
//     icon: <FaLightbulb className="text-amber-500 text-4xl" />
//   }
// ];

// export const ValuesSection = () => (
//   <section className="py-20 my-20 flex justify-center relative overflow-hidden">
//     {/* Blur Backgrounds */}
//     <div className="absolute top-[200px] right-[-150px] w-[400px] h-[150px] bg-white rounded-full filter blur-[150px] opacity-50 z-0"></div>
//     <div className="absolute bottom-[-120px] left-[-150px] w-[400px] h-[200px] bg-white rounded-full filter blur-[150px] opacity-40 z-0"></div>

//     {/* Content Container */}
//     <div className="container mx-auto px-6 relative z-10 flex items-center">
//       {/* Left Image */}
//       <div className="hidden lg:block w-1/4 pr-8">
//         <motion.img 
//           src={LeftImage} // Replace with your image path
//           alt="Our values illustration"
//           className="rounded-2xl object-cover h-full max-h-[500px]"
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>

//       {/* Main Content */}
//       <div className="flex-3">
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//               Our Values
//             </span>
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             The principles that guide everything we do
//           </p>
//         </motion.div>

//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
//             <span className="bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
//               Our Values
//             </span>
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             The principles that guide everything we do
//           </p>
//         </motion.div>
//       </div>

//       {/* Right Image */}
//       <div className="hidden lg:block w-1/4 pl-8">
//         <motion.img 
//           src={rightImage}  // Replace with your image path
//           alt="Our values illustration"
//           className="rounded-2xl object-cover h-full max-h-[500px]"
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         />
//       </div>
//     </div>
//   </section>
// );








// import { motion } from 'framer-motion';
// import rightImage from '../../assets/3d-rendering-target-bulb-icon 1.jpg';
// import leftImage from '../../assets/3d-rendering-target-bulb-icon 1.jpg';

// export const value = {
//   title: "Shaping the Future of Experiential Innovation",
//   description: "We aspire to redefine how the world celebrates by creating Experiences that echo long after the final moment."
// };

// export const ValuesSection = () => (
//   <section className="py-20 my-20 relative overflow-hidden">
//     {/* Blur Backgrounds */}
//     <div className="absolute top-[200px] right-[-150px] w-[400px] h-[150px] bg-white rounded-full filter blur-[150px] opacity-60 z-0"></div>

//     {/* Centered Container */}
//     <div className="container mx-auto px-6 py-10 my-5 relative z-10">
//       {/* Header */}
//       <motion.div
//         className="text-center mb-16"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="absolute left-1/2 bottom-1/2 w-64 h-20 -translate-x-1/2 -translate-y-1/2 bg-white opacity-100 blur-[90px] z-0"></div>
//         <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white mt-6">
//           <span className="text-[#D7EEFF] text-transparent bg-clip-text">
//             Our Vision
//           </span>
//         </h2>
//       </motion.div>

//       {/* Main Content with Images */}
//       <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
//         {/* Left Image - Hidden on mobile */}
//         <motion.div 
//           className="hidden lg:block w-full max-w-[350px]"
//           initial={{ opacity: 0, x: -20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img 
//             src={leftImage}
//             alt="Our values illustration"
//             className="rounded-2xl object-cover w-full h-auto"
//           />
//         </motion.div>

//         {/* Values Cards */}
//         <motion.div
//             className="w-full max-w-2xl text-center"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 type: "spring",
//                 stiffness: 100
//               }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <h3 className="text-[55px] font-bold  mb-4 bg-gradient-to-r from-blue-100 to-blue-600 text-transparent bg-clip-text">
//                 {value.title}
//               </h3>
//               <p className="text-white text-xl md:text-2xl max-w-2xl mx-auto">
//                 {value.description}
//               </p>
//             </motion.div>
//           </motion.div>

//         {/* Right Image - Hidden on mobile */}
//         <motion.div 
//           className="hidden lg:block w-full max-w-[350px]"
//           initial={{ opacity: 0, x: 20 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img 
//             src={rightImage}
//             alt="Our values illustration"
//             className="rounded-2xl object-cover w-full h-auto"
//           />
//         </motion.div>
//       </div>
//     </div>
//   </section>
// );















import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

// Correct way to access environment variables in a Vite project
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

interface ImageFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface GalleryImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: ImageFormat;
    small?: ImageFormat;
    medium?: ImageFormat;
    large?: ImageFormat;
  };
  url: string;
  createdAt: string;
}

interface Event {
  id: number;
  documentId: string;
  titles: string;
  description: string | null;
  date: string | null;
  location: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  slug: string;
  gallery: GalleryImage[];
}

interface ApiResponse {
  data: Event[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// Reusable component for displaying a single gallery image
const GalleryImageCard = ({ image, className, animationProps }: { image: GalleryImage; className: string; animationProps: object }) => {
  const getImageUrl = () => {
    if (image.width > 1200 && image.formats?.large) {
      return `${API_BASE_URL}${image.formats.large.url}`;
    }
    if (image.width > 800 && image.formats?.medium) {
      return `${API_BASE_URL}${image.formats.medium.url}`;
    }
    if (image.width > 400 && image.formats?.small) {
      return `${API_BASE_URL}${image.formats.small.url}`;
    }
    return `${API_BASE_URL}${image.url}`;
  };

  const altText = image.alternativeText || `Gallery image: ${image.name}`;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      {...animationProps}
    >
      <img
        src={getImageUrl()}
        alt={altText}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.div>
  );
};

// Component to handle the main grid layout
const GalleryLayout = ({ gallery }: { gallery: GalleryImage[] }) => {
  // A configuration array to define the layout without hardcoding indices
  const layoutConfig = [
    { index: 3, className: "h-[300px]", delay: 0.2 },
    { index: 4, className: "h-[300px]", delay: 0.2 },
    { index: 0, className: "h-48 sm:h-64 md:h-72 lg:h-80", delay: 0 },
    { index: 1, className: "flex-1", delay: 0.3 },
    { index: 2, className: "flex-1", delay: 0.3 },
    { index: 5, className: "h-[300px]", delay: 0.2 },
    { index: 6, className: "h-[300px]", delay: 0.2 },
  ];

  // Helper function to render a single image card based on config
  const renderImage = (config: { index: any; className: any; delay: any; }) => {
    const image = gallery[config.index];
    if (!image) return null;
    return (
      <GalleryImageCard
        key={image.id}
        image={image}
        className={config.className}
        animationProps={{ transition: { delay: config.delay } }}
      />
    );
  };

  // Render the two vertical side columns and the main grid
  return (
    <div className="flex gap-2 md:gap-4">
      {/* Left side - two taller vertical images */}
      <div className="hidden md:flex flex-col w-[150px] lg:w-[200px] gap-2 md:gap-4">
        {renderImage(layoutConfig[0])}
        {renderImage(layoutConfig[1])}
      </div>

      {/* Main grid area */}
      <div className="flex-1 flex flex-col gap-2 md:gap-4">
        {renderImage(layoutConfig[2])}
        <div className="flex gap-2 md:gap-4 h-32 sm:h-40 md:h-48">
          {renderImage(layoutConfig[3])}
          {renderImage(layoutConfig[4])}
        </div>
      </div>

      {/* Right side - two taller vertical images */}
      <div className="hidden md:flex flex-col w-[150px] lg:w-[200px] gap-2 md:gap-4">
        {renderImage(layoutConfig[5])}
        {renderImage(layoutConfig[6])}
      </div>
    </div>
  );
};

const ValuesSection = () => {
  const [eventData, setEventData] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGalleryData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get<ApiResponse>(
        `${API_BASE_URL}/api/events?filters[slug][$eq]=About-Page-vision&populate=gallery`
      );

      if (response.data.data.length > 0) {
        setEventData(response.data.data[0]);
      } else {
        setError('No event found with the specified slug.');
      }
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      setError('Failed to load gallery data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []); // Run only on mount

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        <AnimatePresence mode="wait">
          {error ? (
            <motion.div
              key="error-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-10"
            >
              <p className="text-red-500 font-semibold">{error}</p>
              <button
                onClick={fetchGalleryData}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Retry
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="content-state"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  {eventData?.titles}
                </h2>
                {eventData?.description && (
                  <p className="mt-4 text-xl text-gray-600">
                    {eventData.description}
                  </p>
                )}
              </div>

              {eventData?.gallery.length && eventData.gallery.length < 7 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500">Not enough images in gallery (need at least 7).</p>
                </div>
              ) : (
                <>
                  <div className="hidden md:flex justify-between items-end mb-4">
                    <div className="w-[150px] lg:w-[200px]"></div>
                    <h2 className="text-3xl font-bold text-center flex-1 px-4">
                      Our Vision in Pictures
                    </h2>
                    <div className="w-[150px] lg:w-[200px]"></div>
                  </div>
                  {eventData?.gallery && <GalleryLayout gallery={eventData.gallery} />}
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ValuesSection;