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
  console.log(status, id)
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
      console.log(newStatus);
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

  if (status === "Бэлтгэгдэж байна") {
    return (
      <select
        onChange={(e: any) => handleStatusChange(id, e.target.value)}
        className="text-[#3F4145] bg-[#ECEDF0] px-[10px] py-[6px] rounded-[20px]"
        name=""
        id=""
      >
        <option value="Бэлтгэгдэж байна">Бэлтгэгдэж байна</option>
        <option value="Хүргэгдсэн">Хүргэгдсэн</option>
        <option value="Хүргэлтэнд гарсан">Хүргэлтэнд гарсан</option>
        <option value="Шинэ захиалга">Шинэ захиалга</option>
      </select>
    );
  }
  else if (status === "Шинэ захиалга") {
    return (
      <select
        onChange={(e: any) => handleStatusChange(id, e.target.value)}
        className="text-[#3F4145] bg-white px-[10px] py-[6px] rounded-[20px] border-[1px]"
        name=""
        id=""
      >
        <option value="Шинэ захиалга">Шинэ захиалга</option>
        <option value="Бэлтгэгдэж байна">Бэлтгэгдэж байна</option>
        <option value="Хүргэгдсэн">Хүргэгдсэн</option>
        <option value="Хүргэлтэнд гарсан">Хүргэлтэнд гарсан</option>
      </select>
    );
  }
  else if (status === "Хүргэлтэнд гарсан") {
    return (
      <select
        onChange={(e: any) => handleStatusChange(id, e.target.value)}
        className="text-[#1890FF] bg-[#B7DDFF] px-[10px] py-[6px] rounded-[20px]"
        name=""
        id=""
      >
        <option value="Хүргэлтэнд гарсан">Хүргэлтэнд гарсан</option>
        <option value="Бэлтгэгдэж байна">Бэлтгэгдэж байна</option>
        <option value="Хүргэгдсэн">Хүргэгдсэн</option>
        <option value="Шинэ захиалга">Шинэ захиалга</option>
      </select>
    );
  } else if (status === "Хүргэгдсэн") {
    return (
      <p className="bg-[#C1E6CF] color-[#0A4E22] px-[10px] py-[6px] rounded-[20px] text-[#0A4E22]">
        Хүргэгдсэн
      </p>
    );
  }
}
