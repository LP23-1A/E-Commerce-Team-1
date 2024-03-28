"use client";
import { CartContexForProduct } from "@/Components/User/CartContext";
import { useContext, useState } from "react";
import { ProductInterface } from "./Interface/ProductInterface";
import CartHeading from "./CartHeading";

export default function CartProduct() {
  const { productData } = useContext(CartContexForProduct);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 ">
        <CartHeading />
        {productData &&
          productData.map((el: ProductInterface, i) => {
            return (
              <div key={i}>
                <div className="flex flex-row">
                  <div className="w-[718px] bg-red-400 flex flex-row justify-between border-solid border-b-2 border-gray-100">
                    <img
                      className="w-[83px] h-[87px] rounded"
                      src={el.images}
                      alt=""
                    />
                    <div className="flex flex-col">
                      <div className="font-extrabold non-italic text-sm text-[#000]">
                        {el.productName}
                      </div>
                      <div className="font-extrabold non-italic text-[#A1A8C1] text-sm">
                        Color: Brown
                      </div>
                    </div>
                    <h5 className="text-sm font-bold non-italic text-[#151875]">
                      {el.price}₮
                    </h5>
                    <div className="flex justify-between">
                      <button className="bg-[#BEBFC2] w-[20px] h-[20px] flex items-center justify-center">
                        -
                      </button>
                      <div>0</div>
                      <button className="bg-[#BEBFC2] w-[20px] h-[20px] flex items-center justify-center">
                        +
                      </button>
                    </div>
                    <div>{el.price}</div>
                  </div>
                  <div className="w-[384px] h-[243px] bg-[#F4F4FC]">
                    <div className="non-italic font-semibold non-italic text-[#1D3178]">
                      Complete
                    </div>
                    <div className="non-italic font-semibold non-italic text-[#1D3178]">
                      Price of Paying
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
