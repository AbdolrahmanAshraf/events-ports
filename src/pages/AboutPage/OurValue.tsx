import one from "../../assets/imgs/OurValue/1.png";
import two from "../../assets/imgs/OurValue/2.png";
import three from "../../assets/imgs/OurValue/3.png";
import four from "../../assets/imgs/OurValue/4.png";

const OurValue = () => {
    return (
        <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63]">
            <div className="relative mx-auto w-full max-w-6xl flex flex-col items-center">

                {/* Image 1 */}
                <div className="relative group overflow-hidden w-[80%] sm:w-[60%] md:w-[50%] 
                    border-t-8  border-r-8 border-[#4fd1c5] 
                    rounded-e-full shadow-lg">
                    <img
                        src={one}
                        alt="Mission One"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-e-full"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-base sm:text-lg font-semibold">
                            Mission One
                        </p>
                    </div>
                </div>

                {/* Image 2 */}
                <div className="relative -translate-x-14 group overflow-hidden w-[80%] sm:w-[60%] md:w-[50%]  
                    border-t-8  border-l-8 border-[#4fd1c5] rounded-s-full shadow-lg">
                    <img
                        src={two}
                        alt="Mission Two"
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 rounded-s-full"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-base sm:text-lg font-semibold">
                            Mission Two
                        </p>
                    </div>
                </div>

                {/* Image 3 */}
                <div className="relative group overflow-hidden w-[80%] sm:w-[60%] md:w-[50%] 
                    border-t-8  border-r-8 border-[#4fd1c5] 
                    rounded-e-full shadow-lg">
                    <img
                        src={three}
                        alt="Mission Three"
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 rounded-e-full"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-base sm:text-lg font-semibold">
                            Mission Three
                        </p>
                    </div>
                </div>

                {/* Image 4 */}
                <div className="relative -translate-x-14 group overflow-hidden w-[80%] sm:w-[60%] md:w-[50%] 
                    border-t-8 border-b-8 border-l-8 border-[#4fd1c5] 
                    rounded-s-full shadow-lg">
                    <img
                        src={four}
                        alt="Mission Four"
                        className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-105 rounded-s-full"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <p className="text-white text-base sm:text-lg font-semibold">
                            Mission Four
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurValue;
