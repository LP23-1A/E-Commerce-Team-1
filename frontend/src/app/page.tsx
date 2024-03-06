"use client"
import SignUp from "./SignUp/page";
import Navbar from "@/Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Product from "@/Components/Product";
// import AddProduct from "@/Components/AddProduct";

export default function Home() {
  return (
    <div className="flex gap-8">
      <Sidebar />
      <Product />
      {/* <AddProduct /> */}
    </div>
  );
}
