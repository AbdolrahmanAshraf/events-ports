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
