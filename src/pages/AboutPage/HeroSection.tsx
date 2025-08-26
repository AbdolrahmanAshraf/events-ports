import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

interface StrapiImage {
  id: number;
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

export const HeroSection = () => {
  const [heroImage, setHeroImage] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=About-hero&populate=coverImage');
        if (!response.ok) {
          throw new Error('Failed to fetch hero image');
        }
        
        const data = await response.json();
        const coverImageData = data?.data?.[0]?.coverImage as StrapiImage;
        
        if (coverImageData) {
          const imageUrl = coverImageData.formats?.large?.url || coverImageData.url;
          setHeroImage(`http://localhost:1337${imageUrl}`);
        }
      } catch (error: any) {
        console.error('Error fetching hero image from Strapi:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroImage();
  }, []);

  if (loading) {
    return (
      <section className="relative pb-20 overflow-hidden h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </section>
    );
  }

  return (
    <section className="relative pb-20 overflow-hidden h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-20 flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-clip-text text-transparent bg-[linear-gradient(to_right,#A1A1A1_22%,#FFFFFF_49%,#A1A1A1_77%)] w-full"
        >
          <h1 className="text-[60px] font-playfair leading-tight">
            Where Moments Become <br/> Memories That Lasts Forever
          </h1>
        </motion.div>
      </div>
    </section>
  );
};
