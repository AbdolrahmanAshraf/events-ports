// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import img1 from '../../assets/21.png';
// import img2 from '../../assets/31.png';
// import img3 from '../../assets/41.png';
// import img4 from '../../assets/51.png';
// import img5 from '../../assets/61.png'; // Adjust the path based on your actual folder structure

// const HeroSection = () => {
//   const images = [img1, img2, img3, img4, img5];

//   const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//     cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
//   };

//   const carouselSettingsDown = {
//     ...carouselSettings,
//     rtl: true // This makes the slider go in the opposite direction (downward)
//   };

//   return (
//     <section className="relative h-screen w-full bg-[#1D2A5F] overflow-hidden">
//       <div className="absolute inset-0 flex">
//         {[0, 1, 2].map((columnIndex) => {
//           // Reverse image order only for the middle column
//           const carouselImages =
//             columnIndex === 1
//               ? [...images.slice().reverse(), ...images.slice(0, 3).reverse()]
//               : [...images, ...images.slice(0, 3)];

//           return (
//             <div
//               key={`column-${columnIndex}`}
//               className="w-1/3 h-full flex flex-col items-center justify-center"
//             >
//               <Slider {...(columnIndex === 1 ? carouselSettingsDown : carouselSettings)}>
//                 {carouselImages.map((img, index) => (
//                   <div key={`img-${columnIndex}-${index}`} className="px-2">
//                     <div className="w-full h-full p-4">
//                       <img
//                         src={img}
//                         alt={`Carousel image ${index}`}
//                         className="w-full h-[500px] object-cover rounded-xl shadow-lg"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </Slider>

//               {/* Center column content */}
//               {columnIndex === 1 && (
//                 <div className="absolute text-center z-10 px-4">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                     <span className="bg-gradient-to-r from-red-500 via-blue-200 to-blue-500 bg-clip-text text-transparent">
//                       A Glimpse Into Unforgettable Moments
//                     </span>
//                   </h1>
//                   <p className="text-white text-lg md:text-xl mb-4">
//                     Every image tells a story of vision, connection, and innovation — brought to life by Eventino.
//                   </p>
//                   <p className="text-white text-base md:text-lg max-w-2xl">
//                     Our gallery is more than a portfolio; it is a celebration of the memories we have crafted for clients who demand nothing less than extraordinary.
//                     <br />
//                     From grand corporate gatherings to intimate cultural soirées, each frame captures the essence of what makes an Eventino experience timeless.
//                   </p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };
// export default HeroSection;































// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import img1 from '../../assets/21.png';
// import img2 from '../../assets/31.png';
// import img3 from '../../assets/41.png';
// import img4 from '../../assets/51.png';
// import img5 from '../../assets/61.png';

// const HeroSection = () => {
//   const images = [img1, img2, img3, img4, img5];

//   // Base settings for all columns
//   const baseSettings = {
//     dots: false,
//     infinite: true,
//     speed: 900,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     autoplay: true,
//     autoplaySpeed: 500,
//     arrows: false,
//     cssEase: 'linear',
//     pauseOnHover: false,
//     pauseOnFocus: false,
//     waitForAnimate: false,
//     useTransform: false,
//   };

//   // Left and right columns settings (scroll up, show 3 slides)
//   const carouselSettingsUp = {
//     ...baseSettings,
//     slidesToShow: 3,
//   };

//   // Middle column settings (scroll down, show 3 slides)
//   const carouselSettingsDown = {
//     ...baseSettings,
//     slidesToShow: 3,
//     rtl: true, // Makes it scroll downward
//   };

//   // Duplicate images to create a longer loop
//   const extendedImages = Array(4).fill(images).flat();  
  
//   return (
//     <section className="relative h-screen w-full bg-[#1D2A5F] overflow-hidden">
//       <div className="flex h-full w-full">
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black bg-opacity-60 z-10 pointer-events-none" />

//         {[0, 1, 2].map((columnIndex) => {
//           const carouselImages =
//             columnIndex === 1 ? [...extendedImages.slice().reverse()] : [...extendedImages];

//           return (
//             <div
//               key={`column-${columnIndex}`}
//               className={`w-1/3 h-full flex flex-col items-center justify-center ${
//                 columnIndex === 1 ? 'relative' : ''
//               }`}
//             >
//               <div className="h-full w-full overflow-hidden">
//                 <Slider
//                   {...(columnIndex === 1 ? carouselSettingsDown : carouselSettingsUp)}
//                   className="h-full"
//                 >
//                   {carouselImages.map((img, index) => (
//                     <div 
//                       key={`img-${columnIndex}-${index}`} 
//                       className="px-2 h-[33.33vh]"
//                     >
//                       <div className="w-full h-full p-2">
//                         <img
//                           src={img}
//                           alt={`Carousel image ${index}`}
//                           className="w-full h-full object-cover rounded-xl shadow-lg"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </Slider>
//               </div>

//               {/* Center column text */}
//               {columnIndex === 1 && (
//                 <div className="absolute text-center z-20 px-4 w-full">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                     <span className="bg-gradient-to-r from-red-500 via-blue-200 to-blue-500 bg-clip-text text-transparent">
//                       A Glimpse Into Unforgettable Moments
//                     </span>
//                   </h1>
//                   <p className="text-white text-lg md:text-xl mb-4">
//                     Every image tells a story of vision, connection, and innovation — brought to life by Eventino.
//                   </p>
//                   <p className="text-white text-base md:text-lg max-w-2xl mx-auto">
//                     Our gallery is more than a portfolio; it is a celebration of the memories we have crafted for clients who demand nothing less than extraordinary.
//                     <br />
//                     From grand corporate gatherings to intimate cultural soirées, each frame captures the essence of what makes an Eventino experience timeless.
//                   </p>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
























// import React from "react";
// import img1 from "../../assets/21.png";
// import img2 from "../../assets/31.png";
// import img3 from "../../assets/41.png";
// import img4 from "../../assets/51.png";
// import img5 from "../../assets/61.png";

// const images = [img1, img2, img3, img4, img5];

// // Double the strip so it loops seamlessly
// const buildStrip = () => [...images, ...images];

// const SCROLL_DURATION = 10; // seconds, lower is faster

// const HeroSection = () => {
//   const strip = buildStrip();
//   const stripRev = [...strip].reverse();

//   // Common animation style for all strips
//   const getAnimationStyle = (isDown: any) => ({
//     animationName: isDown ? "scroll-down" : "scroll-up",
//     animationDuration: `${SCROLL_DURATION}s`,
//     animationTimingFunction: "linear",
//     animationIterationCount: "infinite",
//     position: "absolute",
//     left: 0,
//     right: 0,
//   });

//   return (
//     <section className="relative h-screen w-full bg-[#1D2A5F] overflow-hidden">
//       <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

//       <div className="flex h-full w-full">
//         {[strip, stripRev, strip].map((column, idx) => {
//           const isCenter = idx === 1;
//           const isDown = isCenter;

//           return (
//             <div key={idx} className="relative w-1/3 h-full overflow-hidden">
//               {/* Two stacked strips for seamless loop */}
//               {[0, 1].map((dup) => (
//                <ul
//                key={dup}
//                style={{
//                  top: dup ? "100%" : 0,
//                  height: "200%",
//                  animationName: isDown ? "scroll-down" : "scroll-up",
//                  animationDuration: `${SCROLL_DURATION}s`,
//                  animationTimingFunction: "linear",
//                  animationIterationCount: "infinite",
//                  position: "absolute" as React.CSSProperties["position"],
//                  left: 0,
//                  right: 0,
//                }}
//              >
             
//                   {column.map((src, i) => (
//                     <li key={i} className="px-2 h-[33.33vh]">
//                       <div className="w-full h-full p-2">
//                         <img
//                           src={src}
//                           alt=""
//                           className="w-full h-full object-cover rounded-xl shadow-lg"
//                         />
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               ))}

//               {isCenter && (
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
//                   <h1 className="text-4xl md:text-6xl font-bold mb-4">
//                     <span className="bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent">
//                       A Glimpse Into Unforgettable Moments
//                     </span>
//                   </h1>
//                   <p className="text-white text-lg md:text-xl mb-4">
//                     Every image tells a story of vision, connection, and innovation — brought to life by Eventino.
//                   </p>
                
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

















































import React, { useState, useEffect } from "react";

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

const HeroSection = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=gallery-hero&populate=gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch gallery images');
        }
        
        const data = await response.json();
        const galleryData = data?.data?.[0]?.gallery as StrapiImage[];
        
        if (galleryData && galleryData.length > 0) {
          // Get the image URLs, preferring the small format if available
          const imageUrls = galleryData.map((image: StrapiImage) => {
            const imageUrl = image.formats?.small?.url || image.url;
            return `http://localhost:1337${imageUrl}`;
          });
          
          setImages(imageUrls);
        }
      } catch (error: any) {
        console.error('Error fetching gallery images from Strapi:', error);
        setError(error.message);
        
        // Fallback to placeholder images if API fails
        setImages([
          "https://via.placeholder.com/728x436/1D2A5F/FFFFFF?text=Eventino+1",
          "https://via.placeholder.com/728x430/1D2A5F/FFFFFF?text=Eventino+2",
          "https://via.placeholder.com/728x422/1D2A5F/FFFFFF?text=Eventino+3",
          "https://via.placeholder.com/699x418/1D2A5F/FFFFFF?text=Eventino+4",
          "https://via.placeholder.com/728x436/1D2A5F/FFFFFF?text=Eventino+5"
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Double the strip so it loops seamlessly
  const buildStrip = () => [...images, ...images, ...images];

  const SCROLL_DURATION = 40; // seconds, lower is faster

  const strip = buildStrip();
  const stripRev = [...strip].reverse();

  if (loading) {
    return (
      <section className="relative h-screen w-full bg-[#1D2A5F] overflow-hidden flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </section>
    );
  }

  return (
    <section className="relative h-screen w-full bg-[#1D2A5F] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />

      <div className="flex h-full w-full">
        {[strip, stripRev, strip].map((column, idx) => {
          const isCenter = idx === 1;
          const isDown = isCenter;

          return (
            <div key={idx} className="relative w-1/3 h-full overflow-hidden">
              {/* Two stacked strips for seamless loop */}
              {[0, 1].map((dup) => (
                <ul
                  key={dup}
                  style={{
                    top: dup ? "100%" : 0,
                    height: "400%",
                    animationName: isDown ? "scroll-down" : "scroll-up",
                    animationDuration: `${SCROLL_DURATION}s`,
                    animationTimingFunction: "linear",
                    animationIterationCount: "infinite",
                    position: "absolute" as React.CSSProperties["position"],
                    left: 0,
                    right: 0,
                  }}
                >
                  {column.map((src, i) => (
                    <li key={i} className="px-2 h-[33.33vh]">
                      <div className="w-full h-full p-2">
                        <img
                          src={src}
                          alt="Eventino gallery"
                          className="w-full h-full object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              ))}

              {isCenter && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent">
                      A Glimpse Into Unforgettable Moments
                    </span>
                  </h1>
                  <p className="text-white text-lg md:text-xl mb-4">
                    Every image tells a story of vision, connection, and innovation — brought to life by Eventino.
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Add CSS animations */}
      <style>
        {`
          @keyframes scroll-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          }
          
          @keyframes scroll-down {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(0); }
          }
        `}
      </style>
    </section>
  );
};

export default HeroSection;