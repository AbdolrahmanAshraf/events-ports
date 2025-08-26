import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define the Strapi interfaces
interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface StrapiMedia {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

interface StoryData {
  description?: string;
  gallery: StrapiMedia[];
}

export const StorySection = () => {
  const [storyData, setStoryData] = useState<StoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStoryData = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/events?filters[slug][$eq]=About-story&populate=gallery'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch story data');
        }
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const storyItem = data.data[0];
          setStoryData({
            description: storyItem.description,
            gallery: storyItem.gallery || []
          });
        } else {
          throw new Error('No story data found');
        }
      } catch (error: any) {
        console.error('Error fetching story data from Strapi:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStoryData();
  }, []);

  if (loading) {
    return (
      <motion.div
        className="w-full p-6 sm:p-8 mb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="absolute top-0 right-0 w-[40vw] h-[10vh] bg-white rounded-full filter blur-[100px] opacity-50 translate-x-1/4 translate-y-1/4 z-10"></div>
          <div className="flex flex-col lg:flex-row gap-6 py-12 my-12 items-center relative z-10">
            {/* Left: Text */}
            <div className="w-full text-center lg:text-left">
              <div className="h-12 bg-gray-300 rounded animate-pulse mb-6"></div>
              <div className="h-16 bg-gray-300 rounded animate-pulse mb-6"></div>
              <div className="h-24 bg-gray-300 rounded animate-pulse mb-8"></div>
            </div>

            {/* Right: Images */}
            <div className="w-full lg:w-1/2 rounded flex justify-center">
              <div className="flex flex-col items-center gap-6">
                <div className="w-40 sm:w-52 md:w-60 aspect-[1.15] bg-gray-300 rounded animate-pulse"></div>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-28 sm:w-36 md:w-40 aspect-[1.15] bg-gray-300 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="w-full p-6 sm:p-8 mb-20 relative overflow-hidden flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full text-center text-white py-20">
          <p>Error loading story content: {error}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="w-full p-6 sm:p-8 mb-20 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">

        {/* SVG Clip Path */}
<svg width="0" height="0">
  <defs>
    <clipPath id="roundedTriangle" clipPathUnits="objectBoundingBox">
      <path d="
        M 0.5, 0.05
A 0.05,0.14 0 0 1 0.56,0.09
        L 0.95, 0.90
        A 0.05, 0.05 0 0 1 0.90, 0.95
        L 0.10, 0.95
        A 0.05, 0.05 0 0 1 0.05, 0.90
        Z
      " />
    </clipPath>
  </defs>
</svg>

        <div className="w-full flex flex-col lg:flex-row gap-12 py-20 my-20 items-center relative z-10">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left me-6">
            <motion.h2
              className="text-[48px] sm:text-4xl font-bold font-dancing text-white mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our Story
            </motion.h2>
            <motion.p
              className="text-[50px] mb-6 leading-relaxed bg-clip-text text-transparent bg-[linear-gradient(to_right,#A1A1A1_22%,#FFFFFF_49%,#A1A1A1_77%)] font-playfair"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Our Journey to Crafting <br /> Timeless Experiences
            </motion.p>
            <motion.p
              className="text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {storyData?.description ||
                'Our team of 50+ creative professionals brings diverse expertise to every project, ensuring each event is tailored to our clients\' unique vision.'}
            </motion.p>
          </div>

          {/* Right: Images */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center gap-6">
              {/* Top triangle */}
              {storyData?.gallery && storyData.gallery.length > 0 && (
                <div
                  className="w-60 sm:w-72 md:w-80 aspect-[1.15] shadow-xl overflow-hidden"
                  style={{ clipPath: 'url(#roundedTriangle)' }}
                >
                  <img
                    src={`http://localhost:1337${storyData.gallery[0].url}`}
                    alt={storyData.gallery[0].alternativeText || 'Top'}
                    className="w-full h-full object-cover hover:scale-110 hover:shadow-2xl transition-all duration-500"
                  />
                </div>
              )}

              {/* Bottom triangles */}
              <div className="flex flex-col sm:flex-row justify-center -space-x-15 sm:-space-x-[15%] -mt-10">
                {storyData?.gallery && storyData.gallery.slice(1, 4).map((image, i) => (
                  <div
                    key={image.id}
                    className={`w-60 sm:w-72 md:w-80 aspect-[1.15] overflow-hidden ${
                      i === 1 ? 'rotate-180' : ''
                    }`}
                    style={{ clipPath: 'url(#roundedTriangle)' }}
                  >
                    <img
                      src={`http://localhost:1337${image.url}`}
                      alt={image.alternativeText || `Triangle ${i + 1}`}
                      className={`w-full h-full object-cover hover:scale-110 hover:shadow-2xl transition-all duration-500 ${
                        i === 1 ? 'rotate-180' : '' // re-flip the image back
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};