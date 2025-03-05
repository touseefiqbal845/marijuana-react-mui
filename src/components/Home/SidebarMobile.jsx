import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const sidebarData = [
  {
    title: "Clothing",
    subcategories: [
      {
        title: "Women's Fashion",
        items: ["Dresses", "Skirts", "Western Wear", "Ethnic Wear", "Sport Wear"],
      },
      {
        title: "Men's Fashion",
        items: ["T-Shirts", "Jeans", "Jackets", "Sports Wear"],
      },
      {
        title: "Kids' Fashion",
        items: ["Baby Clothing", "Boys' Wear", "Girls' Wear"],
      },
    ],
  },
  {
    title: "Electronics",
    subcategories: [
      {
        title: "Mobiles & Tablets",
        items: ["Smartphones", "Tablets", "Accessories"],
      },
      {
        title: "Computers & Laptops",
        items: ["Laptops", "Desktops", "Monitors", "Storage Devices"],
      },
      {
        title: "Audio & Accessories",
        items: ["Headphones", "Speakers", "Smartwatches"],
      },
    ],
  },
  {
    title: "Home & Furniture",
    subcategories: [
      {
        title: "Furniture",
        items: ["Sofas", "Beds", "Dining Tables", "Chairs"],
      },
      {
        title: "Home Decor",
        items: ["Wall Art", "Curtains", "Lighting"],
      },
      {
        title: "Kitchen & Dining",
        items: ["Cookware", "Dinner Sets", "Kitchen Tools"],
      },
    ],
  },
  {
    title: "Beauty & Health",
    subcategories: [
      {
        title: "Makeup",
        items: ["Lipstick", "Foundation", "Eyeshadow"],
      },
      {
        title: "Skincare",
        items: ["Moisturizers", "Face Wash", "Sunscreen"],
      },
      {
        title: "Health & Wellness",
        items: ["Vitamins", "Supplements", "Yoga Equipment"],
      },
    ],
  },
  {
    title: "Sports & Outdoors",
    subcategories: [
      {
        title: "Sportswear",
        items: ["Running Shoes", "Jerseys", "Tracksuits"],
      },
      {
        title: "Outdoor Gear",
        items: ["Camping Tents", "Hiking Backpacks", "Sleeping Bags"],
      },
      {
        title: "Fitness Equipment",
        items: ["Treadmills", "Dumbbells", "Resistance Bands"],
      },
    ],
  },
];

const SidebarMobile = ({ isOpen, toggleSidebar }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-opacity duration-700 ease-in-out ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      onClick={toggleSidebar}
    >
      <div
        className={`fixed left-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] border-b flex-col rounded-xl bg-white p-2 text-gray-700 shadow-xl">
          <div className="flex items-center justify-between p-2 mb-2 border-b">
            <button className="text-gray-700 hover:text-primary" onClick={toggleSidebar}>
              <IoArrowBack size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-0 p-0 font-sans text-base font-normal text-blue-gray-700">
            <div className="p-4">
              {sidebarData.map((category, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="flex justify-between items-center cursor-pointer font-medium text-heading"
                    onClick={() => toggleSection(index)}
                  >
                    {category.title}
                    {openSections[index] ? < AiOutlinePlus /> : <AiOutlineMinus />}
                  </div>

                  {openSections[index] && (
                    <div className="ml-4 mt-2">
                      {category.subcategories.map((sub, subIndex) => (
                        <div key={subIndex} className="mt-2">
                          <div className="font-medium text-secondary">{sub.title}</div>
                          <ul className="ml-4 text-grayText">
                            {sub.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="mt-1">- {item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
