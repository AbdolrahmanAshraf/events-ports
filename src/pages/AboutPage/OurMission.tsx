import one from "../../assets/imgs/OurMission/1.png";
import two from "../../assets/imgs/OurMission/2.png";
import three from "../../assets/imgs/OurMission/3.png";

export const OurMission = () => (
  <section className="relative flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63]">
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-center justify-center ">

        {/* Image 1 */}
        <div className="items">
          <img src={one} className=" rounded-s-lg" alt="Mission One" />
        </div>
        {/* Image 2 */}
        <div className="items">
          <img src={two} className="h-[15rem]  w-[21rem] md:w-full rounded-t-lg" alt="Mission Two" />
        </div>
        {/* Image 3 */}
        <div className="items">
          <img src={three} className=" rounded-e-lg" alt="Mission Three" />
        </div>


      </div>
      <p className="max-w-[67rem] bg-[#4866AD] text-white text-center text-base md:text-lg leading-relaxed px-4 -mt-4 pt-8 pb-4 rounded-2xl shadow-lg  mx-auto">
        Our mission is to create unforgettable experiences that bring people together,
        foster connections, and celebrate the joy of life through events that inspire and uplift.
      </p>

    </div>
  </section>
);

export default OurMission;
