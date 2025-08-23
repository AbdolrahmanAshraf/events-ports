import { motion } from "framer-motion";
import imageOne from "../../assets/imgs/charity-event.jpg";
import imageTwo from "../../assets/imgs/fashion-show.jpg";
import imageThree from "../../assets/imgs/luxury-wedding.jpg";
import imageFour from "../../assets/imgs/product-launch.jpg";

export const StorySection = () => (

  <motion.section
    className="p-6 sm:p-12 mb-20 relative overflow-hidden "
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Glow Effect */}

    <div className="absolute top-0 right-0 w-[40vw] h-[40vh] bg-white rounded-full blur-[150px] opacity-20"></div>

    <div className="container flex flex-col lg:flex-row gap-12 items-center relative z-10">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 px-4 sm:px-0">
  <motion.h2
    className="text-2xl sm:text-3xl md:text-4xl font-dancing text-white mb-4 sm:mb-6 text-center lg:text-left"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Our Story
  </motion.h2>

  <motion.h3
    className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug text-center lg:text-left 
               bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
  >
    Our Journey to Crafting Timeless Experiences
  </motion.h3>

  <motion.p
    className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed text-center lg:text-left"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    From day one and for +15 years, our mission has been simple: turn life’s milestones into legacies through innovation, cultural richness, and heartfelt connection.
  </motion.p>
</div>

      {/* Right Triangle Collage */}
      <div className="w-full lg:w-1/2 flex flex-col items-center gap-4">
        {/* Top Triangle */}
        <div className="clip-triangle w-48 h-40 overflow-hidden">
          <img src={imageOne} alt="Charity Event" className="w-full h-full object-cover" />
        </div>

        {/* Bottom Row (3 triangles) */}
        <div className="flex p-0 m-0">
          <div className="clip-triangle w-48 h-40 overflow-hidden">
            <img src={imageTwo} alt="Fashion Show" className="w-full h-full object-cover" />
          </div>

          {/* Flipped Triangle with negative horizontal margins */}
          <div className="clip-triangle w-48 h-40 overflow-hidden transform rotate-180 -mx-10">
            <img src={imageThree} alt="Luxury Wedding" className="w-full h-full object-cover" />
          </div>

          <div className="clip-triangle w-48 h-40 overflow-hidden">
            <img src={imageFour} alt="Product Launch" className="w-full h-full object-cover" />
          </div>
        </div>

      </div>
    </div>
  </motion.section>
);
