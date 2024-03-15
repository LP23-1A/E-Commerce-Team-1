"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Status(status: any, id: any) {
  interface Order {
    _id: any;
    status: string;
    orderNumber: String;
    amountPaid: Number;
    amountToBePaid: Number;
    createdAt: String;
  }
  
  const [order, setOrder] = useState<Order[]>([]);
  const api = "http://localhost:8000/order/get";

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
  
  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      await axios.put(`http://localhost:8000/order/${orderId}`, {
        status: newStatus,
      });
      setOrder((prevOrder) =>
        prevOrder.map((o) => {
          if (o._id === orderId) {
            return { ...o, status: newStatus };
          }
          return o;
        })
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  const statusOptions: any = {
    "Бэлтгэгдэж байна": ["Бэлтгэгдэж байна", "Хүргэгдсэн", "Хүргэлтэнд гарсан", "Шинэ захиалга","Цуцлагдсан"],
    "Шинэ захиалга": ["Шинэ захиалга", "Бэлтгэгдэж байна", "Хүргэгдсэн", "Хүргэлтэнд гарсан","Цуцлагдсан"],
    "Хүргэлтэнд гарсан": ["Хүргэлтэнд гарсан", "Бэлтгэгдэж байна", "Хүргэгдсэн", "Шинэ захиалга","Цуцлагдсан"],
    "Цуцлагдсан": ["Цуцлагдсан","Хүргэлтэнд гарсан", "Бэлтгэгдэж байна", "Хүргэгдсэн", "Шинэ захиалга"]
  };

  const statusStyles: any = {
    "Бэлтгэгдэж байна": "text-[#3F4145] bg-[#ECEDF0]",
    "Шинэ захиалга": "text-[#3F4145] bg-white border-[1px]",
    "Хүргэлтэнд гарсан": "text-[#1890FF] bg-[#B7DDFF]",
  };

  if (status.status === "Хүргэгдсэн") {
    return <p className="bg-[#C1E6CF] color-[#0A4E22] px-[10px] py-[6px] rounded-[20px] text-[#0A4E22]">Хүргэгдсэн</p>;
  }
  else if (status.status === "Цуцлагдсан") {
    return <p className="text-[#AE0000] bg-[#FF8686] px-[10px] py-[6px] rounded-[20px]">Цуцлагдсан</p>
  }

  const options = statusOptions[status.status] || [];
  const style = statusStyles[status.status] || "text-[#3F4145] bg-[#ECEDF0]";

  return (
    <select
      onChange={(e) => handleStatusChange(status.id, e.target.value)}
      className={`${style} px-[10px] py-[6px] rounded-[20px]`}
    >
      {options.map((option:any) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}
