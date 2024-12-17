"use client";
import Products from "./Products";

export default function ElectronicPro() {
  return (
    <div>
      <div className="flex items-center h-[100px] bg-[#F6F5FF] px-[360px] gap-4">
        <p>Home</p>
        <p className="text-[#FB2E86]">Электрон бараа</p>
      </div>
      <Products />
    </div>
  );
}
