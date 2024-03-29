"use client";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Sidebar from "../../../Components/Admin/Sidebar";
import Navbar from "@/Components/Admin/Navbar";

const API = "http://localhost:8000/order/get";
const API2 = "http://localhost:8000/dashboard/sum";

export default function Inco() {
  const [data, setdata, setData]: any = useState([]);
  const handler = async () => {
    let res = await axios.get(API);
    console.log(res.data, "res data");
    setdata(res.data);
  };

  useEffect(() => {
    handler();
  }, []);

  const amount = useRef(0);
    const dashboardHandler = async () => {
      let ress = await axios.get(API2);
      amount.current = ress.data.data.incomeData[0].amountPaid;
    };
  
    useEffect(() => {
      dashboardHandler();
    }, []);
  return (
    <div>
      <Navbar/>
    <div className="flex">
      <Sidebar/>
      <div className="bg-[#ECEDF0] pl-[121px] pr-[200px] w-[100vw] h-[100vh] pt-[1.5rem] gap-[8px] flex flex-col">
        <div className="grid grid-cols-1 divide-y border-[1px] border-[#F7F7F8] rounded-[12px] bg-[#FFFFFF]">
          <div className="flex justify-between p-[32px] ">
            <h1 className="text-[20px] font-bold flex items-center text-[#121316]">
              Орлого
            </h1>
            <button className="flex items-center text-[14px] text-[#121316] font-semibold gap-[4px] rounded-[8px] border-[1px] bg-[#1C20240A] px-[12px] py-[8px]">
              Хуулга татах
            </button>
          </div>
          <div className="flex justify-between p-[32px]">
            <h1 className="text-[#121316] font-bold text-[28px]">{amount.current}</h1>
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
          <div className="">
            <div className="border-[#F7F7F8] rounded-[12px] bg-[#FFFFFF] flex justify-between flex-col ">
              {data &&
                data.map((e: any) => {
                  const dateString = e.createdAt;
                  const date = new Date(dateString);
                  const year = date.getFullYear();
                  const month = String(date.getMonth() + 1).padStart(2, "0");
                  const day = String(date.getDate()).padStart(2, "0");
                  const NewDate = `${year}-${month}-${day}`;

                  const amount = e.amountPaid;
                  const Newamount = amount + "₮";

                  return (
                    <div  className="px-[24px] py-[16px] text-[12px] flex justify-between items-center">
                      <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                        {e.orderNumber}
                      </p>
                      <div className=" flex items-center gap-[12px]">
                        <div>
                          <p className="text-[#121316] font-semibold text-[14px]">
                            {e.userId?.email}
                          </p>
                          <p className="text-[#3F4145] font-normal text-[14px]">
                            {e.userId?.phoneNumber}
                          </p>
                        </div>
                      </div>
                      <p className="text-[14px] text-[#121316] font-normal">
                        {Newamount}
                      </p>
                      <p className="text-[14px] text-[#121316] font-normal">
                        {NewDate}
                      </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
