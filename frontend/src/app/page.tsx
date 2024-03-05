"use client"
import SignUp from "./SignUp/page";
import Navbar from "@/Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Product from "@/Components/Product";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-8"><Sidebar />
        <Product /></div>
    </div>
  )
}
