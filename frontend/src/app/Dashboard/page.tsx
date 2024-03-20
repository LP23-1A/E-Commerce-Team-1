"use client";

import Product from "../../Components/BestProduct";
import DollarIcon from "../../Components/Icon/Dollar";
import OrderIcon from "../../Components//Icon/OrderIcon";
import UserBlackIcon from "../../Components/Icon/UserBlackIcon";
import Sidebar from "@/Components/Sidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const API = "http://localhost:8000/dashboard/sum";

const dashboard = () => {
    const [data, setData]: any = useState([]);
    const amount = useRef(0);
    const dashboardHandler = async () => {
      let res = await axios.get(API);
      amount.current = res.data.data.incomeData[0].amountPaid;
      setData(res.data.data);
    };
  
    useEffect(() => {
      dashboardHandler();
    }, []);
  return (
    <div className="flex">
        <Sidebar/>
        <div className="bg-[#ECEDF0] px-[24px] py-[30px] w-[100%] flex flex-col gap-[30px]">
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <DollarIcon />
            <p className="font-semibold text-[16px]">Орлого</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">{amount.current}</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <OrderIcon />
            <p className="font-semibold text-[16px]">Захиалга</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">{data?.orderCount}</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
            <UserBlackIcon />
            <p className="font-semibold text-[16px]">Хэрэглэгч</p>
          </div>
          <h1 className="text-[32px] font-bold text-[#121316]">{data?.userCount}</h1>
          <p className="text-[#5E6166] font-normal">Өнөөдөр</p>
        </div>
      </div>
      <div className="flex gap-[24px]">
        <Product />
      </div>
    </div>
    </div>
  );
}
export default dashboard