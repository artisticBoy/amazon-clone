"use client";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const { basket } = useSelector((state) => state.cart);
  return (
    <div>
      <h1>{basket.product}</h1>
    </div>
  );
}
