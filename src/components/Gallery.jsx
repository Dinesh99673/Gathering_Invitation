import React, { useEffect, useRef } from "react";
import photos from "./photos";

const Gallery = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      // Increment the scroll amount
      scrollAmount += 1;

      // Reset scroll to 0 if it reaches the end
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }

      // Apply the scroll
      scrollContainer.scrollLeft = scrollAmount;
      requestAnimationFrame(scroll); // Continuous animation
    };

    // Start the scrolling
    const animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame); // Cleanup on unmount
  }, []);

  return (
    <div className="w-full overflow-hidden py-4">
      <div
        ref={scrollRef}
        className="flex w-full whitespace-nowrap overflow-x-hidden gap-4"
      >
        {/* Render all images twice for seamless scrolling */}
        {photos.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Student ${index}`}
            className="w-auto h-40 rounded-lg object-cover shadow-md"
          />
        ))}
        {photos.map((image, index) => (
          <img
            key={`duplicate-${index}`}
            src={image}
            alt={`Duplicate Student ${index}`}
            className="w-auto h-40 rounded-lg object-cover shadow-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
