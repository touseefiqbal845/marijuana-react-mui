import React from "react";

const Button = ({ children, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-secondary text-white px-6 py-2 rounded-md font-semibold transition hover:opacity-80 hover:bg-mainText ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
