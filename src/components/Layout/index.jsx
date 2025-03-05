import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiShoppingCart,
  FiUser,
  FiHeart,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";  
import { RiMenuUnfoldLine } from "react-icons/ri";
import { RiMenuUnfold2Line } from "react-icons/ri";
import { FaHeart, FaUser } from "react-icons/fa";
import logo from "/assets/logo.png";
import Sidebar from "../Home/Sidebar";
import SidebarMobile from "../Home/SidebarMobile";
import Footer from "../Home/FooterSection";
import Cart from "../Home/CartSidebar";
import NavbarItems from "../Navbar/navbarItems";
import NavbarMobile from "../Navbar/NavbarItemsMobile";

const Layout = ({ children }) => {
  const [cartCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isWishlistFilled, setIsWishlistFilled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const cartItemCount = 3;

  const handleHeartClick = () => {
    setIsHeartFilled(!isHeartFilled);
  };

  const handleWishlistClick = () => {
    setIsWishlistFilled(!isWishlistFilled);
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="hidden lg:block">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="lg:hidden">
        <SidebarMobile
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(false)}
        />
      </div>

      <div className="bg-theme-gradient text-white py-2 hidden lg:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-row items-center gap-8 flex-nowrap">
            <span>Welcome to Our Store Marijuana</span>

            <span className="flex items-center gap-2">
              <FaPhoneAlt className="w-4 h-4" />
              Call Us: 123 - 456 - 7890
            </span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 hover:text-gray-200"
              onClick={handleWishlistClick}
            >
              <FaHeart
                className={`w-5 h-5 ${isWishlistFilled ? "text-secondary" : "text-white"
                  }`}
              />
              Wishlist
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-gray-200">
              <FaUser className="w-5 h-5" />
              My Account
            </a>
          </div>
        </div>
      </div>

      <header className="bg-white shadow-sm ">
        <div className="container mx-auto px-8 py-8 xs:px-2 py-8">
          <div className="flex justify-between items-center">
            <button
              className="text-gray-700 hover:text-primary  "
              onClick={() => setIsSidebarOpen(true)}
            >
              <RiMenuUnfoldLine size={24} />
            </button>
            <div>
              <img
                onClick={() => navigate("/home")}
                src={logo}
                alt="Naturekart Logo"
                className="w-40 h-30 cursor-pointer"
              />
            </div>
            <button
              className="text-gray-700 lg:hidden  "
              onClick={() => setIsNavbarOpen(true)}
            >
              <RiMenuUnfold2Line size={24} />
            </button>
            <div className="flex items-center space-x-4 hidden md:block">
              <button className="text-gray-700">
                <FiSearch size={20} />
              </button>
              <button className="text-gray-700">
                <FiSettings size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-gray-700 hover:text-heading hover:bg-primary relative"
              >
                <FiShoppingCart size={24} />
                {cartItemCount > 0 && (
                  <span className="absolute top-[-10px] right-[-10px] w-5 h-5 bg-secondary text-white text-xs font-semibold rounded-full flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
        <div class="border-t   w-full"></div>
        <NavbarMobile
          isOpen={isNavbarOpen}
          toggleSidebar={() => setIsNavbarOpen(false)}
        />
      </header>
      <Cart isOpen={isCartOpen} setIsOpen={setIsCartOpen} />
      <NavbarItems />
      <main className="flex-grow">{children}</main>

      <Footer />
      {/* <div className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t flex justify-around items-center py-3 md:hidden">
        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiHeart size={20} />
          <span className="text-xs">Fav</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center relative">
          <FiShoppingCart size={20} />
          <span className="text-xs">Cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSearch size={20} />
          <span className="text-xs">Search</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiUser size={20} />
          <span className="text-xs">Account</span>
        </button>

        <button className="text-gray-500 hover:text-primary flex flex-col items-center">
          <FiSettings size={20} />
          <span className="text-xs">Settings</span>
        </button>
      </div> */}
    </div>
  );
};

export default Layout;
