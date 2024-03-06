"use client";
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Order() {
    interface Order {
        _id: any; status: string; orderNumber: string; amountPaid: Number; amountToBePaid: number; createdAt: string;
      }
  const api = "http://localhost:8000/order/get";
  const [order, setOrder] = useState<Order[]>([]);

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
        status: newStatus
      });
      // Update the order status in the state
      setOrder(prevOrder => prevOrder.map(o => {
        if (o._id === orderId) {
          return { ...o, status: newStatus };
        }
        return o;
      }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };


  return (
    <div>
      <Navbar />
      <div className="flex gap-[24px] pt-[24px]">
        <Sidebar />
        <div className="rounded-[8px] border-[1px]">
          <div className="pl-[24px] py-[20px]">
            <p className="text-[20px]">Захиалга</p>
          </div>
          <div className="flex border-[1px] bg-[#D6D8DB]">
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[191px]">
              Захиалгын ID дугаар
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[209px]">
              Үйлчлүүлэгч
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[168px]">
              Огноо
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[129px]">
              Цаг
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[137px]">
              Төлбөр
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[214px]">
              Статус
            </p>
            <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px] w-[122px]">
              Дэлгэрэнгүй
            </p>
          </div>
          {order.map((el) => {
            const dateString = el.createdAt;
            const date = new Date(dateString);
            
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const formattedDate = `${year}-${month}-${day}`;


            const time = new Date(dateString);

            const hours = String(time.getUTCHours()).padStart(2, '0');
            const minutes = String(time.getUTCMinutes()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            const number = el.amountToBePaid;
            const formattedNumber = number.toLocaleString('en-US') + '₮';

            console.log()

            const status = () => {
                if (el.status === "Бэлтгэгдэж байна"){
                    return (
                        <select className="text-[#3F4145] bg-[#ECEDF0] px-[10px] py-[6px] rounded-[20px]" name="" id="">
                            <option value="">{el.status}</option>
                            <option onChange={(e:any) => handleStatusChange(el._id, e.target.value)} value="">Хүргэгдсэн</option>
                            <option onChange={(e:any) => handleStatusChange(el._id, e.target.value)} value="">Хүргэлтэнд гарсан</option>
                            <option onChange={(e:any) => handleStatusChange(el._id, e.target.value)} value="">Шинэ захиалга</option>
                        </select>
                    )
                }
                if (el.status === "Шинэ захиалга"){
                    return (
                        <select className="text-[#3F4145] bg-white px-[10px] py-[6px] rounded-[20px] border-[1px]" name="" id="">
                            <option value="">{el.status}</option>
                            <option value="">Хүргэгдсэн</option>
                            <option value="">Хүргэлтэнд гарсан</option>
                            <option value="">Шинэ захиалга</option>
                        </select>
                    )
                }
                if (el.status === "Хүргэлтэнд гарсан"){
                    return (
                        <select className="text-[#1890FF] bg-[#B7DDFF] px-[10px] py-[6px] rounded-[20px]" name="" id="">
                            <option value="">{el.status}</option>
                            <option value="">Хүргэгдсэн</option>
                            <option value="">Хүргэлтэнд гарсан</option>
                            <option value="">Шинэ захиалга</option>
                        </select>
                    )
                }
                else if (el.status === "Хүргэгдсэн"){
                    return (
                        <p className="bg-[#C1E6CF] color-[#0A4E22] px-[10px] py-[6px] rounded-[20px] text-[#0A4E22]">Хүргэгдсэн</p>
                    )
                }
            }
            
            return (
              <div key={el._id} className="flex">
                <p className="flex items-center py-[28px] px-[24px] w-[143px] box-content">{el.orderNumber}</p>
                <p className="flex items-center py-[18px] px-[24px] w-[161px] box-content flex-wrap">{"user.gmail.com.com user.name"}</p>
                <p className="flex items-center py-[26px] px-[24px] w-[120px] box-content">{formattedDate}</p>
                <p className="flex items-center py-[26px] px-[24px] w-[81px] box-content">{formattedTime}</p>
                <p className="flex items-center py-[26px] px-[24px] w-[89px] box-content">{formattedNumber}</p>
                <p className="pl-[28px] py-[24px] flex items-center w-[188px] box-content">
                    {status()}
                </p>
                <button className="flex items-center py-[30px] px-[57px] w-[] box-content">{">"}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
