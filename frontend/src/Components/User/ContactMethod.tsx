"use client";
import React from "react";
import { MessageIcon, PhoneIcon } from "./Icon/index";
import "./Promotions/ButtonStyle.css";
export default function ContactMethod() {
  return (
    <div className="flex flex-row gap-[50px] w-[400px] justify-between">
      <div className="btn-flip mt-[10px]">
        <div className="front">
          <div className="flex flex-row items-center gap-2">
            <MessageIcon />
            <h5 className="font-bold text-base">PineCone@ecommerce.mn</h5>
          </div>
        </div>
        <div className="back">
          <div className="flex flex-row items-center gap-2">
            <MessageIcon />
            <h5 className="font-bold text-base text-red-400">
              info@ecommerce.mn
            </h5>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2">
        <PhoneIcon />
        <h5 className="font-bold text-base">77123456</h5>
      </div>
    </div>
  );
}
