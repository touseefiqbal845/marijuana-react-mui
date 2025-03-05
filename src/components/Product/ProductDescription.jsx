import { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaStar,
  FaRegStar,
  FaTruck,
  FaQuestionCircle,
} from "react-icons/fa";

export default function ProductDescription() {
  const [openSection, setOpenSection] = useState("description");

  return (
    <div className="p-4 max-w-lg mx-auto">
      <p className="text-small text-secondary font-secondary">
        ⚡ Selling fast! 4 people have this in their carts.
      </p>
      <h3 className=" text-heading font-bold mt-2">Gym Coords Set (Brown)</h3>
      <div className="flex items-center text-yellow-500 text-small space-x-1">
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} />
        ))}
        <FaRegStar />
        <a href="#" className="text-secondary text-small underline ml-2">
          20 Reviews
        </a>
      </div>
      <p className="text-paragraph text-small mt-1">
        MRP:{" "}
        <span className="text-small text-secondary font-semibold">$15.00</span>
      </p>
      <p className="text-small text-paragraph">Inclusive all taxes</p>
      <div className="flex items-center space-x-6 text-small text-heading mt-4">
        <span className="flex items-center">
          <FaTruck className="mr-1" /> Delivery & Return
        </span>
        <span className="flex items-center">
          <FaQuestionCircle className="mr-1" /> Ask a Question
        </span>
      </div>
      <div className="mt-4 border-t">
        <button
          onClick={() =>
            setOpenSection(openSection === "description" ? "" : "description")
          }
          className="w-full flex justify-between p-3 text-heading font-primary"
        >
          Product Description
          {openSection === "description" ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        className={`${openSection === "description" ? "block" : "hidden"
          } p-3 text-small text-paragraph`}
      >
        High-quality gym coordinates for a stylish and comfortable workout.
      </div>

      <div className="border-t">
        <button
          onClick={() => setOpenSection(openSection === "info" ? "" : "info")}
          className="w-full flex justify-between p-3 text-heading font-primary"
        >
          Information
          {openSection === "info" ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>
      <div
        className={`${openSection === "info" ? "block" : "hidden"
          } p-3 text-small text-paragraph`}
      >
        <p className="font-semibold text-heading">Product Info</p>
        <ul className="list-disc pl-6 text-gray-700 grid gap-2">
          <li className="flex justify-between">
            <span className="font-medium">SKU:</span>
            <span>SP18 (COPY)</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Weight:</span>
            <span>150 Gms</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Quantity:</span>
            <span>40 Items Left</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Unit:</span>
            <span>1 Item</span>
          </li>
          <li className="flex justify-between">
            <span className="font-medium">Stock Status:</span>
            <span>In stock</span>
          </li>
        </ul>
      </div>
      <div className="mt-4 text-small text-heading">
        <p>🚚 Your order is likely to reach you within 7 days.</p>
        <p>🔄 Hassle-free returns within 7 Days.</p>
      </div>
      <div className="mt-6">
        <p className="text-heading font-primary mb-2">
          Guaranteed Safe Checkout
        </p>
        <div className="flex space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6 mr-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-6 mr-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
            alt="MasterCard"
            className="h-6 mr-2"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-heading font-primary mb-2">Secure Checkout</p>
        <div className="flex space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="h-6 mr-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
            alt="MasterCard"
            className="h-6 mr-2"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            className="h-6 mr-2"
          />
        </div>
      </div>
    </div>
  );
}
