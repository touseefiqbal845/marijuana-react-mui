import { useState } from "react";
import {
  FaHeart,
  FaExchangeAlt,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { FaTrash, FaEdit, FaTruck } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../CustomButton/CustomButton";

const ProductSelection = () => {
  const [selectedColor, setSelectedColor] = useState("brown");
  const [quantity, setQuantity] = useState(1);
  const stockLeft = 10;

  const colors = [
    {
      id: "brown",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
    {
      id: "blue",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
    {
      id: "green",
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
    },
  ];

  const progress = 100;

  return (
    <div className="p-6 border rounded-lg max-w-sm mx-auto bg-white shadow-sm text-center">
      <p className="text-gray-700 font-semibold text-lg">Colour:</p>
      <div className="flex justify-center space-x-3 mt-2">
        {colors.map((color) => (
          <div
            key={color.id}
            className={`border-2 rounded-md p-1 cursor-pointer transition-all duration-300 ${selectedColor === color.id
              ? "border-secondary"
              : "border-gray-300"
              }`}
            onClick={() => setSelectedColor(color.id)}
          >
            <img
              src={color.image}
              alt={color.id}
              className="w-16 h-16 rounded-md"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          className="p-2 border rounded-md hover:bg-gray-300"
          onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
        >
          <FaChevronLeft />
        </button>
        <span className="text-lg font-semibold text-gray-700">{quantity}</span>
        <button
          className="p-2 border rounded-md hover:bg-gray-300"
          onClick={() => setQuantity((q) => q + 1)}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex justify-center mt-4 space-x-4 w-full">
        <Button onClick={() => console.log("Continue Shopping Clicked")}>
          Out Of Stock
        </Button>
        <Button onClick={() => console.log("Continue Shopping Clicked")}>
          Buy Now
        </Button>
      </div>

      <p className="text-sm text-gray-500 mt-2">
        Please Hurry Only {stockLeft} Left In Stock
      </p>
      <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${stockLeft * 10}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mt-4">
        <button className="flex items-center space-x-1">
          <FaHeart /> <span>Add To Wishlist</span>
        </button>
        <button className="flex items-center space-x-1">
          <FaExchangeAlt /> <span>Add To Compare</span>
        </button>
      </div>

      <div className="text-center mt-2 text-gray-700 text-sm flex justify-center items-center space-x-2">
        <FaShareAlt /> <span>Share</span>
      </div>
    </div>
  );
};

export default ProductSelection;
