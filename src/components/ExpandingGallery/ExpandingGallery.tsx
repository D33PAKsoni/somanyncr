// import image1 from "../../assets/A-3.webp";
// import image2 from "../../assets/A-44.webp";
// import image3 from "../../assets/b4-2.webp";
// import image4 from "../../assets/A-44.webp";
// import image5 from "../../assets/b4-2.webp";

// import React, { useState, useEffect, useRef } from "react";
// import "./ExpandingGallery.css";

// interface ImageData {
//   src: string;
//   alt: string;
// }

// interface GalleryDimensions {
//   containerWidth: number;
//   slitWidth: number;
//   gap: number;
// }

// interface DragState {
//   isDragging: boolean;
//   startX: number;
//   currentX: number;
//   lastExpandedIndex: number;
// }

// const ExpandingGallery: React.FC = () => {
//   const [expandedIndex, setExpandedIndex] = useState<number>(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const dragState = useRef<DragState>({
//     isDragging: false,
//     startX: 0,
//     currentX: 0,
//     lastExpandedIndex: 0,
//   });

//   const images: ImageData[] = [
//     { src: image1, alt: "1" },
//     { src: image2, alt: "2" },
//     { src: image3, alt: "3" },
//     { src: image4, alt: "4" },
//     { src: image5, alt: "5" },
//   ];

//   const dimensions: GalleryDimensions = {
//     containerWidth: 800,
//     slitWidth: 24,
//     gap: 8,
//   };

//   const calculateExpandedWidth = (): number => {
//     const totalGaps = images.length - 1;
//     const totalGapWidth = dimensions.gap * totalGaps;
//     return (
//       dimensions.containerWidth -
//       dimensions.slitWidth * (images.length - 1) -
//       totalGapWidth
//     );
//   };

//   useEffect(() => {
//     let intervalId: NodeJS.Timeout;

//     if (isAutoPlaying) {
//       intervalId = setInterval(() => {
//         setExpandedIndex((prev) => (prev + 1) % images.length);
//       }, 3000);
//     }

//     return () => {
//       if (intervalId) clearInterval(intervalId);
//     };
//   }, [isAutoPlaying, images.length]);

//   const handleSlitInteraction = (index: number): void => {
//     if (!dragState.current.isDragging) {
//       setIsAutoPlaying(false);
//       setExpandedIndex(index);
//     }
//   };

//   const handleMouseLeave = (): void => {
//     if (!dragState.current.isDragging) {
//       setTimeout(() => {
//         setIsAutoPlaying(true);
//       }, 500);
//     }
//   };

//   const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
//     setIsAutoPlaying(false);
//     dragState.current = {
//       isDragging: true,
//       startX: "touches" in e ? e.touches[0].clientX : e.clientX,
//       currentX: "touches" in e ? e.touches[0].clientX : e.clientX,
//       lastExpandedIndex: expandedIndex,
//     };
//   };

//   const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
//     if (!dragState.current.isDragging) return;

//     const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
//     dragState.current.currentX = currentX;

//     const diff = dragState.current.startX - currentX;
//     const threshold = dimensions.containerWidth / images.length / 2;

//     if (Math.abs(diff) > threshold) {
//       const direction = diff > 0 ? 1 : -1;
//       const newIndex = Math.max(
//         0,
//         Math.min(
//           images.length - 1,
//           dragState.current.lastExpandedIndex + direction
//         )
//       );

//       if (newIndex !== expandedIndex) {
//         setExpandedIndex(newIndex);
//         dragState.current.startX = currentX;
//         dragState.current.lastExpandedIndex = newIndex;
//       }
//     }
//   };

//   const handleDragEnd = () => {
//     dragState.current.isDragging = false;
//     setTimeout(() => {
//       if (!dragState.current.isDragging) {
//         setIsAutoPlaying(true);
//       }
//     }, 1000);
//   };

//   return (
//     <div className="gallery-container">
//       <div
//         ref={containerRef}
//         className="gallery-wrapper"
//         style={{ width: `${dimensions.containerWidth}px` }}
//         onMouseLeave={handleMouseLeave}
//         onMouseDown={handleDragStart}
//         onMouseMove={handleDragMove}
//         onMouseUp={handleDragEnd}
//         // onMouseLeave={handleDragEnd}
//         onTouchStart={handleDragStart}
//         onTouchMove={handleDragMove}
//         onTouchEnd={handleDragEnd}
//       >
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`gallery-slit ${
//               dragState.current.isDragging ? "dragging" : ""
//             }`}
//             style={{
//               width:
//                 expandedIndex === index
//                   ? `${calculateExpandedWidth()}px`
//                   : `${dimensions.slitWidth}px`,
//               opacity: expandedIndex === index ? 1 : 0.7,
//             }}
//             onClick={() => handleSlitInteraction(index)}
//             onMouseEnter={() =>
//               !dragState.current.isDragging && handleSlitInteraction(index)
//             }
//           >
//             <div className="image-container">
//               <div className="inner-shadow" />
//               <img
//                 src={image.src}
//                 alt={image.alt}
//                 className="gallery-image"
//                 style={{
//                   objectPosition:
//                     expandedIndex === index
//                       ? "center"
//                       : `${-index * 100}px center`,
//                 }}
//               />
//             </div>
//           </div>
//         ))}

//         <div className="indicators-container">
//           {images.map((_, index) => (
//             <div
//               key={index}
//               className={`indicator ${expandedIndex === index ? "active" : ""}`}
//               onClick={() => handleSlitInteraction(index)}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExpandingGallery;

import image1 from "../../assets/A-3.webp";
import image2 from "../../assets/A-44.webp";
import image3 from "../../assets/b4-2.webp";
import image4 from "../../assets/A-44.webp";
import image5 from "../../assets/b4-2.webp";

import React, { useState, useEffect, useRef, CSSProperties } from "react";
import "./ExpandingGallery.css";

interface CustomCSSProperties extends CSSProperties {
  "--expanded-width"?: string;
  "--slit-width"?: string;
  "--opacity"?: number;
  "--object-position"?: string;
}

interface ImageData {
  src: string;
  alt: string;
}

interface GalleryDimensions {
  containerWidth: number;
  slitWidth: number;
  gap: number;
}

interface DragState {
  isDragging: boolean;
  startX: number;
  currentX: number;
  lastExpandedIndex: number;
}

const ExpandingGallery: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dragState = useRef<DragState>({
    isDragging: false,
    startX: 0,
    currentX: 0,
    lastExpandedIndex: 0,
  });

  const images: ImageData[] = [
    { src: image1, alt: "1" },
    { src: image2, alt: "2" },
    { src: image3, alt: "3" },
    { src: image4, alt: "4" },
    { src: image5, alt: "5" },
  ];

  const dimensions: GalleryDimensions = {
    containerWidth: 800,
    slitWidth: 24,
    gap: 8,
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
    if (!dragState.current.isDragging) {
      setIsAutoPlaying(false);
      setExpandedIndex(index);
    }
  };

  const handleMouseLeave = (): void => {
    if (!dragState.current.isDragging) {
      setTimeout(() => {
        setIsAutoPlaying(true);
      }, 500);
    }
  };

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsAutoPlaying(false);
    dragState.current = {
      isDragging: true,
      startX: "touches" in e ? e.touches[0].clientX : e.clientX,
      currentX: "touches" in e ? e.touches[0].clientX : e.clientX,
      lastExpandedIndex: expandedIndex,
    };
  };

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragState.current.isDragging) return;

    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    dragState.current.currentX = currentX;

    const diff = dragState.current.startX - currentX;
    const threshold = dimensions.containerWidth / images.length / 2;

    if (Math.abs(diff) > threshold) {
      const direction = diff > 0 ? 1 : -1;
      const newIndex = Math.max(
        0,
        Math.min(
          images.length - 1,
          dragState.current.lastExpandedIndex + direction
        )
      );

      if (newIndex !== expandedIndex) {
        setExpandedIndex(newIndex);
        dragState.current.startX = currentX;
        dragState.current.lastExpandedIndex = newIndex;
      }
    }
  };

  const handleDragEnd = () => {
    dragState.current.isDragging = false;
    setTimeout(() => {
      if (!dragState.current.isDragging) {
        setIsAutoPlaying(true);
      }
    }, 1000);
  };

  return (
    <div className="gallery-container">
      <div
        ref={containerRef}
        className="gallery-wrapper"
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-slit ${
              dragState.current.isDragging ? "dragging" : ""
            }`}
            data-expanded={expandedIndex === index}
            style={
              {
                "--expanded-width": "calc((100% - (4 * 2%) - (4 * 10px)))",
                "--slit-width": "2%",
                "--object-position":
                  expandedIndex === index
                    ? "center"
                    : `${-index * 100}px center`,
              } as CustomCSSProperties
            }
            onClick={() => handleSlitInteraction(index)}
            onMouseEnter={() =>
              !dragState.current.isDragging && handleSlitInteraction(index)
            }
          >
            <div className="image-container">
              <div className="inner-shadow" />
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
          </div>
        ))}

        <div className="indicators-container">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${expandedIndex === index ? "active" : ""}`}
              onClick={() => handleSlitInteraction(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpandingGallery;
