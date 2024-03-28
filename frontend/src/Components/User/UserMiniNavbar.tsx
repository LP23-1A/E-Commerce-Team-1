"use client";
import { useState } from "react";
import { Search } from "./Icon/index";
import { useRouter } from "next/navigation";

export default function MiniNavbar({ onSearch }: any) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  const handleSearch = (e: { target: { value: any } }) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSelectChange = (event: { target: { value: any } }) => {
    const selectedOption = event.target.value;
    setSelectedValue(selectedOption);

    if (selectedOption === "one") {
      router.push("/Admin/AddProduct");
    }
  };

  return (
    <div className="flex items-center justify-between px-[360px] py-4">
      <div className="flex items-center gap-10">
        <h1 className="font-semibold text-2xl text-[#0D0E43]">Ecommerce</h1>
        <div className="flex items-center gap-4">
          <select
            className="text-[#FB2E86]"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="">Нүүр</option>
            <option value="one">one</option>
          </select>
          <p>Ангилал</p>
        </div>
      </div>
      <div className="flex items-center">
        <input
          type="search"
          placeholder="Product search..."
          className="border border-inherit border-[2px] h-[40px] p-2"
          value={searchTerm}
          onChange={handleSearch}
        />
        <div className="flex items-center justify-center w-[52px] h-[40px] bg-[#FB2E86]">
          <Search />
        </div>
      </div>
    </div>
  );
}
