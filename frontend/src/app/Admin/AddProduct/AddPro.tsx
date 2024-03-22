"use client";
import { useRouter } from "next/navigation";
import items from "@/Components/Admin/utils/Items";

export default function Product({
  handleSubmit,
  productName,
  productCode,
  description,
  price,
  quantity,
  category,
  setCategory,
  subCategory,
  setSubCategory,
}: any) {
  const router = useRouter();
  const manageProduct = () => {
    localStorage.setItem("productAdded", "true");
  };
  const selectData = [
    {
      title: "Ерөнхий ангилал",
      options: [
        { value: "", label: "Сонгох" },
        { value: "Эрэгтэй", label: "Эрэгтэй" },
        { value: "Эмэгтэй", label: "Эмэгтэй" },
        { value: "Хүүхэд", label: "Хүүхэд" },
      ],
      value: category,
      setValue: setCategory,
    },
    {
      title: "Дэд ангилал",
      options: [
        { value: "", label: "Сонгох" },
        { value: "Цамц", label: "Цамц" },
        { value: "Өмд", label: "Өмд" },
      ],
      value: subCategory,
      setValue: setSubCategory,
    },
  ];
  const isFormFilled =
    productName.trim() !== "" &&
    productCode.trim() !== "" &&
    price.trim() !== "" &&
    quantity.trim() !== "" &&
    description.trim() !== "" &&
    category.trim() !== "" &&
    subCategory.trim() !== "";

  return (
    <div className="flex items-center flex-col gap-[26px] w-[600px]">
      <div className="flex flex-col justify-center gap-6">
        <div className=" flex flex-col gap-6 bg-white w-[575px] h-[232px] p-4 m-8 rounded-lg">
          {selectData.map((select, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h1>{select.title}</h1>
              <select
                className="p-2 w-full h-[44px] bg-gray-100 rounded-lg text-gray-500"
                value={select.value}
                onChange={(e) => select.setValue(e.target.value)}
              >
                {select.options.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          ))}
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
        {isFormFilled ? (
          <button
            className=" bg-black border-[1px] border-gray-200 w-[130px] h-[50px] rounded-lg font-semibold text-white"
            onClick={() => {
              handleSubmit();
              manageProduct();
              router.push("/Admin/Product");
            }}
          >
            Нийтлэх
          </button>
        ) : (
          <button
            disabled
            className="bg-white border-[1px] border-gray-200 w-[130px] h-[50px] rounded-lg font-semibold text-gray-400"
          >
            Нийтлэх
          </button>
        )}
      </div>
    </div>
  );
}
