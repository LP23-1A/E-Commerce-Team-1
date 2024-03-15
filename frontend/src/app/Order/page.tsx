"use client";
import Sidebar from "@/Components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Status from "@/Components/Status";
import Datefilter from "@/Components/DateFilter";
import TitleOrders from "@/Components/TitlesOrder";
import { statesOfOrder } from "@/Components/utils/StatesOfOrder";
import { Toaster, toast } from "react-hot-toast";

export default function Order() {
  interface Order {
    _id: any;
    status: string;
    orderNumber: string;
    amountPaid: Number;
    amountToBePaid: number;
    createdAt: string;
  }
  const api = "http://localhost:8000/order/get";

  const [order, setOrder] = useState<Order[]>([]);
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string | null>("Бүгд");
  const [filtereOrderData, setFiltereOrderData] = useState<Order[]>([]);
  

  const handleButtonClick = (name: string) => {
    setSelectedState(name);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(api);
        setOrder(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="flex gap-[24px]">
        <Sidebar />

        <div className="bg-[#F7F7F8]">
          <Datefilter />
          <div className="rounded-[8px] border-[1px] m-[24px] bg-white">
            <div className="pl-[24px] py-[20px]">
              <p className="text-[20px]">Захиалга</p>
            </div>
            <TitleOrders />
            {filtereOrderData && filtereOrderData.map((el: any) => {

              const dateString = el.createdAt;
              const date = new Date(dateString);

              const year = date.getFullYear();
              const month = String(date.getMonth() + 1).padStart(2, "0");
              const day = String(date.getDate()).padStart(2, "0");
              const formattedDate = `${year}-${month}-${day}`;

              const time = new Date(dateString);

              const hours = String(time.getUTCHours()).padStart(2, "0");
              const minutes = String(time.getUTCMinutes()).padStart(2, "0");
              const formattedTime = `${hours}:${minutes}`;

              const number = el.amountToBePaid;
              const formattedNumber = number.toLocaleString("en-US") + "₮";

              return (
                <div key={el._id} className="flex">
                  <p className="flex items-center py-[28px] px-[24px] w-[143px] box-content">
                    {el.orderNumber}
                  </p>
                  <p className="flex items-center py-[18px] px-[24px] w-[161px] box-content flex-wrap">
                    {"user.gmail.com.com user.name"}
                  </p>
                  <p className="flex items-center py-[26px] px-[24px] w-[120px] box-content">
                    {formattedDate}
                  </p>
                  <p className="flex items-center py-[26px] px-[24px] w-[81px] box-content">
                    {formattedTime}
                  </p>
                  <p className="flex items-center py-[26px] px-[24px] w-[89px] box-content">
                    {formattedNumber}
                  </p>
                  <p className="pl-[28px] py-[24px] flex items-center w-[188px] box-content">
                    <Status status={el.status} id={el._id} />
                  </p>
                  <button
                    onClick={() => router.push("OrderDetails")}
                    className="flex items-center py-[30px] px-[57px] w-[] box-content"
                  >
                    {">"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
