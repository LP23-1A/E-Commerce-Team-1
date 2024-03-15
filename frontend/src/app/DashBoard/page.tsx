"use client";

import Product from "../../Components/BestProduct";
import dollar from "@/components/Icon/Dollar";
import OrderIcon from "../../Components/Icon/OrderIcon";
import UserBlackIcon from "../../Components/Icon/UserBlackIcon";

export default function DashBoard() {
  return (
    <div className="bg-[#ECEDF0] px-[24px] py-[30px] w-[100%] flex flex-col gap-[30px]">
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <p className="font-semibold text-[16px]">Орлого</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">235,000₮</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <OrderIcon />
            <p className="font-semibold text-[16px]">Захиалга</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">58</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <UserBlackIcon />
            <p className="font-semibold text-[16px]">Хэрэглэгч</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">980</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
      </div>
      <div className="flex gap-[24px]">
        <Product />
      </div>
    </div>
  );
}