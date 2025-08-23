import Footer from '../../components/Footer';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { OurServicesSection } from './OurServicesSection';
// import { HowWeDoItSection } from './HowWeDoItSection';

const ServicesPage = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      
      <div className="container mx-auto pb-10 px-6 relative z-10">
        <ServicesSection />
        <OurServicesSection />
        {/* <HowWeDoItSection /> */}
      </div>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;