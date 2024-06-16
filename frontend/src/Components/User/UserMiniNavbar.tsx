"use client";
import { useState } from "react";
import { Search } from "./Icon/index";
import { useRouter } from "next/navigation";

export default function MiniNavbar() {
  const [selectedValue, setSelectedValue] = useState("");
  const router = useRouter();

  const handleSelectChange = (event: { target: { value: any } }) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);

    if (selectedOption === "Grid") {
      router.push("/User/GridDefault");
    }
  };

  return (
    <div className="flex items-center justify-between px-[360px] py-4">
      <div className="flex items-center gap-10">
        <button
          onClick={() => router.push("/")}
          className="font-semibold text-2xl text-[#0D0E43]"
        >
          Ecommerce
        </button>
        <div className="flex items-center gap-4">
          <select
            className="text-[#FB2E86]"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="">Нүүр</option>
            <option value="Grid">Grid</option>
          </select>
          <p>Ангилал</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Product search..."
          className="border-inherit border-[2px] h-[40px] p-2"
        />
        <div className="flex items-center justify-center w-[52px] h-[40px] bg-[#FB2E86]">
          <Search />
        </div>
      </div>
    </div>
  );
}
