"use client";
import { useParams, usePathname } from "next/navigation";
import React from "react";

const NotFound = () => {
  const pathname = usePathname();

  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <>
      <h2>
        Review {reviewId} not fount for the product {productId}
      </h2>
    </>
  );
};

export default NotFound;
