'use client'
import React, { createContext, useRef, useState } from "react";

export const CartContexForProduct = createContext({
  productData: [],
  intoBasket: (product: any) => {},
  renewProductData: (product: any) => {},
});

export const CartProvider = ({ children }: any) => {
  const [productData, setProductData] = useState<any>([]);

  const renewProductData: any = (updatedProductData: any) => {
    setProductData(updatedProductData);
  };

  const intoBasket: any = (productInfo: any) => {
    setProductData([...productData, productInfo]);
  };

  // const repeatedProduct = (id:string) => {
  //   setProductData((el:any) => el._id === id ? count + 1)
  // }

  return (
    <CartContexForProduct.Provider
      value={{ productData, intoBasket, renewProductData }}
    >
      {children}
    </CartContexForProduct.Provider>
  );
};


