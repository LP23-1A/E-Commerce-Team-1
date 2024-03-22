import { useEffect, useState } from "react";
import Bullet from "./Icon/BulletIcon";
import axios from "axios";
import { SettingsIcon } from "./Icon";
import { log } from "console";

const API = "http://localhost:8000/dashboard/sum"

export default function Product() {
  const [data, setData] = useState([{ productName: "", sales: "", price: "", productCode:"", images:""}]);
  const handler = async () => {
    try {
      const res = await axios.get(API);
      setData(res.data.data.productInfo);
      console.log(res.data.data.productInfo);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(() => {
    handler();
  }, []);
  return (
    <div className="px-[24px] py-[16px] bg-[#FFFFFF] w-[100%] rounded-[12px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[18px]">Шилдэг бүтээгдэхүүн</h1>
        <Bullet />
      </div>
      <div>
        <div className="bg-[#ECEDF0] flex justify-between px-[24px] py-[16px]">
          <div className=" text-[12px] font-semibold">№</div>
          <div className=" text-[12px] font-semibold">Бүтээгдэхүүн</div>
          <div className=" text-[12px] font-semibold">Зарагдсан</div>
          <div className=" text-[12px] font-semibold">Үнэ</div>
        </div>
        <>
          { data && 
          data.map((el,number) => {
            return (
              <div className="px-[24px] py-[16px] text-[12px] flex justify-between items-center">
                <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                {number + 1}
                </p>
                <div className=" flex items-center gap-[12px] px-[8px] py-[12px] ">
                  <img src={el.images} className="h-10 w-10 rounded-full" alt="" />
                  <div>
                    <p className="text-[#121316] font-semibold text-[14px]">
                    {el.productName}
                    </p>
                    <p className="text-[#3F4145] font-normal text-[14px]">
                    {el.productCode}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                  {el.sales}
                </p>
                <p className="text-[14px] text-[#121316] font-normal  py-[16px] px-[24px]">
                  {el.price}$
                </p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}