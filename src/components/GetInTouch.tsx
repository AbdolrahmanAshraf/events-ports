import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  // This is the SVG for the long arrow, defined as a constant
  const longArrowSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      className="w-full h-full"
    >
      <path
        d="M0 10 L85 10 M85 10 L75 5 M85 10 L75 15"
        stroke="#13172C"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="flex justify-center items-center min-h-[50vh] w-full relative overflow-hidden">
      <motion.button
        onClick={handleNavigate}
        className="w-[509px] h-[150px] px-9 bg-[linear-gradient(to_right,#A5A5A8_21%,#FFFFFF_46%,#6C6C6D_73%)] text-[#13172C] font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group z-10"
        whileHover="hover"
        initial="initial"
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Text element */}
          <motion.span
            className="absolute text-[64px] z-10"
            variants={{
              initial: { x: 0, y: 0, scale: 1, opacity: 1 },
              hover: { x: -150, y: -30, scale: 0.5, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            Get In Touch
          </motion.span>

          {/* Long arrow element */}
          <motion.span
            className="absolute z-10 w-[100px] h-[20px]"
            variants={{
              initial: { x: 100, y: 30, scale: 0.5, opacity: 0 },
              hover: { x: 0, y: 0, scale: 1, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            {longArrowSVG}
          </motion.span>
        </div>

        {/* Light hover overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
};

export default ContactButton;