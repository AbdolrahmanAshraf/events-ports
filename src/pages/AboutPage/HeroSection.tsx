import { motion } from "framer-motion";
import HeroImage from "../../assets/IMG-20250412-WA0028 1.png";

export const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      {/* Optional Layer */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#8BAEFF] via-[#0007D3] to-[#2533DE] opacity-40"></div> */}
    </div>

    {/* Content */}
    <div className="relative z-20 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-montserrat text-[#67baf9] mb-6 leading-tight">
          Where Moments Become <br /> Memories That Last Forever
        </h1>

        <p className="text-base font-sans md:text-2xl text-[1rem] leading-relaxed opacity-90 mb-8">
        We are Eventino — curators of experiences that transcend time and Expectation.
        </p>

      </motion.div>
    </div>

    {/* Decorative Blob */}
    <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-[#2D336B] rounded-full filter blur-[200px] opacity-100 translate-x-1/4 translate-y-1/4 z-10"></div>
  </section>
);
