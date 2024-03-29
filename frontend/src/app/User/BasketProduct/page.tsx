import CartProduct from "@/Components/User/Cart";
import Footer from "@/Components/User/Footer";
import NavbarClient from "@/Components/User/NavbarClient";
import Path from "@/Components/User/Path";
import MiniNavbar from "@/Components/User/UserMiniNavbar";

export default function BasketProductPage() {    
    return (
        <div>
            <NavbarClient />
            <MiniNavbar />
            <Path />
            <CartProduct/>
            <Footer />
        </div>
    )
}