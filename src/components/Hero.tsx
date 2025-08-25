import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
  FaYoutube
} from 'react-icons/fa';
import { ReactNode, useEffect, useState } from 'react';

type SocialIconProps = {
  icon: ReactNode;
  color: string;
  url: string;
  label: string;
};

type HeroProps = {
  displayText: string;
};

interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface StrapiMedia {
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

const Hero: React.FC<HeroProps> = ({ displayText }) => {
  const [videoInfo, setVideoInfo] = useState<{
    url: string;
    alt: string;
  } | null>(null);
  const [logoInfo, setLogoInfo] = useState<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  } | null>(null);
  const [loading, setLoading] = useState({
    video: true,
    logo: true
  });
  const [error, setError] = useState({
    video: null as string | null,
    logo: null as string | null
  });

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        // Fetch video
        const videoResponse = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=home-video&populate=coverImage');
        if (!videoResponse.ok) {
          throw new Error('Failed to fetch video');
        }
        const videoData = await videoResponse.json();
        const videoMedia = videoData?.data?.[0]?.coverImage as StrapiMedia;

        if (videoMedia) {
          setVideoInfo({
            url: `http://localhost:1337${videoMedia.url}`,
            alt: videoMedia.alternativeText || 'Eventino Hero Video',
          });
        } else {
          throw new Error('No video found in response');
        }
      } catch (error: any) {
        console.error('Error fetching video from Strapi:', error);
        setError(prev => ({ ...prev, video: error.message }));
        setVideoInfo(null);
      } finally {
        setLoading(prev => ({ ...prev, video: false }));
      }

      try {
        // Fetch logo
        const logoResponse = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=logo&populate=coverImage');
        if (!logoResponse.ok) {
          throw new Error('Failed to fetch logo');
        }
        const logoData = await logoResponse.json();
        const logoMedia = logoData?.data?.[0]?.coverImage as StrapiMedia;

        if (logoMedia) {
          // Use large format if available, otherwise use original
          const logoUrl = logoMedia.formats?.large?.url || logoMedia.url;
          setLogoInfo({
            url: `http://localhost:1337${logoUrl}`,
            alt: logoMedia.alternativeText || 'Eventino Logo',
            width: logoMedia.width,
            height: logoMedia.height
          });
        } else {
          throw new Error('No logo found in response');
        }
      } catch (error: any) {
        console.error('Error fetching logo from Strapi:', error);
        setError(prev => ({ ...prev, logo: error.message }));
        setLogoInfo(null);
      } finally {
        setLoading(prev => ({ ...prev, logo: false }));
      }
    };

    fetchHeroData();
  }, []);

  return (
    <section className="relative h-screen bg-black overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {loading.video ? (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white">Loading video...</div>
          </div>
        ) : error.video ? (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white">Error loading video</div>
          </div>
        ) : videoInfo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-label={videoInfo.alt}
          >
            <source src={videoInfo.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gray-800 flex items-center justify-center">
            <div className="text-white">No video available</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent opacity-80"></div>
      </div>

      {/* Blur element */}
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[#2D336B] rounded-full filter blur-[300px] opacity-100 translate-x-1/4 translate-y-1/4 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center justify-center text-white">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full gap-12 text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Left Side - Text */}
          <div className="flex-1">
<motion.h5
  className="text-[68px] mb-2 font-light font-playfair bg-clip-text text-transparent 
             bg-[linear-gradient(to_right,#A1A1A1_22%,#FFFFFF_49%,#A1A1A1_77%)]"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.6 }}
>
  Creating Moments That Last a Lifetime
</motion.h5>


            <motion.h1
              className="text-[16px] font-nunito mb-4 text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              At Eventino, we design experiences that transcend the moment and <br/> stay etched in memory. By blending innovation, cultural richness, and <br/> precision, we shape events that not only impress — but endure.
            </motion.h1>


            <motion.button
              className="px-10 py-4 mt-6 me-8 rounded-full bg-transparent border border-white text-white hover:shadow-lg transition-all font-outfit text-[15px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Link to="/gallery">Explore Our Work</Link>
            </motion.button>

              <motion.button
              className="px-10 py-4 mt-6 rounded-full bg-transparent border border-white text-white hover:shadow-lg transition-all font-outfit text-[15px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Link to="/contact">Start Your Experience</Link>
            </motion.button>

            <motion.div
              className="flex justify-center md:justify-start space-x-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <SocialIcon icon={<FaFacebookF />} color="#3b5998" url="https://facebook.com" label="Facebook" />
              <SocialIcon icon={<FaTwitter />} color="#1da1f2" url="https://twitter.com" label="Twitter" />
              <SocialIcon icon={<FaLinkedinIn />} color="#0077b5" url="https://linkedin.com" label="LinkedIn" />
              <SocialIcon icon={<FaBehance />} color="#053eff" url="https://behance.net" label="Behance" />
              <SocialIcon icon={<FaYoutube />} color="#ff0000" url="https://youtube.com" label="YouTube" />
            </motion.div>
          </div>

          {/* Right Side - Logo */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {loading.logo ? (
              <div className="w-48 md:w-64 lg:w-80 h-48 bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading logo...</div>
              </div>
            ) : error.logo ? (
              <div className="w-48 md:w-64 lg:w-80 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">Error loading logo</div>
              </div>
            ) : logoInfo ? (
              <img
                src={logoInfo.url}
                alt={logoInfo.alt}
                className="w-48 md:w-64 lg:w-80"
                width={logoInfo.width}
                height={logoInfo.height}
                loading="lazy"
              />
            ) : (
              <div className="w-48 md:w-64 lg:w-80 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-gray-500">No logo available</div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, color, url, label }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    whileHover={{ y: -5 }}
    whileTap={{ scale: 0.9 }}
    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
    style={{ color }}
  >
    {icon}
  </motion.a>
);

export default Hero;