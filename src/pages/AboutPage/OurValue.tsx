import { useState, useEffect, useRef, useLayoutEffect } from "react";

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

/** ---------- SVG line helper ---------- */
type EdgeKind =
  | "top+rightArc"
  | "top+leftArc"
  | "top+bottom+leftArc"
  | "top+rightArc_short";

function makePath(kind: EdgeKind, w: number, h: number, sw: number) {
  const inset = sw / 2;
  const r = Math.max(0, h / 2 - inset);
  const leftX = inset;
  const rightX = w - inset;
  const topY = inset;
  const bottomY = h - inset;
  const rightArcX = w - h / 2;
  const leftArcX = h / 2;

  switch (kind) {
    case "top+rightArc": {
      const startX = leftX;
      const lineEndX = Math.max(startX, rightArcX);
      return `M ${startX},${topY} L ${lineEndX},${topY} A ${r},${r} 0 0 1 ${lineEndX},${bottomY}`;
    }
    case "top+leftArc": {
      return `M ${leftArcX},${topY} L ${rightX},${topY} A ${r},${r} 0 0 0 ${leftArcX},${bottomY}`;
    }
    case "top+bottom+leftArc": {
      return `M ${leftArcX},${topY} L ${rightX},${topY} 
              M ${leftArcX},${bottomY} L ${rightX},${bottomY} 
              M ${leftArcX},${topY} A ${r},${r} 0 0 1 ${leftArcX},${bottomY}`;
    }
    case "top+rightArc_short": {
      // short version (you can tweak lineEndX if you want shorter start)
      const startX = leftX + 40; // ✅ shifted start for short version
      const lineEndX = Math.max(startX, rightArcX);
      return `M ${startX},${topY} L ${lineEndX},${topY} A ${r},${r} 0 0 1 ${lineEndX},${bottomY}`;
    }
  }
}

function useSize<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cr = entry.contentRect;
        setSize({ w: cr.width, h: cr.height });
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, ...size };
}

const StrokeColor = "#4fd1c5";
const StrokeWidth = 8;

function FramedImage({
  src,
  alt,
  roundedSide,
  kind,
  className = "",
  imageClassName = "",
}: {
  src: string;
  alt: string;
  roundedSide: "right" | "left";
  kind: EdgeKind;
  className?: string;
  imageClassName?: string;
}) {
  const { ref, w, h } = useSize<HTMLDivElement>();
  const path = w > 0 && h > 0 ? makePath(kind, w, h, StrokeWidth) : "";

  return (
    <div
      ref={ref}
      className={[
        "relative group overflow-hidden shadow-lg",
        "w-full max-w-[600px] h-[280px]", // ✅ fixed size but responsive
        roundedSide === "right" ? "rounded-e-full" : "rounded-s-full",
        className,
      ].join(" ")}
    >
      <img
        src={src}
        alt={alt}
        className={[
          "w-full h-full object-cover",
          roundedSide === "right" ? "rounded-e-full" : "rounded-s-full",
          imageClassName,
        ].join(" ")}
      />
      <svg
        className="pointer-events-none absolute inset-0"
        width="100%"
        height="100%"
        viewBox={`0 0 ${Math.max(w, 1)} ${Math.max(h, 1)}`}
        preserveAspectRatio="none"
      >
        <path
          d={path}
          fill="none"
          stroke={StrokeColor}
          strokeWidth={StrokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <p className="text-white text-base sm:text-lg font-semibold">{alt}</p>
      </div>
    </div>
  );
}

/** ---------- Main component ---------- */
const OurValue = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        const response = await fetch(
          "http://localhost:1337/api/events?filters[slug][$eq]=About-values&populate=gallery"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }
        const data = await response.json();
        const galleryData = data?.data?.[0]?.gallery as StrapiImage[];
        if (galleryData && galleryData.length > 0) {
          const imageUrls = galleryData.map((image: StrapiImage) => {
            const imageUrl = image.formats?.small?.url || image.url;
            return `http://localhost:1337${imageUrl}`;
          });
          setImages(imageUrls);
        }
      } catch (error: any) {
        console.error("Error fetching gallery images from Strapi:", error);
        setError(error.message);
        setImages([
          "https://via.placeholder.com/693x279/1D2A5F/FFFFFF?text=Value+1",
          "https://via.placeholder.com/771x292/1D2A5F/FFFFFF?text=Value+2",
          "https://via.placeholder.com/673x345/1D2A5F/FFFFFF?text=Value+3",
          "https://via.placeholder.com/752x407/1D2A5F/FFFFFF?text=Value+4",
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1b3d] to-[#132d63] py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative flex items-center justify-center overflow-hidden py-20">
        <div className="text-white text-center">
          <p>Error loading images: {error}</p>
          <p className="text-sm mt-2">Showing placeholder content</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden py-20 my-20">
      <div className="relative mx-auto w-full max-w-6xl flex flex-col items-center gap-8">
        {images[0] && (
          <FramedImage
            src={images[0]}
            alt="Mission One"
            roundedSide="right"
            kind="top+rightArc"
          />
        )}
        {images[1] && (
          <FramedImage
            src={images[1]}
            alt="Mission Two"
            roundedSide="left"
            kind="top+leftArc"
            className="-translate-x-14"
          />
        )}
        {images[2] && (
          <FramedImage
            src={images[2]}
            alt="Mission Three"
            roundedSide="right"
            kind="top+rightArc_short"
          />
        )}
        {images[3] && (
          <FramedImage
            src={images[3]}
            alt="Mission Four"
            roundedSide="left"
            kind="top+bottom+leftArc"
            className="-translate-x-14 -mt-[10px]" // ✅ fixed Tailwind class
          />
        )}
      </div>
    </section>
  );
};

export default OurValue;
