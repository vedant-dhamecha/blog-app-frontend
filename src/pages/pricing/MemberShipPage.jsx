import React from "react";
// import { FcInfo } from "react-icons/fc";
import { motion } from "framer-motion";
import { fadeIn } from "./variants";
import Header from "../../components/Header";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ParticlesComponent from "./particles";
import "./particles.css";
import { HiMiniArrowRightCircle } from "react-icons/hi2";

const MemberShipPage = () => {
  const userState = useSelector((state) => state.user);

  const advancedPackage = {
    name: "Unlock World Of Wisdom",
    monthlyPrice: 19,
    yearlyPrice: 199,
    description:
      "Join us as a member for boundless posting privileges and unite with a global community passionate about top-tier blog content.",
    green: "/src/assets/green-dot.png",
  };

  return (
    <>
      <Header />
      {/* particle.js background */}
      <ParticlesComponent id="particles" />
      <div
        className="lg:py-0 md:px-14 px-4 max-w-screen-2xl mx-auto"
        id="pricing"
      >
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid sm:grid-cols-2 lg:grid-cols-1 lg:w-3/12 grid-cols-1 gap-10 mt-20 md:w-11/12 mx-auto"
        >
          {/* Render only the "Advanced" package */}
          <div
            className="border lg:px-10 py-4 md:px-6 px-4 rounded-lg shadow-3xl mx-auto"
            style={{
              borderColor: "#010851",
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            }}
          >
            <h3 className="text-3xl font-bold text-center text-[#010851] font-sans">
              {advancedPackage.name}
            </h3>
            <p className="text-tertiary text-center my-6 font-Roboto font-semibold">
              {advancedPackage.description}
            </p>
            <div class="flex items-center justify-center mt-5 text-center text-4xl font-bold text-[#F33A6A]">
              <svg
                class="w-8 h-8 mr-3 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p>
                ₹{advancedPackage.yearlyPrice}{" "}
                <span class="text-base text-tertiary font-medium font-sans">
                  (eternal)
                </span>
              </p>
            </div>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex items-center">
                <HiMiniArrowRightCircle className="mr-2 text-xl" />
                Join Our Community
              </li>
              <li className="flex items-center">
                <HiMiniArrowRightCircle className="mr-2 text-xl" />
                Elevate your writing
              </li>
              <li className="flex items-center">
                <HiMiniArrowRightCircle className="mr-2 text-xl" />
                Customization Options
              </li>
              <li className="flex items-center">
                <HiMiniArrowRightCircle className="mr-2 text-xl" />
                Blog Url Customization
              </li>
            </ul>

            {/* button */}
            <div className="w-full mx-auto flex items-center justify-center mt-5">
              {userState.userInfo ? (
                <Link to="/payment">
                  <button className="mt-6 px-10 text-secondary border border-secondary hover:bg-primary hover:text-white font-semibold py-2 rounded-lg">
                    Get Started
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="mt-6 px-10 text-secondary border border-secondary hover:bg-primary hover:text-white font-semibold py-2 rounded-lg">
                    Get Started
                  </button>
                </Link>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default MemberShipPage;
