import IncomeIcon from "./Icon/IncomeIcon";
import MainIcon from "./Icon/MainIcon";
import OrderIcon from "./Icon/OrderIcon";
import ProductIcon from "./Icon/ProductIcon";
import SettingsIcon from "./Icon/SettingsIcon";

export default function Sidebar(){
    return (
        <div className="flex flex-col gap-[16px] pt-[24px]">
            <div className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <MainIcon/>
                </div>
                <p className="text-[16px] text-black">Хяналтын самбар</p>
            </div>
            <div className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <OrderIcon/>
                </div>
                <p className="text-[16px] text-black">Захиaлга</p>
            </div>
            <div className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <IncomeIcon/>
                </div>
                <p className="text-[16px] text-black">Орлого</p>
            </div>
            <div className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <ProductIcon/>
                </div>
                <p className="text-[16px] text-black">Бүтээгдэхүүн</p>
            </div>
            <div className="flex items-center">
                <div className="py-[8px] px-[16px]">
                    <SettingsIcon/>
                </div>
                <p className="text-[16px] text-black">Тохиргоо</p>
            </div>
        </div>
    )
}