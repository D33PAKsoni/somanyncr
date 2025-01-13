import image1 from "../../assets/A-3.jpg";
import image2 from "../../assets/A-44.jpg";
import image3 from "../../assets/b4-2.jpg";
import image4 from "../../assets/A-44.jpg";
import image5 from "../../assets/b4-2.jpg";
import "./ExpandingGallery.css";

// types.ts
interface ImageData {
  src: string;
  alt: string;
}

interface GalleryDimensions {
  containerWidth: number;
  slitWidth: number;
  gap: number;
}

// ExpandingGallery.tsx
import React, { useState, useEffect, useRef } from "react";

const ExpandingGallery: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const images: ImageData[] = [
    { src: image1, alt: "1" },
    { src: image2, alt: "2" },
    { src: image3, alt: "3" },
    { src: image4, alt: "4" },
    { src: image5, alt: "5" },
  ];

  const dimensions: GalleryDimensions = {
    containerWidth: 800,
    slitWidth: 40,
    gap: 16,
  };

  const calculateExpandedWidth = (): number => {
    const totalGaps = images.length - 1;
    const totalGapWidth = dimensions.gap * totalGaps;
    return (
      dimensions.containerWidth -
      dimensions.slitWidth * (images.length - 1) -
      totalGapWidth
    );
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setExpandedIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, images.length]);

  const handleSlitInteraction = (index: number): void => {
    setIsAutoPlaying(false);
    setExpandedIndex(index);
  };

  const handleMouseLeave = (): void => {
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 500);
  };

  const getSlitStyles = (index: number): React.CSSProperties => ({
    width:
      expandedIndex === index
        ? `${calculateExpandedWidth()}px`
        : `${dimensions.slitWidth}px`,
    flexShrink: 0,
    opacity: expandedIndex === index ? 1 : 0.7,
  });

  const getImageStyles = (index: number): React.CSSProperties => ({
    objectPosition:
      expandedIndex === index ? "center" : `${-index * 100}px center`,
  });

  const getInnerShadowStyles = (): React.CSSProperties => ({
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
    borderRadius: "1rem",
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div
        ref={containerRef}
        className="flex gap-4 h-96"
        style={{ width: `${dimensions.containerWidth}px` }}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-full transition-all duration-500 ease-in-out cursor-pointer group"
            style={getSlitStyles(index)}
            onClick={() => handleSlitInteraction(index)}
            onMouseEnter={() => handleSlitInteraction(index)}
          >
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg relative">
              <div
                className="absolute inset-0 pointer-events-none"
                style={getInnerShadowStyles()}
              />

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={getImageStyles(index)}
              />

              <div
                className={`absolute bottom-4 ${
                  expandedIndex === index
                    ? "left-4"
                    : "left-1/2 -translate-x-1/2"
                } w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all duration-500`}
              >
                <span className="text-sm font-semibold text-gray-800">
                  {index + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandingGallery;
