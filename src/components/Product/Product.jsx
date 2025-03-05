import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
  "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
  "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
];

export default function ProductImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full flex flex-col items-center p-4">
      <div className="relative w-full max-w-md flex items-center justify-center bg-gray-100 overflow-hidden">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full max-h-full object-contain rounded-lg"
        />
        <button
          onClick={handlePrev}
          className="absolute left-2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronLeft className="text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-2 bg-white p-2 rounded-full shadow-md"
        >
          <FaChevronRight className="text-gray-600" />
        </button>
      </div>

      <div className="flex space-x-3 mt-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`w-24 h-24 border rounded-lg cursor-pointer p-1 ${currentIndex === index ? "border-gray-900" : "border-gray-300"
              }`}
            onClick={() => setCurrentIndex(index)}
          >
            <img
              src={img}
              alt="Thumbnail"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
