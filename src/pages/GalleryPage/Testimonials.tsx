import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}

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

const Testimonials = () => {
  const [hoveredTestimonial, setHoveredTestimonial] = useState<number | null>(null);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/events?filters[slug][$eq]=gallery-testi&populate=gallery');
        if (!response.ok) {
          throw new Error('Failed to fetch testimonial images');
        }

        const data = await response.json();
        const galleryData = data?.data?.[0]?.gallery as StrapiImage[];

        if (galleryData && galleryData.length > 0) {
          const testimonialData: Testimonial[] = [
            {
              id: 1,
              name: 'Alex Smith',
              role: 'Corporate Client',
              image: `http://localhost:1337${galleryData[0]?.formats?.thumbnail?.url || galleryData[0]?.url}`,
              quote: `Eventino transformed our product launch into an unforgettable experience. Their attention to detail and creative lighting made all the difference!`,
              rating: 5,
            },
            {
              id: 2,
              name: 'Sarah Johnson',
              role: 'Wedding Client',
              image: `http://localhost:1337${galleryData[1]?.formats?.thumbnail?.url || galleryData[1]?.url}`,
              quote: `Our wedding was magical thanks to Eventino. They handled everything seamlessly and the audio/visual setup was perfect.`,
              rating: 5,
            },
            {
              id: 3,
              name: 'Michael Chen',
              role: 'Exhibition Organizer',
              image: `http://localhost:1337${galleryData[2]?.formats?.thumbnail?.url || galleryData[2]?.url}`,
              quote: `The exhibition booth design attracted 40% more visitors than last year. Professional team with innovative ideas!`,
              rating: 4,
            },
          ];
          setTestimonials(testimonialData);
        }
      } catch (error: any) {
        console.error('Error fetching testimonial data from Strapi:', error);
        setError(error.message);
        setTestimonials([
          {
            id: 1,
            name: 'Alex Smith',
            role: 'Corporate Client',
            image: '',
            quote: `Eventino transformed our product launch into an unforgettable experience. Their attention to detail and creative lighting made all the difference!`,
            rating: 5,
          },
          {
            id: 2,
            name: 'Sarah Johnson',
            role: 'Wedding Client',
            image: '',
            quote: `Our wedding was magical thanks to Eventino. They handled everything seamlessly and the audio/visual setup was perfect.`,
            rating: 5,
          },
          {
            id: 3,
            name: 'Michael Chen',
            role: 'Exhibition Organizer',
            image: '',
            quote: `The exhibition booth design attracted 40% more visitors than last year. Professional team with innovative ideas!`,
            rating: 4,
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonialData();
  }, []);

  return (
    <section id="testimonials" className="py-[12%] relative">
      <div className="absolute top-[50%] right-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-white rounded-full filter blur-[100px] md:blur-[150px] opacity-50 md:translate-x-1/4 -translate-y-1/2 z-0" />

      <div className="container mx-auto mt-6 px-6 lg:px-16 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[48px] font-dancing text-[#D7EEFF] mb-2">
            Testimonials
          </h2>
          <p className="max-w-2xl mx-auto font-playfair text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-[#D1EBFB] to-[#6792F9]">
            What Our Clients <br /> Remember Most
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
          </div>
        ) : error ? (
          <div className="text-center text-white py-10">
            <p>Error loading testimonials: {error}</p>
            <p className="text-sm mt-2">Showing placeholder content</p>
          </div>
        ) : (
          <div className="relative flex flex-col md:flex-row justify-center items-center gap-24">
            {testimonials.map((testimonial) => {
              // If nothing is hovered, default active is id:2
              const isActive =
                hoveredTestimonial === testimonial.id ||
                (hoveredTestimonial === null && testimonial.id === 2);

              return (
                <motion.div
                  key={testimonial.id}
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredTestimonial(testimonial.id)}
                  onMouseLeave={() => setHoveredTestimonial(null)}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Profile Image */}
                  {testimonial.image ? (
                    <motion.img
                      src={testimonial.image}
                      alt={`Testimonial by ${testimonial.name}`}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full z-20"
                      animate={
                        isActive
                          ? { y: -30, scale: 1.1, opacity: 1 }
                          : { y: 0, scale: 1, opacity: 1 }
                      }
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                  ) : (
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gray-300 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-lg">No Image</span>
                    </div>
                  )}

                  {/* Glass Box */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        key={`card-${testimonial.id}`}
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 80 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-16 md:top-20 w-[300px] p-6 rounded-3xl 
                                   backdrop-blur-xl bg-[#2F447A] 
                                   border border-[#2F447A]/70 shadow-2xl z-10 text-center"
                      >
                        <p className="text-white text-sm my-4 font-dancing">{testimonial.quote}</p>
                        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                        <p className="text-blue-200 text-sm">{testimonial.role}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
