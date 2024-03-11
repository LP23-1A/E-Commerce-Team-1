"use client";
import { useRouter } from "next/navigation";
import Add from "../../Components/Icon/Add";
export default function addPro({
  handleSubmit,
  handleUpdate,
  coupon,
  setCoupon,
}: any) {
  const router = useRouter();
  const items = [
    { label: "Өнгө", icon: <Add /> },
    { label: "Хэмжээ", icon: <Add /> },
  ];
  return (
    <div className="flex items-center flex-col gap-[26px] w-[600px]">
      <div className="bg-white w-[575px] h-[232px] p-4 m-8 rounded-lg">
        <div className="flex flex-col h-full justify-center gap-6">
          <div className="flex flex-col gap-2">
            <h1>Ерөнхий ангилал</h1>
            <select
              className="p-2 w-full h-[44px] bg-gray-100 rounded-lg text-gray-500"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
            >
              <option selected>Сонгох</option>
              <option value="Эрэгтэй">Эрэгтэй </option>
              <option value="Эмэгтэй">Эмэгтэй</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <h1>Дэд ангилал</h1>
            <select className="p-2 w-full h-[44px] bg-gray-100 rounded-lg text-gray-500">
              <option selected>Сонгох</option>
              <option value="Цамц">Цамц</option>
              <option value="Өмд">Өмд</option>
            </select>
          </div>
        </div>
      </div>
      <div className="bg-white w-[575px] h-[240px] p-4 m-8 rounded-lg">
        <div className="flex flex-col gap-6">
          <h1 className="font-semibold text-lg">Төрөл</h1>
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <h1>{item.label}</h1>
              <button>{item.icon}</button>
            </div>
          ))}
          <button className="border-[1px] border-gray-200 w-[130px] h-[36px] rounded-lg font-semibold">
            Төрөл нэмэх
          </button>
        </div>
      </div>
      <div className="bg-white w-[575px] h-[232px] p-4 m-8 rounded-lg">
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-lg">Таг</h1>
          <input
            type="text"
            placeholder="Таг нэмэх..."
            className="p-2 w-full h-[58px] bg-gray-100 rounded-lg"
          />
          <p className="text-gray-600">Санал болгох: Гутал , Цүнх , Эмэгтэй </p>
        </div>
      </div>
      <div className="flex gap-4 w-full p-4 justify-end">
        <button className="border-[1px] border-gray-400 w-[130px] h-[50px] rounded-lg font-semibold">
          Ноорог
        </button>
        <button
          className=" bg-black border-[1px] border-gray-200 w-[130px] h-[50px] rounded-lg font-semibold text-white"
          onClick={() => {
            handleSubmit();
            handleUpdate();
            router.push("/Product");
          }}
        >
          Нийтлэх
        </button>
      </div>
    </div>
  );
}
