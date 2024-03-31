"use client";
import { CartContexForProduct } from "@/Components/User/CartContext";
import { useContext, useEffect, useState } from "react";
import { FetchAllProducts } from "./Api/FetchAllProducts";
import { ContextTypeProduct } from "./Interface/ContextType";
import useSWR from "swr";
import CartHeading from "./CartHeading";
import AsideCompletion from "./AsideCompletion";
import ProductCartContent from "./ProductCartContent";

export default function CartProduct() {
  const { productData } = useContext(CartContexForProduct);
  const { data, isLoading, error } = useSWR("/product/get", FetchAllProducts);
  const [readyData, setReadyData] = useState([]);

  useEffect(() => {
    if (!isLoading && productData.length > 0) {
      const updatedData: any = productData.map(
        (product: ContextTypeProduct) => {
          const foundProduct = data.find(
            (item: { _id: any }) => item._id === product._id
          );
          if (foundProduct) {
            return {
              ...foundProduct,
              count: product.count,
            };
          }
          return null;
        }
      );
      setReadyData(updatedData);
    }
  }, [productData, data, isLoading]);

  const increaseCount = (comingId: string) => {
    const updatedProduct: any = readyData.map((el: any) => {
      if (el._id === comingId) {
        return {
          ...el,
          count: (el.count || 0) + 1,
        };
      }
      return el;
    });
    setReadyData(updatedProduct);
  };

  const decreaseCount = (comingId: string) => {
    const updatedProduct: any = readyData.map((el: any) => {
      if (el._id === comingId) {
        return {
          ...el,
          count: Math.max((el.count || 0) - 1, 0),
        };
      }
      return el;
    });
    setReadyData(updatedProduct);
  };

  const removeProduct = (comingId: string) => {
    const desiredProduct = readyData.findIndex(
      (el: any) => el._id === comingId
    );
    if (desiredProduct !== -1) {
      const newProducts = [...readyData];
      newProducts.splice(desiredProduct, 1);
      setReadyData(newProducts);
    }
  };

  return (
    <div className="w-full flex justify-center items-center mb-[60px] mt-[60px]">
      <div className="w-10/12 ">
        <CartHeading />
        <div className="w-full flex flex-row justify-between">
          <ProductCartContent
            productData={productData}
            readyData={readyData}
            increaseCount={increaseCount}
            decreaseCount={decreaseCount}
            removeProduct={removeProduct}
          />
          {productData.length !== 0 && (
            <AsideCompletion productData={productData} readyData={readyData} />
          )}
        </div>
      </div>
    </div>
  );
}
