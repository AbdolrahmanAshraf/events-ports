import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Define the Strapi interfaces (same as in Hero.tsx)
interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface StrapiMedia {
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
}

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [logoInfo, setLogoInfo] = useState<{
    url: string;
    alt: string;
    width?: number;
    height?: number;
  } | null>(null);
  const [logoLoading, setLogoLoading] = useState(true);
  const [logoError, setLogoError] = useState<string | null>(null);

  // Fetch logo from Strapi
  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const logoResponse = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=logo&populate=coverImage');
        if (!logoResponse.ok) {
          throw new Error('Failed to fetch logo');
        }
        const logoData = await logoResponse.json();
        const logoMedia = logoData?.data?.[0]?.coverImage as StrapiMedia;

        if (logoMedia) {
          // Use large format if available, otherwise use original
          const logoUrl = logoMedia.formats?.large?.url || logoMedia.url;
          setLogoInfo({
            url: `http://localhost:1337${logoUrl}`,
            alt: logoMedia.alternativeText || 'Eventino Logo',
            width: logoMedia.width,
            height: logoMedia.height
          });
        } else {
          throw new Error('No logo found in response');
        }
      } catch (error: any) {
        console.error('Error fetching logo from Strapi:', error);
        setLogoError(error.message);
        setLogoInfo(null);
      } finally {
        setLogoLoading(false);
      }
    };

    fetchLogo();
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu automatically when screen ≥ md (768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 bg-black/90 shadow-lg backdrop-blur-md"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-white">
            <div className="flex items-center space-x-2">
              {logoLoading ? (
                <div className="w-10 h-[18px] bg-gray-200 rounded-lg animate-pulse"></div>
              ) : logoError ? (
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">Error</span>
                </div>
              ) : logoInfo ? (
                <img 
                  src={logoInfo.url} 
                  alt={logoInfo.alt} 
                  className="w-20 h-20 object-contain"
                  width={logoInfo.width}
                  height={logoInfo.height}
                />
              ) : (
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">No Logo</span>
                </div>
              )}
              <div>
                <p className="text-[24px] font-extrabold tracking-wide leading-tight font-mplus bg-clip-text text-transparent bg-gradient-to-r from-[#D1EBFB] to-[#6792F9]">
                  EVENTINO
                </p>
                <span className="text-[11px] block leading-none font-nunito">Event Innovation</span>
              </div>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative transition-colors duration-300 ${
                    isActive
                      ? "text-blue-400 after:w-full"
                      : "text-white hover:text-blue-400 after:w-0 hover:after:w-full"
                  } after:block after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300 after:absolute after:-bottom-1 after:left-0`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Button */}
<button
  className="md:hidden text-white focus:outline-none"
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
>
  <svg
    className="w-7 h-7"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {mobileMenuOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
</button>

        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-screen w-[70%] bg-black/95 z-40 transform transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-6 px-6 py-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg transition relative ${
                  isActive
                    ? "text-blue-400 after:w-full"
                    : "text-white hover:text-blue-400 after:w-0 hover:after:w-full"
                } after:block after:h-[2px] after:bg-blue-400 after:transition-all after:duration-300`
              }
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


