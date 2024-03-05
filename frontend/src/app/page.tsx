"use client"
import SignUp from "./SignUp/page";
import Navbar from "@/Components/Navbar";
import Sidebar from "../Components/Sidebar";
// import AddProduct from "@/Components/AddProduct";
import Product from "@/app/Product/page";
import Order from "./AdminDashboard/Order/page";

export default function Home() {
  return (
    <div>
      <Product />
    </div>
  )
}
