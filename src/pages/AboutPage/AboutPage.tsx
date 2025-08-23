import { HeroSection } from './HeroSection';
import { StorySection  } from './StorySection';
import Footer from '../../components/Footer';
import GetInTouch from '../../components/GetInTouch';
import OurVision from './OurVision';
import  OurMission from './OurMission';
import OurValue from './OurValue';

const AboutPage = () => {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <StorySection />
        <OurVision />
        <OurMission/>
        <OurValue/>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default AboutPage;