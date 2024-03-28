"use client";
import { useState, useEffect, useContext } from "react";
import { UserIcon, HeartIcon, CartIcon, AtomIcon } from "./Icon/index";
import { useRouter } from "next/navigation";
import "./Promotions/ButtonStyle.css";
import { CartContexForProduct } from "./CartContext";

export default function HeadingBar() {
  const { productData } = useContext(CartContexForProduct);

  useEffect(() => {
    console.log(productData.length, "rtest");
  }, [productData]);

  const [currentUrl, setCurrentUrl] = useState(window.location.href);
  const router = useRouter();

  const NavigateToBasket = () => {
    router.push("/User/BasketProduct");
  };

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  return (
    <div className="flex flex-row gap-[29px]">
      <a
        href="/User/LogIn"
        className="flex flex-row items-center gap-2 absolute mt-[10px] ml-[-90px]"
      >
        <div className="flip-horizontol">
          <div className="front">
            <div
              style={{
                background: currentUrl.includes("/User/LogIn") ? "green" : "",
                padding: "2px",
              }}
              className="flex flex-row items-center gap-2"
            >
              <UserIcon />
              <h5 className="font-bold text-base">login</h5>
            </div>
          </div>
          <div className="back">
            <div className="flex flex-row items-center gap-2">
              <h5 className="font-bold text-base text-red-400">enter</h5>
              <AtomIcon />
            </div>
          </div>
        </div>
      </a>
      <button className="flex flex-row items-center gap-2">
        <h5
          className="text-base font-weight font-semibold"
          style={{ color: "#F1F1F1" }}
        >
          Store
        </h5>
        <HeartIcon />
      </button>
      <div className="relative mt-[15px]">
        <button onClick={NavigateToBasket} className="flex items-center">
          <CartIcon />
        </button>
        
          <div className="w-[15px] h-[15px] rounded-full bg-[#EC42A2] flex justify-center items-center absolute mt-[-25px] ml-[15px]">
            {productData?.length}
          </div>
        
      </div>
    </div>
  );
}
