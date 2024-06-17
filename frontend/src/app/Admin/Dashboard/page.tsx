"use client";

import Product from "../../../Components/Admin/BestProduct";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Sidebar from "@/Components/Admin/Sidebar";
import UserBlackIcon from "@/Components/Admin/Icon/UserBlackIcon";
import { OrderIcon } from "@/Components/Admin/Icon";
import Chart from "@/Components/Admin/Salechart";
import Chartver from "@/Components/Admin/ChartTwo";
import Navbar from "@/Components/Admin/Navbar";

const API = "http://localhost:8000/dashboard/sum";

const dashboard = () => {
    const [data, setData]: any = useState([]);
    const amount = useRef(0);
    const dashboardHandler = async () => {
      let res:any = await axios.get(API);
      amount.current = res.data.data.incomeData[0]?.amountPaid ?? "";
      setData(res.data.data); 
    };
  
    useEffect(() => {
      dashboardHandler();
    }, []);
  return (
    <div>
      <Navbar/>
    <div className="flex">
        <Sidebar/>
        <div className="bg-[#ECEDF0] px-[24px] py-[30px] w-[100%] flex flex-col gap-[30px]">
      <div className="flex gap-[24px]">
        <div className="flex flex-col gap-[12px] px-[24px] py-[16px] bg-[#FFFFFF] rounded-[12px]  w-[100%]">
          <div className="flex items-center  gap-[8px]">
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
        <div className="w-[50%]">
        <Product /></div> 
        <div className="w-[50%] gap-[30px] flex flex-col">
        <Chart/>
        <Chartver/>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
export default dashboard