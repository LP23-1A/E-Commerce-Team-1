"use client";
import { usePathname } from "next/navigation";

export default function Path() {
  function getLastWord(str: string): string {
    const parts = str.split("/");
    const lastWord = parts[parts.length - 1];
    return lastWord;
  }
  const pathOptions = [
    "SavedProducts",
    "BasketProduct",
    "GridDefault",
    "LogIn",
  ];
  const textOptions = ["Хадгалах", "Сагс", "Электрон бараа", "Нэвтрэх"];
  const pathName = usePathname();
  const lastWord = getLastWord(pathName);

  return (
    <div className="flex px-[360px] h-[100px] items-center bg-[#F6F5FF]">
      <p className="text-black text-[16px]">Home</p>
      {pathOptions.map((el, index) => {
        if (el == lastWord) {
          return (
            <p className="text-[#FB2E86] text-[16px]">
              &nbsp;. {textOptions[index]}
            </p>
          );
        }
      })}
    </div>
  );
}
