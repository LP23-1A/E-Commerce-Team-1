"use client";
import { useState, useEffect } from "react";
import { UserIcon, HeartIcon, CartIcon, AtomIcon } from "./Icon/index";
import "./Promotions/ButtonStyle.css";

export default function HeadingBar() {
  const [currentUrl, setCurrentUrl] = useState(window.location.href);

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
      <button className="flex items-center">
        <CartIcon />
      </button>
    </div>
  );
}
