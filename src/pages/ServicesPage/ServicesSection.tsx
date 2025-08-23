import { motion } from "framer-motion";
import ourServices from "../../assets/imgs/Services/ourServices.png";

import serviceOne from "../../assets/imgs/Services/3.png";
import serviceTwo from "../../assets/imgs/Services/4.png";
import serviceThree from "../../assets/imgs/Services/6.png";

export const ServicesSection = () => (
  <>
    {/* First part */}
    <section className="relative w-full">
      <div className="container-fluid absolute top-0 left-0 w-[5rem] h-[40vh] bg-[#fff] rounded-full blur-[150px] opacity-50"></div>

      <motion.section
        className="p-6 sm:p-12 mb-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Parent Flexbox */}
        <div className="container flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 relative z-10">
          {/* Left Content */}
          <div className="w-full max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-dancing text-white mb-4 sm:mb-6 select-none cursor-pointer"
              initial={{ opacity: 0, y: 20, x: 50 }}
              whileInView={{ opacity: 1, y: 0, x: -50 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h2>

            <motion.h3
              className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 leading-snug bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent select-none cursor-pointer"
              initial={{ opacity: 0, y: 20, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: -25 }}
              transition={{ delay: 0.2 }}
            >
              Our Expertise, Tailored to Your Vision
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed select-none cursor-pointer"
              initial={{ opacity: 0, y: 20, x: 30 }}
              whileInView={{ opacity: 1, y: 0, x: 25 }}
              transition={{ delay: 0.3 }}
            >
              Explore the services that set Eventino apart — each designed to ensure your event is as seamless as it is spectacular.
            </motion.p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src={ourServices}
              alt="Service Images"
              className="max-w-sm w-full border-[#1d51aa] border-[.4rem] rounded-3xl md:max-w-md lg:max-w-lg xl:max-w-xl select-none cursor-pointer"
            />
          </div>
        </div>
      </motion.section>
    </section>

    {/* Second part */}
    <section className="relative w-full">
      <div className="flex flex-col items-center justify-center py-12">
        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 leading-relaxed select-none cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Click on Each service to view service details, photos, and related events
        </motion.p>

        {/* Services Images */}
        <div className="flex flex-col md:flex-row w-full justify-center items-center gap-6">
          {/* Service One */}
          <div className="relative group w-full md:w-1/3 select-none cursor-pointer">
            <img
              src={serviceOne}
              alt="First Service"
              className="w-full h-56 object-cover rounded-full border-8 border-[#4f69d1] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Layer */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center select-none">
                Event <br /> Management
              </h1>
            </div>
          </div>

          {/* Service Two */}
          <div className="relative group w-full md:w-1/3 select-none cursor-pointer">
            <img
              src={serviceTwo}
              alt="Second Service"
              className="w-full h-56  rounded-full border-8 border-[#4f69d1] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Layer */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center select-none">
                Audio <br /> Solutions
              </h1>
            </div>
          </div>

          {/* Service Three */}
          <div className="relative group w-full md:w-1/3 select-none cursor-pointer">
            <img
              src={serviceThree}
              alt="Third Service"
              className="w-full h-56 rounded-full border-8 border-[#4f69d1] transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover Layer */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-2xl md:text-3xl font-bold text-white text-center select-none">
                Video <br /> Production
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);
