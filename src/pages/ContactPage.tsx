import { motion, LazyMotion, domAnimation } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheck } from "react-icons/fa";

interface StrapiImageFormat {
  url: string;
  width: number;
  height: number;
}

interface StrapiImage {
  id: number;
  url: string;
  alternativeText?: string;
  width?: number;
  height?: number;
  formats?: {
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    small?: StrapiImageFormat;
    thumbnail?: StrapiImageFormat;
  };
}

// API base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

// ContactInfoItem component for better code organization
const ContactInfoItem = ({ 
  icon, 
  color, 
  title, 
  content, 
  whileHover 
}: { 
  icon: React.ReactNode; 
  color: string; 
  title: string; 
  content: string; 
  whileHover: any; 
}) => (
  <motion.div
    whileHover={whileHover}
    className="p-4 rounded-xl bg-white shadow-md border border-gray-100"
  >
    <div className="flex items-start gap-3">
      <div className={`text-${color}-500 text-2xl`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-800">{title}</h4>
        <p className="text-gray-600 mt-1">{content}</p>
      </div>
    </div>
  </motion.div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [contactImages, setContactImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Form validation function
  const validateForm = useCallback(() => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  useEffect(() => {
    const abortController = new AbortController();
    
    const fetchContactImages = async () => {
      try {
        setError(null);
        const response = await fetch(
          `${API_BASE_URL}/api/events?filters[slug][$eq]=contact&populate=gallery`,
          { signal: abortController.signal }
        );
        
        if (!response.ok) throw new Error("Failed to fetch contact images");
        
        const data = await response.json();
        const galleryData = data?.data?.[0]?.gallery as StrapiImage[];
        
        if (galleryData && galleryData.length > 0) {
          const imageUrls = galleryData.map(
            (img) => `${API_BASE_URL}${img.formats?.small?.url || img.url}`
          );
          setContactImages(imageUrls);
        } else {
          throw new Error("No gallery images found");
        }
      } catch (err: any) {
        if (err.name === 'AbortError') return;
        
        console.error(err);
        setError("Failed to load contact images. Using default images instead.");
        setContactImages([
          "https://via.placeholder.com/450x589/1D2A5F/FFFFFF?text=Contact+1",
          "https://via.placeholder.com/454x413/1D2A5F/FFFFFF?text=Contact+2",
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchContactImages();

    return () => abortController.abort();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Real form submission to Strapi
      const response = await fetch(`${API_BASE_URL}/api/contact-forms`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }
        }),
      });
      
      if (!response.ok) throw new Error("Form submission failed");
      
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 3000);
    }
  };

  if (loading) {
    return (
      <LazyMotion features={domAnimation}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-[590px] bg-gray-200 rounded-2xl animate-pulse"></div>
            <div className="space-y-6">
              <div className="h-96 bg-gray-200 rounded-2xl animate-pulse"></div>
              <div className="h-72 bg-gray-200 rounded-2xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </LazyMotion>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
      <motion.section
        className="py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 pointer-events-auto">
          {/* Error message display */}
          {error && (
            <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to create something amazing together?
            </p>
          </motion.div>

          {/* Flex container */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-center gap-[20px] pointer-events-auto">
            {/* Left Side */}
            <motion.div
              className="flex flex-col gap-4 flex-shrink-0 lg:w-[400px] pointer-events-auto"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {contactImages[0] && (
                <motion.img
                  src={contactImages[0]}
                  alt="Contact"
                  className="w-full h-auto md:h-[590px] object-cover rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/450x589/1D2A5F/FFFFFF?text=Image+Not+Found";
                  }}
                />
              )}

              <div className="flex flex-col gap-3">
                <ContactInfoItem
                  icon={<FaMapMarkerAlt />}
                  color="blue"
                  title="Our Office"
                  content="123 Event Street, Los Angeles, CA"
                  whileHover={{ y: -3 }}
                />
                
                <ContactInfoItem
                  icon={<FaEnvelope />}
                  color="purple"
                  title="Email Us"
                  content="hello@eventino.com"
                  whileHover={{ y: -3 }}
                />
                
                <ContactInfoItem
                  icon={<FaPhoneAlt />}
                  color="green"
                  title="Call Us"
                  content="+1 (555) 123-4567"
                  whileHover={{ y: -3 }}
                />
              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              className="flex flex-col gap-6 pointer-events-auto"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Form */}
              <div className="rounded-2xl shadow-xl p-8 border border-gray-100 pointer-events-auto">
                <h3 id="contact-form-heading" className="text-2xl font-bold mb-6 text-gray-800">
                  Send us a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6 pointer-events-auto" aria-labelledby="contact-form-heading">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      autoComplete="off"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your event..."
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 ${
                      isSuccess
                        ? "bg-green-500"
                        : "bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-400 hover:to-blue-900"
                    } shadow-lg hover:shadow-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed`}
                    whileTap={{ scale: 0.98 }}
                    aria-label="Send message"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <FaCheck /> Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
                
                {/* Accessibility notification for form submission */}
                {isSubmitting && (
                  <div className="sr-only" aria-live="polite">
                    Submitting form
                  </div>
                )}
              </div>

              {/* Additional Image */}
              {contactImages[1] && (
                <motion.img
                  src={contactImages[1]}
                  alt="Additional Contact"
                  className="w-full h-[300px] object-cover rounded-2xl shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/454x413/1D2A5F/FFFFFF?text=Image+Not+Found";
                  }}
                />
              )}
            </motion.div>
          </div>
        </div>
      </motion.section>
    </LazyMotion>
  );
};

export default ContactPage;