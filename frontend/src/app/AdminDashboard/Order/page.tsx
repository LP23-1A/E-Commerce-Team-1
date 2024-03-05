'use client';
import Navbar from "@/Components/Navbar";
import Sidebar from "@/Components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"

export default function Order(){
    const api = "http://localhost:8000/order/get";
    const [order, setOrder] = useState([]);

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
    console.log (order);

    return (
        <div>
            <Navbar/>
            <div className="flex gap-[24px] pt-[24px]">
                <Sidebar/>
                <div className="rounded-[8px] bg-black">
                    <div className="pl-[24px] py-[20px]">
                        <p className="text-[20px]">Захиалга</p>
                    </div>
                    <div className="flex gap-[40px]">
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Захиалгын ID дугаар</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Үйлчлүүлэгч</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Огноо</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Цаг</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Төлбөр</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Статус</p>
                        <p className="text-[12px] text-[#3F4145] pl-[24px] py-[14px]">Дэлгэрэнгүй</p>
                    </div>
                    {order.map((el) => {
                        return (
                            <div key={uuidv4()}>
                                <p></p>
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}