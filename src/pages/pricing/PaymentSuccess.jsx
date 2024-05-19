import React, { useEffect } from "react";
import "./PaymentSuccess.css";
// import backgroundSVG from "./PaymentSuccessBG.jpg"; // Import your background SVG image
import { useDispatch } from "react-redux";
import { logout } from "../../../src/store/actions/user";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Dispatch logout action
    dispatch(logout());

    // After 4 seconds, redirect to login
    const redirectTimeout = setTimeout(() => {
      navigate("/login");
    }, 4000);

    // Clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className="background">
      <div className="back">
        <svg
          viewBox="0 0 26 26"
          xmlns="http://www.w3.org/2000/svg"
          width="20vw"
          height="20vw"
        >
          {/* Circle and tick paths */}
          <g
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              className="circle"
              d="M13 1C6.372583 1 1 6.372583 1 13s5.372583 12 12 12 12-5.372583 12-12S19.627417 1 13 1z"
            />
            <path className="tick" d="M6.5 13.5L10 17 l8.808621-8.308621" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default PaymentSuccess;
