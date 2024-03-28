"use client";
import { useState } from "react";
import MiniNavbar from "./UserMiniNavbar";
import Products from "./Products";

export default function ElectronicPro() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term: any) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <MiniNavbar onSearch={handleSearch} />
      <div className="flex items-center h-[100px] bg-[#F6F5FF] px-[360px] gap-4">
        <p>Home</p>
        <p className="text-[#FB2E86]">Электрон бараа</p>
      </div>
      <Products searchTerm={searchTerm} />
    </div>
  );
}