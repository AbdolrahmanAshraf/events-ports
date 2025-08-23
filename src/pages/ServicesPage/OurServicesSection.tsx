import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import one from "../../assets/imgs/OurVision/4.png";
import two from "../../assets/imgs/OurVision/5.png";
import three from "../../assets/imgs/OurVision/6.png";
import four from "../../assets/imgs/OurVision/7.png";

const tileVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const borderVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const OurServicesSection = () => (
  <section className="w-full relative py-16">
    <div className="container mx-auto px-4 grid lg:grid-cols-2 items-center gap-0 md:gap-12">

      {/* Left: Cross Layout */}
      <div className="relative w-fit mx-auto lg:mx-0">
        <div className="grid grid-cols-3 grid-rows-3 place-items-center relative gap-4">

          {/* Top */}
          <motion.div
            className="corner-accent -mb-44 z-10"
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            style={{ gridColumnStart: 2, gridRowStart: 1 }}
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative group w-32 h-40 rounded-xl overflow-hidden shadow-lg"
            >
              <Link to="/gallery" className="block w-full h-full">
                <motion.img
                  src={one}
                  alt="Top"
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.08 },
                  }}
                  transition={{
                    rotate: { duration: 0.7, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold">View More</span>
                </div>
              </Link>

              <motion.span
                className="absolute -top-1 -left-1 w-10 h-10 border-t-8 border-l-8 border-[#4f69d1] rounded-tl-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute -bottom-1 -right-1 w-10 h-10 border-b-8 border-r-8 border-[#4f69d1] rounded-br-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          {/* Left */}
          <motion.div
            className="corner-accent z-20"
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ gridColumnStart: 1, gridRowStart: 2 }}
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative group w-32 h-40 rounded-xl overflow-hidden shadow-lg"
            >
              <Link to="/gallery" className="block w-full h-full">
                <motion.img
                  src={two}
                  alt="Left"
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.08 },
                  }}
                  transition={{
                    rotate: { duration: 0.7, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold">View More</span>
                </div>
              </Link>

              <motion.span
                className="absolute -top-1 -right-1 w-10 h-10 border-t-8 border-r-8 border-[#4f69d1] rounded-tr-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute -bottom-1 -left-1 w-10 h-10 border-b-8 border-l-8 border-[#4f69d1] rounded-bl-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="corner-accent z-20"
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ gridColumnStart: 3, gridRowStart: 2 }}
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative group w-32 h-40 rounded-xl overflow-hidden shadow-lg"
            >
              <Link to="/gallery" className="block w-full h-full">
                <motion.img
                  src={three}
                  alt="Right"
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.08 },
                  }}
                  transition={{
                    rotate: { duration: 0.7, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold">View More</span>
                </div>
              </Link>

              <motion.span
                className="absolute -top-1 -left-1 w-10 h-10 border-t-8 border-l-8 border-[#4f69d1] rounded-tl-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute -bottom-1 -right-1 w-10 h-10 border-b-8 border-r-8 border-[#4f69d1] rounded-br-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            className="corner-accent -mt-44 z-10"
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ gridColumnStart: 2, gridRowStart: 3 }}
          >
            <motion.div
              initial="rest"
              animate="rest"
              whileHover="hover"
              className="relative group w-32 h-40 rounded-xl overflow-hidden shadow-lg"
            >
              <Link to="/gallery" className="block w-full h-full">
                <motion.img
                  src={four}
                  alt="Bottom"
                  className="w-full h-full object-cover"
                  variants={{
                    rest: { rotate: 0, scale: 1 },
                    hover: { rotate: 360, scale: 1.08 },
                  }}
                  transition={{
                    rotate: { duration: 0.7, ease: "easeInOut" },
                    scale: { duration: 0.3 },
                  }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-semibold">View More</span>
                </div>
              </Link>

              <motion.span
                className="absolute -top-1 -right-1 w-10 h-10 border-t-8 border-r-8 border-[#4f69d1] rounded-tr-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <motion.span
                className="absolute -bottom-1 -left-1 w-10 h-10 border-b-8 border-l-8 border-[#4f69d1] rounded-bl-2xl"
                variants={borderVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-sans text-white mb-4 sm:mb-6 select-none cursor-pointer"
          initial={{ opacity: 0, y: 20, x: 50 }}
          whileInView={{ opacity: 1, y: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Event Management
        </motion.h2>

        <motion.p
          className="text-xl sm:text-2xl  lg:text-3xl font-semibold mb-4 sm:mb-6 leading-snug bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent select-none cursor-pointer"
          initial={{ opacity: 0, y: 20, x: 30 }}
          whileInView={{ opacity: 1, y: 0, x: -25 }}
          transition={{ delay: 0.2 }}
        >
          From Strategy To Flawless Execution, We Oversee Every Element
          With Precision And Creativity.
        </motion.p>
      </div>

    </div>
  </section>
);
