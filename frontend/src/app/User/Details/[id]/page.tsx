import Details from "@/Components/User/Details";
import ExtraInfo from "@/Components/User/ExtraInfo";
import Footer from "@/Components/User/Footer";
import NavbarClient from "@/Components/User/NavbarClient";
import Path from "@/Components/User/Path";
import MiniNavbar from "@/Components/User/UserMiniNavbar";

export default function DetailsProduct() {
  return (
    <div>
      <NavbarClient />
      <MiniNavbar />
      <Path />
      <Details />
      <ExtraInfo />
      <Footer />
    </div>
  );
}
