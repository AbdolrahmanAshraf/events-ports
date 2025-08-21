import React, { useEffect, useState } from 'react';

interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  url: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface CaptionConfig {
  text: string;
  className: string;
}

interface BulletCardProps {
  imageUrl: string;
  altText: string;
  isReversed?: boolean;
  className?: string;
  height?: number;
  captions?: CaptionConfig[]; // <-- multiple captions
}

const BulletCard: React.FC<BulletCardProps> = ({ 
  imageUrl, 
  altText, 
  isReversed = false, 
  className,
  height = 300,
  captions = [],
}) => {
  const borderRadiusStyle = {
    borderTopRightRadius: isReversed ? '0px' : `${height / 2}px`,
    borderBottomRightRadius: isReversed ? '0px' : `${height / 2}px`,
    borderTopLeftRadius: isReversed ? `${height / 2}px` : '0px',
    borderBottomLeftRadius: isReversed ? `${height / 2}px` : '0px',
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        width: '100%',
        height: `${height}px`,
        ...borderRadiusStyle,
      }}
    >
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-fill
                   transition-transform duration-300 ease-in-out 
                   hover:scale-105 hover:brightness-110"
        style={{
          ...borderRadiusStyle,
        }}
      />

      {/* Render multiple captions */}
      {captions.map((cap, idx) => (
        <div key={idx} className={cap.className}>
          {cap.text}
        </div>
      ))}
    </div>
  );
};

const Bullet: React.FC = () => {
  const [galleryImages, setGalleryImages] = useState<StrapiImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(
          'http://localhost:1337/api/events?filters[slug][$eq]=gallery-bullet&populate=gallery'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        const data = await response.json();
        const images = data?.data?.[0]?.gallery as StrapiImage[];
        
        if (images && images.length > 0) {
          setGalleryImages(images);
        }
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  const topImage = galleryImages[0] || null;
  const bottomImage = galleryImages[1] || null;

  const getBestImageUrl = (img: StrapiImage) => {
    return (
      img.formats?.large?.url ||
      img.formats?.medium?.url ||
      img.formats?.small?.url ||
      img.url
    );
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center 
                 gap-6 sm:gap-10 lg:gap-16 
                 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#1C295E' }}
    >
      {/* Top bullet */}
      {loading ? (
        <div className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] 
                        h-[160px] sm:h-[220px] lg:h-[300px] 
                        bg-gray-200 rounded-full animate-pulse 
                        -translate-x-[4vw] sm:-translate-x-[8vw] lg:-translate-x-[12vw]"></div>
      ) : error ? (
        <div className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] 
                        h-[160px] sm:h-[220px] lg:h-[300px] 
                        bg-gray-600 flex items-center justify-center text-white rounded-full 
                        -translate-x-[4vw] sm:-translate-x-[8vw] lg:-translate-x-[12vw]">
          Error loading image
        </div>
      ) : topImage ? (
        <BulletCard
          imageUrl={`http://localhost:1337${getBestImageUrl(topImage)}`}
          altText={topImage.alternativeText || "Gallery image"}
          className="-translate-x-[4vw] sm:-translate-x-[8vw] lg:-translate-x-[12vw] 
                     max-w-[85%] sm:max-w-[70%] lg:max-w-[50%]"
          height={300}
          captions={[
            {
              text: topImage.caption || "Saudi 2030 Vision",
              className:   "absolute bottom-[10%] left-[6%] font-bold text-[40px] " +
              "bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent " +
              "font-dancing",
            },
            {
              text: "KSA 2030 Vision Connection Exhibition",
              className: "absolute bottom-[1px] left-[12%] text-white text-[18px] px-3 py-1",
            },
          ]}
        />
      ) : null}

      {/* Bottom bullet */}
      {loading ? (
        <div className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] 
                        h-[200px] sm:h-[300px] lg:h-[400px] 
                        bg-gray-200 rounded-full animate-pulse 
                        translate-x-[4vw] sm:translate-x-[8vw] lg:translate-x-[12vw]"></div>
      ) : error ? (
        <div className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[60%] 
                        h-[200px] sm:h-[300px] lg:h-[400px] 
                        bg-gray-600 flex items-center justify-center text-white rounded-full 
                        translate-x-[4vw] sm:translate-x-[8vw] lg:translate-x-[12vw]">
          Error loading image
        </div>
      ) : bottomImage ? (
        <BulletCard
          imageUrl={`http://localhost:1337${getBestImageUrl(bottomImage)}`}
          altText={bottomImage.alternativeText || "Gallery image"}
          isReversed={true}
          className="translate-x-[4vw] sm:translate-x-[8vw] lg:translate-x-[12vw] 
                     max-w-[85%] sm:max-w-[70%] lg:max-w-[50%]"
          height={400}
          captions={[
            {
              text: bottomImage.caption || "Hail 2024 Health Expo",
              className:   "absolute bottom-[30%] right-[12%] font-bold text-[40px] rounded-lg " +
              "bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent " +
              "font-dancing",
            },
            {
              text: "Hail 2024 Health Exhibition About Youth Health & The New Med-Care  ",
              className: "absolute bottom-[25%] right-[11%] text-white text-[18px] px-2 py-1 rounded-lg",
            },
          ]}
        />
      ) : null}
    </div>
  );
};

export default Bullet;
