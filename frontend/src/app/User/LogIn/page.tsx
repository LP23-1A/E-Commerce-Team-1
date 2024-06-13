import Footer from "@/Components/User/Footer";
import FormsLogin from "@/Components/User/FormsLogin";
import NavbarClient from "@/Components/User/NavbarClient";
import Path from "@/Components/User/Path";
import MiniNavbar from "@/Components/User/UserMiniNavbar";

export default function UserLogin() {

  return (
    <div >
      <NavbarClient />
      <MiniNavbar />
      <Path />
      <div className="w-full flex flex-col justify-center items-center">
      <FormsLogin />
      </div>
      
      <Footer />
    </div>
  );
}
