import Additional from "@/Components/User/Additional";
import ProductDetail from "@/Components/User/ProductDetail";
import RelateProduct from "@/Components/User/RelateProduct";
import MiniNavbar from "@/Components/User/UserMiniNavbar";
export default function ProDetail() {
  return (
    <div>
      <MiniNavbar />
      <ProductDetail />
      <Additional />
      <RelateProduct />
    </div>
  );
}
