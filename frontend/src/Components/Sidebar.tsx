'use client'
import AppRouter from "next/dist/client/components/app-router";
import IncomeIcon from "./Icon/IncomeIcon";
import MainIcon from "./Icon/MainIcon";
import OrderIcon from "./Icon/OrderIcon";
import ProductIcon from "./Icon/ProductIcon";
import SettingsIcon from "./Icon/SettingsIcon";
import { useRouter } from "next/navigation";

export default function Sidebar(){
    const router = useRouter();

    return (
        <div className="flex flex-col gap-[16px] pt-[24px]">
            <div onClick={() => router.push("/main")} className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <MainIcon/>
                </div>
                <p className="text-[16px] text-black">Хяналтын самбар</p>
            </div>
            <div onClick={() => router.push("/order")} className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <OrderIcon/>
                </div>
                <p className="text-[16px] text-black">Захиaлга</p>
            </div>
            <div onClick={() => router.push("/income")} className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <IncomeIcon/>
                </div>
                <p className="text-[16px] text-black">Орлого</p>
            </div>
            <div onClick={() => router.push("/product")} className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <ProductIcon/>
                </div>
                <p className="text-[16px] text-black">Бүтээгдэхүүн</p>
            </div>
            <div onClick={() => router.push("/settings")} className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <SettingsIcon/>
                </div>
                <p className="text-[16px] text-black">Тохиргоо</p>
            </div>
        </div>
    )
}