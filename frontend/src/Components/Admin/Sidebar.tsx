'use client'
import { useRouter } from "next/navigation";
import { MainIcon, OrderIcon, IncomeIcon, ProductIcon, SettingsIcon } from "./Icon/index";
import { useState } from "react";

export default function Sidebar() {
    const router = useRouter();
    const statesOfOrder: string[] = ['Хяналтын самбар', 'Захиaлга', 'Орлого', 'Бүтээгдэхүүн', 'Тохиргоо'];
    const statesOfIcons = [<MainIcon />, <OrderIcon />, <IncomeIcon />, <ProductIcon />, <SettingsIcon />];
    const statesOfRouters: string[] = ["/Admin/Dashboard", "/Admin/Order", "/Admin/Income", "/Admin/Product", "/Admin/Settings"]
    const [selectedState, setSelectedState] = useState<number | null>(0);

    const handlerClick = (index: number) => {
        setSelectedState(index);
        console.log(index, "this is index");        
    };

    return (
        <div className="flex flex-col gap-[16px] pt-[24px]">
            {
                statesOfOrder.map((state, index) => {
                    return (
                        <button key={index} onClick={() => {
                            handlerClick(index)
                            router.push(statesOfRouters[index])

                        }} className={`flex items-center hover:bg-[#DADADA] pr-[24px] ease-in-out duration-200 ${index == selectedState ? "bg-[#DADADA]" : "white"} `}>
                            <div className="py-[8px] px-[16px]">
                                {statesOfIcons[index]}
                            </div>
                            <p className="text-[16px] text-black">{state}</p>
                        </button>
                    )
                })
            }
        </div>
    )
}