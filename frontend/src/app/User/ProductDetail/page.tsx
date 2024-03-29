import Additional from "@/Components/User/Additional";
import ProductDetail from "@/Components/User/ProductDetail";
import RelateProduct from "@/Components/User/RelateProduct";
import Footer from "@/Components/User/Footer";
import NavbarClient from "@/Components/User/NavbarClient";
import Path from "@/Components/User/Path";
import MiniNavbar from "@/Components/User/UserMiniNavbar";

export default function ProDetail() {
  return (
    <div>
      <NavbarClient />
      <MiniNavbar />
      <Path />
      <ProductDetail />
      <Additional />
      <RelateProduct />
      <Footer />
    </div>
  );
}
