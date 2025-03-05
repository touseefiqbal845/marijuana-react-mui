import { IoArrowBack } from "react-icons/io5";
import { dropdownData } from "./data";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, onClose }) => {


  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-transform   transition-opacity duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      onClick={onClose}
    >
      <div
        className={`fixed left-0 top-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-700 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex h-[calc(100vh-2rem)] w-full max-w-[20rem] border-b flex-col rounded-xl bg-white p-2 text-gray-700 shadow-xl">
          <div className="flex items-center justify-between p-2 mb-2 border-b">
            <button
              className="text-gray-700 hover:text-primary"
              onClick={onClose}
            >
              <IoArrowBack size={24} />
            </button>
          </div>

          <nav class="flex min-w-[20px] flex-col gap-0 p-0 font-sans text-base font-normal text-blue-gray-700">
            <div>
              {dropdownData.map((dropdown, index) => (
                <div key={index} className="relative w-full mb-6 ">
                  <div className="relative flex items-center w-full p-0 text-xl font-semibold text-left select-none text-blue-gray-900">
                    <span className="relative flex items-center justify-between w-full group cursor-pointer">
                      <h5 className="block font-sans text-base antialiased font-normal leading-relaxed text-blue-gray-900 ml-4">
                        {dropdown.title}
                      </h5>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-blue-gray-900 transition-transform group-hover:rotate-180 mr-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="absolute left-full top-[25%] z-10 p-4 text-sm font-normal bg-white border rounded-lg shadow-lg min-w-max border-blue-gray-50 text-blue-gray-500 shadow-blue-gray-500/10 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out">
                        <footer className="bg-white dark:bg-gray-900">
                          <div className="mx-auto w-full max-w-screen-xl grid grid-cols-3 gap-9 p-4">
                            {Object.entries(dropdown.subcategories).map(
                              ([subcategory, items], subIndex) => (
                                <div key={subIndex} className="min-w-max">
                                  <h2 className="mb-2 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    {subcategory}
                                  </h2>
                                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <Link to="/product">
                                      {items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="mb-2">
                                          <h4 className="hover:underline">
                                            {item}
                                          </h4>
                                        </li>
                                      ))}
                                    </Link>

                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </footer>
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
