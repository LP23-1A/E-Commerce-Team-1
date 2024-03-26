'use client';
import { SavedProduct } from "@/Components/Admin/Interface/SavedProducts";
import axios from "axios";
import { useEffect, useId, useState } from "react";

const api = "http://localhost:8000/savedProduct/get";

export default function SavedProducts(){
    const [order, setOrder] = useState<SavedProduct[]>([]);
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

    console.log(order.length);
    return (
        <div className="flex flex-col gap-[34px] w-[1440px] items-center justify-center">
            <div className="flex flex-col items-start">
                <p className="text-[#151875] text-[22px]">Хадгалсан бүтээгдэхүүн </p>
                <p className="text-[#8A8FB9] text-[12px]">{order.length} бүтээгдэхүүн</p>
            </div>
            {order.map((el) => {
                console.log(el.products)
                function formatCurrency(amount: number): string {
                    const formattedAmount = amount.toLocaleString('en-US');
                    return `${formattedAmount}₮`;
                }
                const formattedAmount = formatCurrency(el.products?.price);
                return (
                    <div key={el._id} className="flex gap-[16px] w-[1200px] h-[270px]">
                        <img className="w-[270px] h-[270px]" src={el.products?.images} alt="" />
                        <div className="flex flex-col justify-between items-start p-[16px]">
                            <div className="flex flex-col gap-[16px]">
                                <p className="text-[#151875] text-[18px]">{el.products.productName}</p>
                                <p className="text-[21px] text-[#151875]">{formattedAmount}</p>
                                <p className="text-[#9295AA] text-[18px]">{el.products.description}</p>
                            </div>
                            <div className="flex gap-[10px]">
                                <button className="text-[16px] text-white py-[12px] px-[25px] flex items-center justify-center bg-[#FB2E86] rounded-[4px]">Худалдан авах</button>
                                <button className="text-[16px] text-[#535399] py-[12px] px-[25px] flex items-center justify-center bg-[#F6F5FF] rounded-[4px]">Хасах</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}