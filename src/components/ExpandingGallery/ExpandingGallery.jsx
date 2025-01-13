import React, { useState, useEffect, useRef } from "react";
import image1 from "../../assets/A-3.jpg";
import image2 from "../../assets/A-44.jpg";
import image3 from "../../assets/b4-2.jpg";
// import image4 from "../../assets/OIP1jpg";
// import image5 from "../../assets/OIP.jpg";
import image4 from "../../assets/A-44.jpg";
import image5 from "../../assets/b4-2.jpg";
import "./ExpandingGallery.css";

const ExpandingGallery = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);

  const images = [
    { src: image1, alt: "1" },
    { src: image2, alt: "2" },
    { src: image3, alt: "3" },
    { src: image4, alt: "4" },
    { src: image5, alt: "5" },
  ];

  const containerWidth = 800;
  const slitWidth = 40;
  const gap = 16;
  const totalGaps = images.length - 1;
  const totalGapWidth = gap * totalGaps;
  const expandedWidth =
    containerWidth - slitWidth * (images.length - 1) - totalGapWidth;

  useEffect(() => {
    let intervalId;

    if (isAutoPlaying) {
      intervalId = setInterval(() => {
        setExpandedIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, images.length]);

  const handleSlitInteraction = (index) => {
    setIsAutoPlaying(false);
    setExpandedIndex(index);
  };

  const handleMouseLeave = () => {
    // Resume autoplay after a short delay
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 500);
  };

  return (
    <div className="expandingImages">
      <div
        ref={containerRef}
        className="flex gap-4 h-96"
        style={{ width: `${containerWidth}px` }}
        onMouseLeave={handleMouseLeave}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative h-full transition-all duration-500 ease-in-out cursor-pointer group"
            style={{
              width:
                expandedIndex === index
                  ? `${expandedWidth}px`
                  : `${slitWidth}px`,
              flexShrink: 0,
              opacity: expandedIndex === index ? 1 : 0.7,
            }}
            onClick={() => handleSlitInteraction(index)}
            onMouseEnter={() => handleSlitInteraction(index)}
          >
            <div className="w-full h-full overflow-hidden rounded-2xl shadow-lg relative">
              {/* Inner shadow overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 20px rgba(0,0,0,0.3)",
                  borderRadius: "1rem",
                }}
              />

              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                style={{
                  objectPosition:
                    expandedIndex === index
                      ? "center"
                      : `${-index * 100}px center`,
                }}
              />

              {/* Number circle */}
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
