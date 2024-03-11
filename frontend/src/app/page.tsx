"use client"
import SignUp from "./SignUp/page";
import Product from "@/app/Product/page";
import OrderDetails from "./AdminDashboard/Order/orderDetails/page";
import Order from "./AdminDashboard/Order/page";
import Navbar from "@/Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Dashbo from "@/Components/Dashboard";

export default function Home() {
  return (
    <div>
      <Product />
    </div>
  )
}
