// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// const links = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Services', href: '/services' },
//   { label: 'Gallery', href: '/Gallery' },
//   // { label: 'Team', href: '/team' },
//   { label: 'Contact', href: '/contact' }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLinkClick = (href: string) => {
//     if (href === '/about' && location.pathname === '/') {
//       scroller.scrollTo('about', {
//         smooth: true,
//         offset: -80
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 ${
//         scrolled ? 'bg-black/90 py-2 backdrop-blur-md' : 'py-4 bg-transparent'
//       } transition-all duration-300`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//     >
//       <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//           <Link
//             to="/"
//             className="font-bold text-2xl cursor-pointer bg-gradient-to-r from-blue-400 to-blue-900 bg-clip-text text-transparent"
//           >
//             EVENTINO
//           </Link>
//         </motion.div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-8">
//           {links.map(({ label, href }) => (
//             <motion.div key={href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to={href}
//                 onClick={() => handleLinkClick(href)}
//                 className={`relative px-1 py-2 cursor-pointer ${
//                   location.pathname === href 
//                     ? 'text-blue-400 font-medium' 
//                     : 'text-white hover:text-blue-400'
//                 } transition-colors`}
//               >
//                 {label}
//                 {location.pathname === href && (
//                   <motion.span 
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
//                     layoutId="nav-underline"
//                   />
//                 )}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle and Menu */}
//         {/* ... (keep your existing mobile menu implementation) */}
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;


















// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
// import { scroller } from 'react-scroll';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTimes, FaBars } from 'react-icons/fa';

// interface NavLink {
//   label: string;
//   href: string;
// }

// const links: NavLink[] = [
//   { label: 'Home', href: '/' },
//   { label: 'About', href: '/about' },
//   { label: 'Services', href: '/services' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'Contact', href: '/contact' }
// ];

// const socialIcons = [
//   { icon: <FaFacebookF />, href: 'https://facebook.com' },
//   { icon: <FaTwitter />, href: 'https://twitter.com' },
//   { icon: <FaLinkedinIn />, href: 'https://linkedin.com' },
//   { icon: <FaInstagram />, href: 'https://instagram.com' }
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const handleLinkClick = (href: string) => {
//     if (href === '/about' && location.pathname === '/') {
//       scroller.scrollTo('about', {
//         smooth: true,
//         offset: -80
//       });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 ${
//         scrolled ? 'bg-black/90 py-2 backdrop-blur-md' : 'py-4 bg-transparent'
//       } transition-all duration-300`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: 'spring', stiffness: 100 }}
//     >
//       <div className="container mx-auto px-6 lg:px-16 flex justify-between items-center">
//         {/* Logo */}
//         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//   <Link to="/" className="flex items-end"> {/* Changed to items-end to align at bottom */}
//     <img
//       src="./public/logo 3 2.png"
//       alt="Entinio Logo"
//       className="h-10 w-auto"
//     />
//     <span className="text-white text-sm  tracking-widest font-medium"> {/* Added ml-2 for spacing */}
//       Entinio
//     </span>
//   </Link>
// </motion.div>


//         {/* Desktop Menu */}
//         <div className="hidden lg:flex space-x-8">
//           {links.map(({ label, href }) => (
//             <motion.div key={href} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
//               <Link
//                 to={href}
//                 onClick={() => handleLinkClick(href)}
//                 className={`relative px-1 py-2 cursor-pointer ${
//                   location.pathname === href 
//                     ? 'text-blue-400 font-medium' 
//                     : 'text-white hover:text-blue-400'
//                 } transition-colors`}
//               >
//                 {label}
//                 {location.pathname === href && (
//                   <motion.span 
//                     className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
//                     layoutId="nav-underline"
//                   />
//                 )}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* Mobile Menu Toggle */}
//         <motion.button
//           className="lg:hidden text-white focus:outline-none"
//           onClick={() => setIsOpen(!isOpen)}
//           whileTap={{ scale: 0.9 }}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </motion.button>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               className="fixed inset-0 bg-black/90 backdrop-blur-md z-40 lg:hidden pt-20"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <div className="container mx-auto px-6 flex flex-col h-full">
//                 <motion.ul
//                   className="flex flex-col space-y-8 py-10"
//                   initial={{ y: -20 }}
//                   animate={{ y: 0 }}
//                   transition={{ staggerChildren: 0.1 }}
//                 >
//                   {links.map(({ label, href }) => (
//                     <motion.li
//                       key={href}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -20 }}
//                       transition={{ duration: 0.3 }}
//                     >
//                       <Link
//                         to={href}
//                         onClick={() => handleLinkClick(href)}
//                         className={`text-2xl font-medium ${
//                           location.pathname === href
//                             ? 'text-blue-400'
//                             : 'text-white hover:text-blue-400'
//                         } transition-colors`}
//                       >
//                         {label}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </motion.ul>

//                 <motion.div
//                   className="mt-auto pb-10 flex justify-center space-x-6"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   {socialIcons.map(({ icon, href }, index) => (
//                     <motion.a
//                       key={index}
//                       href={href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-white hover:text-blue-400 text-xl"
//                       whileHover={{ y: -3 }}
//                       whileTap={{ scale: 0.9 }}
//                     >
//                       {icon}
//                     </motion.a>
//                   ))}
//                 </motion.div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;











import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-white">
            EVENTINO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black py-4">
            <div className="flex flex-col space-y-4 px-6">
              <Link to="/" className="text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/gallery" className="text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link to="/contact" className="text-white hover:text-blue-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link
                to="/contact"
                className="px-6 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;