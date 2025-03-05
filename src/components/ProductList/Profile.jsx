import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaXTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

const StoreProfile = () => {
  return (
    <div className=" rounded-lg  p-6 flex flex-col md:flex-row bg-primary mt-16 mb-16">
      <div className="flex flex-col items-center text-center md:w-1/4 p-4">
        <img
          src="https://themes.pixelstrap.com/multikart/assets/images/logos/17.png"
          alt="Store Logo"
          className="w-20 h-20 rounded-md mb-4"
        />

        <h2 className="text-lg font-semibold">Fashion Store</h2>
        <div className="flex justify-center text-yellow-400 mt-1">
          <span>⭐☆☆☆☆</span>
        </div>
        <p className="text-gray-500 text-sm mt-1">750 followers | 10 reviews</p>
      </div>

      <div className="border-l border-gray-300 px-6 md:w-2/4 text-gray-600 text-sm">
        <p>
          Based in United States, Fashion store has been a Multikart member
          since May 15, 2017. Fashion Store is engaged in all kinds of western
          clothing. In the garment field, we have maintained 3 years of
          exporting experience. "
        </p>
        <p className="mt-3">
          Based in United States, Fashion store has been a Multikart member
          since May 15, 2017. Fashion Store is engaged in all kinds of western
          clothing. In the garment field, we have maintained 3 years of
          exporting experience.
        </p>
      </div>

      <div className="border-l border-gray-300 px-6 md:w-1/4 text-gray-600 text-sm flex flex-col justify-center">
        <h4 className=" font-semibold mb-2">Follow Us:</h4>
        <div className="flex space-x-3 text-gray-500 mb-4">
          <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
          <FaGoogle className="hover:text-red-500 cursor-pointer" />
          <FaXTwitter className="hover:text-black cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 cursor-pointer" />
        </div>
        <h4 className=" font-semibold mb-2">If You Have Any Query:</h4>
        <div className="flex items-center space-x-2">
          <FaPhone className="text-gray-500 " />
          <h6 className="text-xs">+1 8529637412</h6>

        </div>
        <div className="flex items-center space-x-2 mt-1">
          <FaEnvelope className="text-gray-500" />
          <h6 className="text-xs">katherine.ray@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;
