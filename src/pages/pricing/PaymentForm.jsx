import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import "./PaymentForm.css";
import toast from "react-hot-toast";
import axios from "axios";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements || processing) {
      // Stripe.js has not yet loaded or already processing.
      return;
    }

    setProcessing(true);
    try {
      const { paymentMethod, error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement),
      });

      if (error) {
        toast.error(error.message);
      } else {
        // Payment successful, update user membership status
        const response = await axios.put(
          `/api/users/updateProfile/${userState.userInfo._id}`,
          { makeMember: true },
          { headers: { Authorization: `Bearer ${userState.userInfo.token}` } } // Include token in headers
        );
        console.log("Profile updated:", response.data);

        // Dispatch an action to update the user's membership status locally
        dispatch({ type: "UPDATE_MEMBERSHIP_STATUS", payload: true });

        toast.success("Payment successful!");
        // Navigate to success page
        window.location.href = "/success";
      }
    } catch (error) {
      toast.error("Error processing payment: " + error.message);
    } finally {
      setProcessing(false);
    }
  };

  
  return (
    <>
      <div className="main intro">
        <div className="right-payment-info">
          <div className="credit-card-form">
            <img
              className="Image1"
              src="https://i.ibb.co/hgJ7z3J/6375aad33dbabc9c424b5713-card-mockup-01.png"
              alt="Credit card"
            />
            <br />
            <form onSubmit={handleSubmit}>
              <CardElement />
              <br />
              <button type="submit" disabled={!stripe || processing}>
                {processing ? "Processing..." : "Pay ₹ 199"}
              </button>
            </form>
          </div>
          <img
            src="https://www.logo.wine/a/logo/Stripe_(company)/Stripe_(company)-Powered-by-Stripe-Outline-Logo.wine.svg"
            style={{
              width: "200px",
              height: "50px",
              marginLeft: "660px",
              marginTop: "2px",
              marginBottom: "30px",
            }}
            alt="Powered by stripe"
          />
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
