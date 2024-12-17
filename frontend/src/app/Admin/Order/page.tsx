"use client";
import Sidebar from "@/Components/Admin/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Status from "@/Components/Admin/Status";
import Datefilter from "@/Components/Admin/DateFilter";
import TitleOrders from "@/Components/Admin/TitlesOrder";
import { statesOfOrder } from "@/Components/Admin/utils/StatesOfOrder";
import { Toaster, toast } from "react-hot-toast";
import { Order } from "@/Components/Admin/Interface/Order";
import Navbar from "@/Components/Admin/Navbar";

const api = "http://localhost:8000/order/get";

export default function Order() {
  const [order, setOrder] = useState<Order[]>([]);
  const router = useRouter();
  const [selectedState, setSelectedState] = useState<string | null>("Бүгд");
  const [filtereOrderData, setFiltereOrderData] = useState<Order[]>([]);
  const [input, setInput] = useState("");

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

  useEffect(() => {
    if (selectedState) {
      const filteredData = order.filter((el) => el.status === selectedState);
      if (filteredData.length > 0) {
        setFiltereOrderData(filteredData);
      } else if (selectedState === "Бүгд") {
        setFiltereOrderData(order);
      } else {
        setFiltereOrderData([]);
        toast.error("There is no data for the selected status");
      }
    }
  }, [selectedState, order]);

  const manageInput = (event: any) => {
    const value = event.target.value;
    setInput(value);
    searchInput(value);
  };

  const searchInput = (number_email: any) => {
    const filteredOrderData = order?.filter(
      (el: any) =>
        el.userId?.email &&
        el.userId.email.toLowerCase().includes(number_email.toLowerCase())
    );
    setFiltereOrderData(filteredOrderData);
  };

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="bg-[#F7F7F8] w-full">
          <div>
            {statesOfOrder.map((element, i) => (
              <button
                key={i}
                onClick={() => handleButtonClick(element)}
                style={{
                  borderStyle: selectedState === element ? "solid" : "",
                  borderBottomWidth: selectedState === element ? "2px" : "",
                  borderColor: selectedState === element ? "#121316" : "",
                  fontWeight: selectedState === element ? "bold" : "",
                }}
                className="text-[14px] px-[16px] py-[20px] text-[#3F4145]"
              >
                {element}
              </button>
            ))}
          </div>
          <div className="flex justify-between items-end">
            <Datefilter {...{ order, setFiltereOrderData }} />
            <div>
              <input
                value={input}
                onChange={manageInput}
                className="rounded-[8px] border-[1px] border-[#D6D8DB] px-[8px] py-[8px] mr-[24px]"
                type="text"
                placeholder="Дугаар, Имэйл"
              />
            </div>
          </div>
          <div className="rounded-[8px] border-[1px] m-[24px] bg-white">
            <div className="pl-[24px] py-[20px]">
              <p className="text-[20px]">Захиалга</p>
            </div>
            <TitleOrders />
            {filtereOrderData &&
              filtereOrderData.map((el: any) => {
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
                      <b>{el.userId?.userName}</b> {el.userId?.email}
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
                    <div className="pl-[28px] py-[24px] flex items-center w-[188px] box-content">
                      <Status status={el.status} id={el._id} />
                    </div>
                    <button
                      onClick={() => router.push(`Order/${el._id}`)}
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
