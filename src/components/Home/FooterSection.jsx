import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import EcommerceChatbot from "../Chatbot/Chatbot";
const logo = "/assets/footerlogo.png";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-theme-gradient text-white px-8 py-8 ">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-center ">
        <div>
          <div className="flex justify-center">
            <img src={logo} alt="Naturekart Logo" className="w-40 h-30" />
          </div>
          <p className="text-white text-p leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet,
            consectetur adipiscing
          </p>
        </div>

        <div>
          <h2 className="text-h2 font-bold text-white mb-4 ">NEWSLETTER</h2>
          <div className="bg-white rounded-lg p-2 grid grid-cols-1 md:flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-gray-700 outline-none !mt-0"
            />
            <button className="bg-secondary text-white px-6 py-3 rounded-lg font-medium w-full !mt-0  md:w-auto">
              Subscribe
            </button>
          </div>
        </div>

        <div>
          <h4 className="text-h4 font-bold mb-4">STORE INFORMATION</h4>
          <p className=" text-white text-p leading-relaxed mt-2">
            Marijuana Demo Store,
          </p>
          <p className="text-white text-p leading-relaxed mt-2">
            Call Us: 123-456-7898
          </p>
          <p className="text-white text-p leading-relaxed mt-2">
            Email Us: Support@Marijuana.com
          </p>
          <p className="text-white text-p leading-relaxed mt-2">Fax: 123456</p>
        </div>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-0 md:grid-cols-0 gap-8 text-center md:text-center">
        <div className="mt-12 border-t border-gray-600 flex justify-between items-center w-full px-8 py-8">
          <p className="text-p text-white">© 2024-25</p>

          <div className="flex space-x-4 mt-8 sm:mt-0 md:mt-0 lg:mt-0">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              alt="Visa"
              className="h-6"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
              alt="MasterCard"
              className="h-6"
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-4">
        <div className="relative mb-16">
          <EcommerceChatbot />
        </div>

        {showScroll && (
          <div className="relative">
            <button
              onClick={scrollToTop}
              className="bg-secondary text-white p-3 mb-16 rounded-full shadow-lg hover:scale-110 transition-transform"
            >
              <FaArrowUp size={32} />
            </button>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
