import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane, FaCheck } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  info: string;
  color: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  // Google Maps configuration
  const mapContainerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '12px'
  };

  const center = {
    lat: 34.0522,  // Los Angeles coordinates (replace with your actual location)
    lng: -118.2437
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      ref={ref}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 rounded-full bg-blue-100/30 blur-xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-60 h-60 rounded-full bg-pink-100/30 blur-xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div 
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-900"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Ready to plan your next unforgettable event? Contact us today for a free consultation.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <ContactCard
                  icon={<FaMapMarkerAlt className="text-green-600" />}
                  title="Our Office"
                  info="123 Event Street, Los Angeles, CA"
                  color="bg-purple-100"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard
                  icon={<FaEnvelope className="text-pink-600" />}
                  title="Email Us"
                  info="hello@eventino.com"
                  color="bg-pink-100"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard
                  icon={<FaPhoneAlt className="text-blue-600" />}
                  title="Call Us"
                  info="+1 (555) 123-4567"
                  color="bg-blue-100"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <ContactCard
                  icon={<FaPaperPlane className="text-teal-600" />}
                  title="Social Media"
                  info="@eventino_events"
                  color="bg-teal-100"
                />
              </motion.div>
            </motion.div>

            {/* Google Map */}
            <motion.div 
              className="rounded-2xl overflow-hidden shadow-xl border-8 border-white"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={center}
                  zoom={14}
                  options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    styles: [
                      {
                        featureType: "poi",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }]
                      },
                      {
                        featureType: "transit",
                        elementType: "labels",
                        stylers: [{ visibility: "off" }]
                      }
                    ]
                  }}
                >
                  <Marker 
                    position={center} 
                    icon={{
                      url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100"
          >
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <label className="block text-gray-700 mb-2">Your Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-900 w-0 group-hover:w-full transition-all duration-500"
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                    />
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <label className="block text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <label className="block text-gray-700 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your event..."
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all ${
                      isSuccess 
                        ? 'bg-green-500' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-400 hover:to-blue-900'
                    } shadow-lg hover:shadow-xl`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : isSuccess ? (
                      <>
                        <FaCheck /> Message Sent!
                      </>
                    ) : (
                      <>
                        <FaPaperPlane /> Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, info, color }) => {
  return (
    <motion.div 
      className={`p-6 rounded-xl ${color} bg-opacity-50 backdrop-blur-sm border border-white shadow-sm hover:shadow-md transition-all`}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-start gap-4">
        <div className="text-2xl p-3 bg-white rounded-lg shadow-sm">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{title}</h4>
          <p className="text-gray-600 mt-1">{info}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;