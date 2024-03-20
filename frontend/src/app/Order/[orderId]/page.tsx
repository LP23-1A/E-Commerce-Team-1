'use client';
import Sidebar from "@/Components/Admin/Sidebar";
import Arrow from "@/Components/Icon/Arrow";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetails( {params} : {params: {orderId: string}} ) {
    interface Order {
        _id: any; status: string; orderNumber: string; amountPaid: Number; amountToBePaid: number; createdAt: string;
      }
    const api = `http://localhost:8000/order/${params.orderId}`;
    const router = useRouter();
    const [order, setOrder] = useState<Order[]>([]);
    console.log(params.orderId)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get(api);
            setOrder(res.data);
            console.log(res)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      console.log(order)

    return (
        <div>
            <div className="flex">
                <Sidebar />
                <div>
                    <button onClick={() => router.push("/Order")} className="text-[16px] p-[16px] flex gap-[32px] items-center">
                        <Arrow />
                        <p className="text-[16px]">Захиалгын дэлгэрэнгүй</p>
                    </button>
                    <div className="flex gap-[24px]">
                        <div className="w-[627px] flex flex-col gap-[24px] p-[24px] rounded-[12px] border-[1px] border-[#ECEDF0]">
                            <div className="flex justify-between">
                                <div>
                                    <p className="text-[16px] text-[#3F4145]">Захиалгын ID дугаар: </p>
                                    <p className="text-[16px] text-[#121316]">{}</p>
                                </div>
                                <div>
                                    status
                                </div>
                            </div>
                            <div>
                                <p className="text-[16px] text-[#3F4145]">Захиалагч: Хувь хүн </p>
                                <p className="text-[16px] text-[#3F4145]">user.name user.gmail user.number</p>
                            </div>
                        </div>
                        <div>
                            <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                                <p className="py-[20px] px-[24px] text-[16px]">Хүргэлтийн мэдээлэл</p>
                                <div className="px-[24px] pt-[24px] pb-[48px]">
                                    <p className="text-[16px]">Гэр</p>
                                    <p className="text-[16px]">user.address</p>
                                </div>
                            </div>
                            <div className="rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                                <p className="py-[20px] px-[24px] text-[16px]">Төлбөрийн мэдээлэл</p>
                                <div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}