import { useState, useEffect } from "react";

// Define the Strapi interfaces
interface StrapiMediaFormat {
  url: string;
  width: number;
  height: number;
  size: number;
}

interface StrapiMedia {
  id: number;
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

interface MissionData {
  description?: string;
  gallery: StrapiMedia[];
}

export const OurMission = () => {
  const [missionData, setMissionData] = useState<MissionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/events?filters[slug][$eq]=About-mission&populate=gallery"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch mission data");
        }
        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const missionItem = data.data[0];
          setMissionData({
            description: missionItem.description,
            gallery: missionItem.gallery || [],
          });
        } else {
          throw new Error("No mission data found");
        }
      } catch (error: any) {
        console.error("Error fetching mission data from Strapi:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionData();
  }, []);

  if (loading) {
    return (
      <section className="relative flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="w-full md:w-1/3 h-48 bg-gray-300 rounded-lg animate-pulse"
              ></div>
            ))}
          </div>
          <div className="max-w-[67rem] bg-[#4866AD] text-white text-center text-base md:text-lg leading-relaxed px-4 pt-8 pb-4 rounded-2xl shadow-lg mx-auto mt-4">
            <div className="h-6 bg-gray-400 rounded animate-pulse w-3/4 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative flex items-center justify-center px-6 py-16 overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63]">
        <div className="container mx-auto text-center text-white">
          <p>Error loading mission content: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex items-center justify-center py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {missionData?.gallery.map((image, index) => (
            <div key={image.id} className="items group overflow-hidden rounded-lg">
              <img
                src={`http://localhost:1337${image.url}`}
                alt={image.alternativeText || `Mission image ${index + 1}`}
                className={`rounded-lg transition-all duration-700 ease-in-out transform 
                 group-hover:scale-105 group-hover:shadow-xl
                ${index === 1 ? "h-[15rem] w-[21rem] md:w-full" : ""}`}
              />
            </div>
          ))}
        </div>
        <p className="max-w-[67rem] bg-[#4866AD] text-white text-center text-base md:text-lg leading-relaxed px-4 -mt-2 pt-8 pb-4 rounded-2xl shadow-lg mx-auto">
          {missionData?.description ||
            "Our mission is to create unforgettable experiences that bring people together, foster connections, and celebrate the joy of life through events that inspire and uplift."}
        </p>
      </div>
    </section>
  );
};

export default OurMission;
