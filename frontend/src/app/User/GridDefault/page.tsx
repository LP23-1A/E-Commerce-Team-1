import Footer from "@/Components/User/Footer";
import NavbarClient from "@/Components/User/NavbarClient";
import Path from "@/Components/User/Path";
import Products from "@/Components/User/Products";
import MiniNavbar from "@/Components/User/UserMiniNavbar";

export default function GridDefault() {
  return (
    <div>
      <NavbarClient />
      <MiniNavbar />
      <Path />
      <Products />
      <Footer />
    </div>
  );
}
