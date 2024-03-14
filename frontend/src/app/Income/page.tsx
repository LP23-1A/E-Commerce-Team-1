"use client";

import DollarIcon from "../../Components/Icon/Dollar";
import OrderIcon from "../../Components/Icon/OrderIcon";
import SaveIcon from "../../Components/Icon/Save";
import UserIcon from "../../Components/Icon/User";
import UserBlackIcon from "../../Components/Icon/UserBlackIcon";

const data = [
  {
    orderId: "123",
    subscriber: "test@gmail.com",
    phone: "88888888",
    price: "12000",
    payment: "2",
  },
  {
    orderId: "1234",
    subscriber: "test@gmail.com",
    phone: "88888888",
    price: "95000",
    payment: "3",
  },
  {
    orderId: "1235",
    subscriber: "test@gmail.com",
    phone: "88888888",
    price: "59000",
    payment: "4",
  },
  {
    orderId: "1236",
    subscriber: "test@gmail.com",
    phone: "88888888",
    price: "354000",
    payment: "5",
  },
];

export default function Inco() {
  return (
    <div className="bg-[#ECEDF0] pl-[121px] pr-[200px] w-[100vw] h-[100vh] pt-[1.5rem] gap-[8px] flex flex-col">
      <div className="grid grid-cols-1 divide-y border-[1px] border-[#F7F7F8] rounded-[12px] bg-[#FFFFFF]">
        <div className="flex justify-between p-[32px] ">
          <h1 className="text-[20px] font-bold flex items-center text-[#121316]">
            Орлого
          </h1>
          <button className="flex items-center text-[14px] text-[#121316] font-semibold gap-[4px] rounded-[8px] border-[1px] bg-[#1C20240A] px-[12px] py-[8px]">
            <SaveIcon />
            Хуулга татах
          </button>
        </div>
        <div className="flex justify-between p-[32px]">
          <h1 className="text-[#121316] font-bold text-[28px]">235,000₮</h1>
          <div className="gap-[8px] flex">
            <button className="flex items-center text-[14px] text-[#121316] font-semibold gap-[4px] rounded-[8px] border-[1px] bg-[#1C20240A] px-[12px] py-[8px]">
              Өнөөдөр
            </button>
            <button className="flex items-center text-[14px] text-[#121316] font-semibold gap-[4px] rounded-[8px] border-[1px] bg-[#1C20240A] px-[12px] py-[8px]">
              7 хоног
            </button>
            <button className="flex items-center text-[14px] text-[#121316] font-semibold gap-[4px] rounded-[8px] border-[1px] bg-[#1C20240A] px-[12px] py-[8px]">
              Сараар
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols divide-y border-[2px] flex-col border-[#F7F7F8] rounded-[12px] bg-[#FFFFFF]">
        <div className=" flex justify-between px-[24px] py-[12px]">
          <h1 className=" text-[12px] text-[#3F4145] font-semibold">
            Захиалгын ID дугаар
          </h1>
          <h1 className=" text-[12px] text-[#3F4145] font-semibold">
            Захиалагч
          </h1>
          <h1 className=" text-[12px] text-[#3F4145] font-semibold">Төлбөр</h1>
          <h1 className=" text-[12px] text-[#3F4145] font-semibold">Огноо</h1>
        </div>
        <div className=" border-[#F7F7F8] rounded-[12px] bg-[#FFFFFF] flex justify-between flex-col ">
          <>
            {data.map((e) => {
              return (
                <div className="px-[24px] py-[16px] text-[12px] flex justify-between items-center">
                  <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                    {e.orderId}
                  </p>
                  <div className=" flex items-center gap-[12px]">
                    <div>
                      <p className="text-[#121316] font-semibold text-[14px]">
                        {e.subscriber}
                      </p>
                      <p className="text-[#3F4145] font-normal text-[14px]">
                        {e.phone}
                      </p>
                    </div>
                  </div>
                  <p className="text-[14px] text-[#121316] font-normal">
                    {e.payment}$
                  </p>
                  <p className="text-[14px] text-[#121316] font-normal">
                    {e.price}
                  </p>
                </div>
              );
            })}
          </>
        </div>
      </div>
    </div>
  );
}
