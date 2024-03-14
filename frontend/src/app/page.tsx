"use client"
import SignUp from "./SignUp/page";
import Navbar from "@/Components/Navbar";
import Sidebar from "../Components/Sidebar";
import Product from "@/app/Product/page";
import OrderDetails from "./OrderDetails/page";
import Order from "./Order/page";

export default function Home() {
  return (
    <div>
      <Order />
    </div>
  );
}
