import { motion } from "framer-motion";
import HeroImage from "../../assets/imgs/Services/ServicesBG.png";

export const HeroSection = () => (
  <section className="relative h-screen  text-center px-6 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      {/* Optional Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061c4e] via-[#0a0a10b9] to-[#2533DE] opacity-40"></div>
    </div>

    {/* Content */}
    <div className="relative container h-[70vh]  flex justify-center items-center z-20 max-w-3xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        {/* Gradient Text */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat text-start font-bold mb-6 leading-tight bg-gradient-to-r from-[#D1EBFB] via-[#8CA6FF] to-[#ffffff] bg-clip-text text-transparent">
          Expertly Crafted Events. <br /> Unforgettable Experiences
        </h1>

        <p className="text-base font-sans md:text-2xl text-[1rem] text-white leading-relaxed opacity-90 mb-8">
          Our comprehensive services are designed to transform your vision into a lasting memory — with precision, innovation, and distinction.
        </p>
      </motion.div>
    </div>

    {/* Last Paragraph at Bottom */}
    <div className="container">
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative z-20 text-white text-sm md:text-lg leading-relaxed opacity-90 px-4 pb-6  mx-auto"
      >
        Whether orchestrating a global conference, curating a cultural celebration, or designing an intimate wedding, Eventino delivers end-to-end event solutions — meticulously crafted to inspire and endure.
      </motion.p>
    </div>

  </section>
);
