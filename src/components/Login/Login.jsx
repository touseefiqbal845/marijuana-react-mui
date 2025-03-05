import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [signIn, setSignIn] = useState(true);
  const navigate= useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-primary">
      <div className="relative w-[678px] max-w-full min-h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Sign Up */}
        <motion.div
          initial={{ x: signIn ? "100%" : "0%" }}
          animate={{ x: signIn ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute top-0 h-full w-1/2 bg-white p-10 flex flex-col justify-center items-center space-y-4 ${
            signIn ? "opacity-0 z-10" : "opacity-100 z-20"
          }`}
        >
          <h1 className="text-large font-tertiary text-heading">Create Account</h1>
          <input
            type="text"
            placeholder="Name"
            className="bg-yellowbg border border-secondary text-text rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-yellowbg border border-secondary text-text rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-yellowbg border border-secondary text-text rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wide hover:bg-heading transition-all">
            Sign Up
          </button>
        </motion.div>

        <motion.div
          initial={{ x: signIn ? "0%" : "-100%" }}
          animate={{ x: signIn ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className={`absolute top-0 h-full w-1/2 bg-white p-10 flex flex-col justify-center items-center space-y-4 ${
            signIn ? "z-20" : "z-10"
          }`}
        >
          <h1 className="text-large font-tertiary text-heading">Sign in</h1>
          <input
            type="email"
            placeholder="Email"
            className="bg-white border border-secondary text-text rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-white border border-secondary text-text rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary"
          />
          <a href="#" className="text-sm text-paragraph">
            Forgot your password?
          </a>
          <button className="bg-secondary text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wide hover:bg-heading transition-all"
           onClick={() => navigate("/home")} 
          >
            Sign In
          </button>
        </motion.div>

        <motion.div
          initial={{ x: signIn ? "0%" : "-100%" }}
          animate={{ x: signIn ? "0%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 w-1/2 h-full bg-theme-gradient text-white flex flex-col justify-center items-center text-center p-10"
        >
          {signIn ? (
            <div className="space-y-4">
              <h1 className="text-large font-tertiary">Hello, Friend!</h1>
              <p className="text-sm">Enter your details and start your journey with us</p>
              <button
                className="border border-white text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-all"
                onClick={() => navigate("/register")} 
              >
                Sign Up
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-large font-tertiary">Welcome Back!</h1>
              <p className="text-sm">To stay connected, please sign in</p>
              <button
                className="border border-white text-white px-6 py-2 rounded-full font-semibold uppercase tracking-wide hover:bg-white hover:text-secondary transition-all"
                onClick={() => navigate("/home")} 
              >
                Sign In
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
