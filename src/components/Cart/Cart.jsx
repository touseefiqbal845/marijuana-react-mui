import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTrash, FiMinus, FiPlus } from "react-icons/fi";
import Button from "../CustomButton/CustomButton";
import { FaTrash } from "react-icons/fa";

const ShoppingCart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Orange Coords Set",
      price: 15.0,
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Tan Cargo Shorts",
      price: 9.96,
      oldPrice: 12.0,
      discount: 2.04,
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
      quantity: 3,
    },
    {
      id: 3,
      name: "Gym Coords Set (Brown)",
      price: 20.0,
      image:
        "https://cdn.mos.cms.futurecdn.net/fhLfnNSZdVKGXJgaURaVBP-1280-80.jpg.webp",
      quantity: 1,
    },
  ]);
  const navigate = useNavigate();

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary">
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Product Name</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Quantity</th>
              <th className="p-4 text-left">Total</th>
              <th className="p-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-4">{item.name}</td>
                <td className="p-4 font-bold text-lg">
                  ${item.price.toFixed(2)}
                  {item.oldPrice && (
                    <div className="text-sm text-gray-500 line-through">
                      ${item.oldPrice.toFixed(2)}
                    </div>
                  )}
                  {item.discount && (
                    <div className="text-secondary text-sm">
                      You Save: ${item.discount.toFixed(2)}
                    </div>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className=" border   p-2 rounded hover:bg-gray-300"
                    >
                      <FiMinus />
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="   border p-2 rounded hover:bg-gray-300"
                    >
                      <FiPlus />
                    </button>
                  </div>
                </td>
                <td className="p-4 font-bold text-secondary">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-gray-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="p-4 flex flex-row justify-between items-center bg-gray-100">
          <h className="font-bold">Total Price:</h>
          <h4 className="">${totalPrice.toFixed(2)}</h4>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <Button onClick={() => console.log("Continue Shopping Clicked")}>
          Continue Shopping
        </Button>
        <Button onClick={() => navigate("/checkout")}>Check Out</Button>
      </div>
    </div>
  );
};

export default ShoppingCart;
