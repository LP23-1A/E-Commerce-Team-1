"use client";
import Carousel from "@/Components/User/Carousel";
import Footer from "@/Components/User/Footer";
import NavbarClient from "@/Components/User/NavbarClient";
import SpecialProduct from "@/Components/User/SpecialProduct";

export default function Home() {
  return (
    <div>    
      <NavbarClient/>  
      <Carousel />
      <SpecialProduct/>
      <Footer/>
    </div>
  );
}
