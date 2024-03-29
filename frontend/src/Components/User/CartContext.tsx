"use client";
import React, { createContext, useEffect, useRef, useState } from "react";

export const CartContexForProduct = createContext({
  productData: [],
  setProductData: (product: any) => {},
});

export const CartProvider = ({ children }: any) => {
  const [productData, setProductData] = useState<any>([]);

  return (
    <CartContexForProduct.Provider
      value={{ productData,  setProductData }}
    >
      {children}
    </CartContexForProduct.Provider>
  );
};
