import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { product, price } = booking;
  if (navigation.state === "loading") {
    return <button className=" m-72 btn btn-square loading"></button>;
  }

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center my-5 font-bold text-primary">CHECKOUT</h1>
      <h3 className="text-2xl mb-4">Payment for {product}</h3>
      <p className="text-xl">
        Please pay <strong>${price}</strong>{" "} and confirm your purchase. Thank you.
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
