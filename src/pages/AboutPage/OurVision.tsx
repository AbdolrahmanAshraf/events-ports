import one from "../../assets/imgs/OurVision/1.png";
import two from "../../assets/imgs/OurVision/2.png";
import three from "../../assets/imgs/OurVision/3.png";
import four from "../../assets/imgs/OurVision/4.png";
import five from "../../assets/imgs/OurVision/5.png";
import six from "../../assets/imgs/OurVision/6.png";
import seven from "../../assets/imgs/OurVision/7.png";

const OurVision = () => {
  return (
    <section className="relative flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63]">
      <div className="container mx-auto">
        {/* Custom Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <img
              src={one}
              alt="Vision 1"
              className="rounded-lg w-full  object-cover"
            />
            <img
              src={five}
              alt="Vision 5"
              className="rounded-lg w-full  object-cover"
            />
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div className="ourVisionTitle text-center  mb-8">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-dancing text-white mb-2">
                Our Vision
              </h2>
              <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#D1EBFB] to-[#6792F9] bg-clip-text text-transparent leading-snug">
                Shaping The Future Of Experiential Innovation
              </h3>
            </div>

            <img src={two} alt="Vision 2" className="rounded-lg  w-full h-full md:h-80 object-cover" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <img
                src={three}
                alt="Vision 3"
                className="rounded-lg w-full h-full md:h-70  sm:h-72  object-cover"
              />
              <img
                src={four}
                alt="Vision 4"
                className="rounded-lg w-full h-full md:h-70 sm:h-72  object-cover"
              />
            </div>


          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <img
              src={six}
              alt="Vision 6"
              className="rounded-lg w-full  object-cover"
            />
            <img
              src={seven}
              alt="Vision 7"
              className="rounded-lg w-full  object-cover"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-12 text-center text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          We aspire to redefine how the world celebrates by creating experiences
          that echo long after the final moment.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
