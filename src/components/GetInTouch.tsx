import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh] w-full relative overflow-hidden">

      <motion.button
        onClick={handleNavigate}
        className="w-[509px] h-[150px] px-9 bg-gradient-to-r from-[#455EC8] to-[#1D25AA] text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group z-10"
        whileHover="hover"
        initial="initial"
        whileTap={{ scale: 0.98 }}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Main Text - moves left and shrinks */}
          <motion.span
            className="absolute text-[64px] z-10 origin-top-left"
            variants={{
              initial: { x: 0, y: 0, scale: 1, opacity: 1 },
              hover: { x: -180, y: -75, scale: 0.5, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            Get In Touch
          </motion.span>

          {/* Hover Text - Two Lines */}
          <motion.div
            className="absolute z-10 text-[20px] flex flex-col items-start"
            variants={{
              initial: { x: 100, y: 100, opacity: 0 },
              hover: { x: 10, y: 10, opacity: 1 },
            }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span>Get In Touch</span>
            <span>Let’s Do What’s Never Been</span>
            <span className="flex items-center">
              Done Before
              <span className="text-[80px]">→</span>
            </span>
          </motion.div>
        </div>

        {/* Light hover overlay */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </motion.button>
    </div>
  );
};

export default ContactButton;