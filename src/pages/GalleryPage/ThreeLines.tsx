import { motion } from "framer-motion";

const CurvySections = () => {
  return (
    <div className="relative flex justify-between text-center items-center w-full max-w-6xl mx-auto px-6 my-32 py-20">
      {/* Curvy SVG line plain wider */}
      <svg
        className="absolute top-0 left-0 w-full h-full z-0"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M 0 200 
             Q 200 -100, 400 200 
             Q 600 500, 800 200 
             Q 1000 -100, 1200 200"
          stroke="url(#gradientStroke)"
          strokeWidth="16"
          strokeLinecap="round"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
                <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="21%" stopColor="#A5A5A8" />
            <stop offset="46%" stopColor="#FFFFFF" />
            <stop offset="73%" stopColor="#7C7C7D" />
          </linearGradient>
        </defs>

      </svg>

      {/* Words sections */}
      <div className="relative start-[115px] z-10 flex flex-col items-center w-1/3">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          700+
        </h3>
        <p className="text-gray-300 mt-3">
          Successful <br/> Events
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-center w-1/3">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          450+
        </h3>
        <p className="text-gray-300 mt-3">
          The Clients Gave Us <br/> 5 Stars
        </p>
      </div>

      <div className="relative z-10 end-[109px] flex flex-col items-center w-1/3">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
          15+
        </h3>
        <p className="text-gray-300  mt-3">
           Industry Great <br/> Years
        </p>
      </div>
    </div>
  );
};

export default CurvySections;
