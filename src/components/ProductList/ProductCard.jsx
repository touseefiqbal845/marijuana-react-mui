import React, { useState } from "react";
import { FiShoppingCart, FiRefreshCw } from "react-icons/fi";
import { FaHeart, FaStar, FaEye } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  return (
    <div className="relative group  p-4 rounded-lg shadow-lg cursor-pointer bg-primary">
      <Link to="/product">
        <div className="relative w-full h-74  flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />

          <div className="absolute  right-0 top-0 flex flex-col gap-2">
            <button
              className=" p-2  transition bg-secondary rounded-full mt-2 mr-2"
              onClick={handleHeartClick}
            >
              <FaHeart
                className={`w-5 h-5`}
                style={{
                  fill: isHeartFilled ? "yellow" : "white",
                }}
              />
            </button>
          </div>

          <div className="absolute right-0 top-14 mr-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-[-50px] group-hover:translate-y-0">
            <button className="bg-secondary p-2 rounded-full shadow hover:bg-secondary transition ">
              <FiShoppingCart className="text-white w-5 h-5" />
            </button>
            <button className="bg-secondary p-2 rounded-full shadow hover:bg-secondary transition">
              <IoEyeOutline className="text-white w-5 h-5" />
            </button>
            <button className="bg-secondary p-2 rounded-full shadow hover:bg-secondary transition">
              <FiRefreshCw className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>

      <div className="mt-4 text-white">
        <h4 className="text-heading">{product.name}</h4>
        <div className="flex space-x-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < product.rating ? "text-yellow-500" : "text-gray-300"
              }
              size={15}
            />
          ))}
          <h4 className="text-heading">(10)</h4>
        </div>
        <div className="flex flex-wrap items-center justify-between mt-2">
          <h4 className="text-heading ">${product.price}</h4>
          {product.oldPrice && (
            <div className="flex flex-wrap items-center gap-1 sm:justify-end w-full sm:w-auto">
              <span className="text-gray-400 line-through text-sm">
                ${product.oldPrice}
              </span>
              <span className="text-mainText text-sm ml-2">10% Off</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
