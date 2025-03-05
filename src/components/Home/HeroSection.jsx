import React from "react";
import { motion } from "framer-motion";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaCreditCard, FaHeadset, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Free Shipping",
    desc: "On Orders Over $50",
    icon: <MdOutlineLocalShipping className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Online Payment",
    desc: "Instantly Pay Online",
    icon: <FaCreditCard className="w-12 h-12 text-secondary" />,
  },
  {
    title: "24 X 7 Service",
    desc: "Our Service is Available 24/7",
    icon: <FaHeadset className="w-12 h-12 text-secondary" />,
  },
  {
    title: "Fast & Efficient",
    desc: "Fast And Qualitative Product",
    icon: <FaBolt className="w-12 h-12 text-secondary" />,
  },
];

const HeroSection = () => {
  return (
    <>
      <div className="relative">
        <div
          className="relative lg:h-[80vh] bg-[url('https://themes.pixelstrap.com/multikart/assets/images/marijuana/full-banner/1.jpg')] 
                    bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>

          <div className="relative container mx-auto px-4 h-full flex justify-center">
            <div className="text-white max-w-2xl text-center lg:mt-32 mt-16 mb-16">
              <h3 className="text-white mb-2 font-bold leading-widest tracking-widest ">
                Special Offer
              </h3>
              <h1 className=" text-white  font-bold mb-6">Buy Marijuana</h1>
              <Link to="/products">
                <button className="bg-theme-gradient hover:bg-primary text-white px-8 py-3 rounded-md">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:bottom-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-full lg:max-w-screen-lg md:mt-16 mt-0">
          <div className="grid grid-cols-2 md:grid-cols-4 px-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/90 p-6 text-center cursor-pointer"
              >
                <motion.div
                  className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{}}
                  transition={{ duration: 0.3 }}
                >
                  {React.cloneElement(feature.icon, {
                    className:
                      "w-10 h-10 text-gray-700 transition-colors duration-300 hover:text-secondary",
                  })}
                </motion.div>
                <motion.h4
                  className="font-bold mb-2"
                  whileHover={{ color: "rgb(93, 114, 39)" }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.title}
                </motion.h4>
                <p className="text-gray-600 text-sm hover:text-secondary ">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
