import React from "react";

const CustomHeader = ({ title, breadcrumbs = [] }) => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="bg-primary py-6 text-center">
      <h3 className="font-bold ">{title}</h3>

      {breadcrumbs.length > 0 && (
        <nav className="">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index !== 0 && " / "}

              {index === breadcrumbs.length - 2 ? (

                <span
                  onClick={handleBack}
                  className="hover:text-secondary cursor-pointer"
                >
                  {crumb}
                </span>
              ) : (
                <span
                  className={
                    index === breadcrumbs.length - 1
                      ? "font-semibold text-secondary"
                      : ""
                  }
                >
                  {crumb}
                </span>
              )}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
};

export default CustomHeader;
