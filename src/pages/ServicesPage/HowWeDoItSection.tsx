import { motion } from 'framer-motion';

import img1 from '../../assets/services/image 19.png';
import img2 from '../../assets/services/image 20.png';
import img3 from '../../assets/services/image 21.png';
import img4 from '../../assets/services/image 22.png';
import img5 from '../../assets/services/image 23.png';
import img6 from '../../assets/services/Ellipse 22.png';
import processImg from '../../assets/services/3d-rendering-diagram-icon 1.png';

const steps = [
  {
    title: "Discovery Session",
    description: "We meet with you to explore your goals, aspirations, and the essence of your vision.",
    icon: "1",
    image: img1
  },
  {
    title: "Deep Understanding",
    description: "We carefully assess the dimensions, imagination, and ideas you envision—capturing every possibility.",
    icon: "2",
    image: img2
  },
  {
    title: "Strategic Planning",
    description: "Our team translates your vision into a practical, scalable plan—merging creativity and precision.",
    icon: "3",
    image: img3
  },
  {
    title: "Design & Conceptualization",
    description: "We craft immersive concepts, combining innovation, aesthetics, and cultural relevance.",
    icon: "4",
    image: img4
  },
  {
    title: "Seamless Execution",
    description: "Our experts manage every logistical detail—ensuring flawless delivery at every touchpoint.",
    icon: "5",
    image: img5
  },
  {
    title: "Signature Touch",
    description: "We infuse every event with our hallmark of excellence—refining every detail for lasting impact.",
    icon: "6",
    image: img6
  }
];

export const HowWeDoItSection = () => (
  <>
   {/* Title Section */}
<div className="flex items-center justify-center mb-16 gap-20">
  {/* Text on the left */}
  <div className="flex flex-col items-start text-left max-w-2xl">
    <h2 className="text-5xl md:text-6xl ">
      <span className="bg-blue-200 text-transparent bg-clip-text">
        How We Do It
      </span>
    </h2>

    <motion.p
      className="bg-gradient-to-r from-blue-100 to-blue-500 text-transparent bg-clip-text mt-10 text-[50px] font-extrabold leading-tight"

      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      Our Process:<br />
      From Vision to Reality
    </motion.p>

    <motion.p
      className="text-white mt-6 text-[25px]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
Every unforgettable event starts with understanding — and ends with excellence. Here’s how we shape your ideas into exceptional experiences:    </motion.p>
  </div>

  {/* Image on the right */}
  <div className="flex-shrink-0">
    <img
      src={processImg}
      alt="How We Do It Visual"
      className="w-96 md:w-[480px] rounded-xl"
    />
  </div>
</div>




    {/* Timeline Section */}
    <div className="relative mb-20">
  {/* Vertical line */}
  <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#ECEBEB] transform -translate-x-1/2 z-0" />

  {/* Top dot */}
  <div className="absolute left-1/2 top-[20%] transform -translate-x-1/2 z-10">
    <div className="w-6 h-6 rounded-full bg-[#ECEBEB] " />
  </div>

  {/* Bottom dot */}
  <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 z-10">
    <div className="w-6 h-6 rounded-full bg-[#ECEBEB] " />
  </div>

  {/* Timeline steps */}
  <div className="grid grid-cols-2 gap-x-8 gap-y-32 relative z-10">
    {steps.map((step, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          type: "spring",
          stiffness: 100,
        }}
        whileHover={{ y: -5 }}
        className={`relative flex flex-col items-center ${
          index % 2 === 0 ? "items-end pr-8" : "items-start pl-8"
        }`}
      >
        {/* Step bubble */}
        <div className="flex items-center justify-center w-[450px] px-8 h-20 rounded-full bg-white/30 backdrop-blur-md border border-white/30 relative overflow-hidden">
          <div className="relative mr-6 flex-shrink-0">
            <img
              src={step.image}
              alt={step.title}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div
              className="absolute inset-0 flex items-center justify-center text-white text-[20px] font-bold rounded-full"
              style={{
                textShadow: '0 0 2px black, 1px 1px black, -1px -1px black',
              }}
            >
              {step.icon}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white truncate max-w-[calc(100%-6rem)]">
            {step.title}
          </h3>
        </div>

        <p className="text-[#ECEBEB] font-bold text-xl tex mt-4 max-w-xs text-center">
          {step.description}
        </p>
      </motion.div>
    ))}
  </div>
</div>


  </>
);
