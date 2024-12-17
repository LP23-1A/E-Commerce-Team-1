"use client";
import Sidebar from "@/Components/Admin/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { Arrow } from "@/Components/Admin/Icon";
import Status from "@/Components/Admin/Status";
import Navbar from "@/Components/Admin/Navbar";

export default function OrderDetails({params,}: {params: { orderId: string };
}) {
  interface Order {
    _id: any;
    status: string;
    orderNumber: string;
    amountPaid: Number;
    amountToBePaid: number;
    createdAt: string;
  }
  const api = `http://localhost:8000/order/${params.orderId}`;
  const router = useRouter();
  const [order, setOrder] = useState<any>([]);

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

  console.log(params.orderId)
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <button
            onClick={() => router.push("/Admin/Order")}
            className="text-[16px] p-[16px] flex gap-[32px] items-center"
          >
            <Arrow />
            <p className="text-[16px]">Захиалгын дэлгэрэнгүй</p>
          </button>
          <div className="flex gap-[24px] p-[24px] bg-[#F7F7F8]">
            <div className="bg-white w-[627px] flex flex-col gap-[24px] p-[24px] rounded-[12px] border-[1px] border-[#ECEDF0]">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[16px] text-[#3F4145]">
                    Захиалгын ID дугаар:{" "}
                  </p>
                  <p className="text-[16px] text-[#121316]">
                    {order.orderNumber}
                  </p>
                </div>
                <Status status={order.status} id={order._id} />
              </div>
              <div>
                <p className="text-[16px] text-[#3F4145]">
                  Захиалагч: Хувь хүн{" "}
                </p>
                <p className="text-[16px] text-[#3F4145]">
                  <b>{order.userId?.email}- </b>
                  {order.userId?.userName}, {order.userId?.phoneNumber}
                </p>
              </div>
              {order.details?.map((el : any) => {
                function formatCurrency(amount: number): string {
                    const formattedAmount = amount.toLocaleString('en-US');
                    return `₮${formattedAmount}`;
                }
                const formattedAmount = formatCurrency(el.price);
                const finalPrice = el.price*el.quantity;
                const formattedPrice = formatCurrency(finalPrice);

                function formatDate(inputDate: string): string {
                    const date = new Date(inputDate);
                    const year = date.getFullYear();
                    const month = String(date.getMonth() + 1).padStart(2, '0');
                    const day = String(date.getDate()).padStart(2, '0');
                    return `${year}-${month}-${day}`;
                }

                const inputDate = el.createdAt;
                const formattedDate = formatDate(inputDate);

                return (
                    <div key={el._id} className="w-[580px] rounded-[12px] bg-[#F7F7F8] flex">
                        <img className="bg- overflow-hidden w-[180px] h-[156px] object-contain" src={el.images} alt="" />
                        <div className="w-[400px] py-[16px] h-[156px] px-[24px]">
                            <p className="text-[24px] pb-[8px]"><b>{el.productName}</b></p>
                            <p className="text-[#3F4145] text-[14px]">{formattedDate}</p>
                            <p className="text-[#3F4145] text-[14px] pb-[20px]">Бүтээгдэхүүний ID: {el.productCode}</p>
                            <div className="flex justify-between">
                                <p className="text-[#3F4145]"><b>Тоо ширхэг: {el.quantity}</b>*{formattedAmount}</p>
                                <p><b>{formattedPrice}</b></p>
                            </div>
                        </div>
                    </div>
                )
              })}
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="bg-white rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                <p className="py-[20px] px-[24px] text-[16px]">
                  Хүргэлтийн мэдээлэл
                </p>
                <hr />
                <div className="px-[24px] pt-[24px] pb-[48px]">
                  <p className="text-[16px]">Гэр</p>
                  <p className="text-[16px]">
                    <b>
                      {order.userId?.district}, {order.userId?.khoroo}
                    </b>
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[12px] border-[1px] border-[#ECEDF0] w-[519px]">
                <p className="py-[20px] px-[24px] text-[16px]">
                  Төлбөрийн мэдээлэл
                </p>
                <hr />
                <div className="p-[24px]">
                    <p className="text-[16px] text-[#3F4145]">Бүтээгдэхүүн</p>
                    {order.details?.map((el : any) => {
                        function formatCurrency(amount: number): string {
                            const formattedAmount = amount.toLocaleString('en-US');
                            return `₮${formattedAmount}`;
                        }
                        const formattedAmount = formatCurrency(el.price);
                        const finalPrice = el.price*el.quantity;
                        const formattedPrice = formatCurrency(finalPrice);

                        return(
                            <div key={el._id} className="flex flex-col gap-[20px]">
                                <div className="flex justify-between">
                                    <div className="flex items-center">
                                        <p className="text-[#3F4145] text-[14px]">{el.productName}</p>
                                        <p className="text-[#5E6166] text-[16px]">x{el.quantity}</p>
                                    </div>
                                    <p className="text-[#3F4145]">{formattedPrice}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
