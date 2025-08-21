import { JSX, useState } from 'react';
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaPlus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import teamBg1 from '../assets/1.jpg';
import teamBg2 from '../assets/2.jpg';
import teamBg3 from '../assets/3.jpg';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const Team = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'John Doe',
      role: 'Front-End Developer',
      image: teamBg1,
      bio: 'Specializing in React and modern JavaScript frameworks with 8 years of experience building responsive web applications.'
    },
    {
      name: 'Dave Wood',
      role: 'Back-End Developer',
      image: teamBg2,
      bio: 'Expert in Node.js and cloud architecture with a passion for building scalable server solutions.'
    },
    {
      name: 'Claire Chedd',
      role: 'UI/UX Designer',
      image: teamBg3,
      bio: 'Award-winning designer focused on creating intuitive user experiences with beautiful interfaces.'
    }
  ];

  return (
    <section id="team" className="py-20 bg-[#1D2A5F]">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900 mb-2">
            Our Creative Team
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The talented individuals behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={index} 
              {...member} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TeamCardProps extends TeamMember {
  index: number;
}

const TeamCard = ({ name, role, image, bio, index }: TeamCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="relative group h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Gradient glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Card container */}
      <div className="h-full bg-gray-800/50 rounded-xl border border-gray-700/50 backdrop-blur-sm overflow-hidden relative">
        {/* Image container */}
        <motion.div 
          className="relative h-80 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <img
            src={image}
            alt={`Image of ${name}`}
            className="w-full h-full object-cover"
          />
          
          {/* Social overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center space-x-3 mb-4">
              <SocialIcon icon={<FaFacebookF />} ariaLabel="Facebook profile" />
              <SocialIcon icon={<FaTwitter />} ariaLabel="Twitter profile" />
              <SocialIcon icon={<FaPinterest />} ariaLabel="Pinterest profile" />
              <SocialIcon icon={<FaLinkedinIn />} ariaLabel="LinkedIn profile" />
            </div>
          </motion.div>
        </motion.div>

        {/* Info section */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
          <p className="text-blue-400 mb-4">{role}</p>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.p 
                className="text-gray-300 mb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {bio}
              </motion.p>
            )}
          </AnimatePresence>

          <motion.button
            className="flex items-center text-sm text-white hover:text-blue-400 transition-colors"
            onClick={() => setIsExpanded(!isExpanded)}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="mr-2"
            >
              <FaPlus />
            </motion.span>
            {isExpanded ? 'Less Info' : 'More Info'}
          </motion.button>
        </div>

        {/* Animated border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
        />
      </div>
    </motion.div>
  );
};

interface SocialIconProps {
  icon: JSX.Element;
  ariaLabel: string;
}

const SocialIcon = ({ icon, ariaLabel }: SocialIconProps) => {
  return (
    <motion.a
      href="#"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-blue-500 transition-colors"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.9 }}
      aria-label={ariaLabel}
    >
      {icon}
    </motion.a>
  );
};

export default Team;
