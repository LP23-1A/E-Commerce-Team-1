"use client"

import NavbarClient from "@/Components/User/NavbarClient";
import Order from "./Order/page";
import Carousel from "@/Components/User/Carousel";
import SpecialProduct from "@/Components/User/SpecialProduct";
import Footer from "@/Components/User/Footer";

export default function Home() {
  return (
    <div>
      <NavbarClient />
      <Carousel />
      <SpecialProduct />
      <Footer />
    </div>
  );
}
