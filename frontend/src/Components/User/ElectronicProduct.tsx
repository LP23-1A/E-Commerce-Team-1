import { Search } from "./Icon/index";
import Products from "./Products";
import MiniNavbar from "./UserMiniNavbar";

export default function ElectronicPro() {
  return (
    <div>
      <div className="flex items-center justify-between px-[360px] py-4">
        <MiniNavbar />
        <div className="flex items-center">
          <input
            type="search"
            className="border border-inherit border-[2px] h-[40px]"
          />
          <div className="flex items-center justify-center w-[52px] h-[40px] bg-[#FB2E86]">
            <Search />
          </div>
        </div>
      </div>
      <div className="flex items-center h-[100px] bg-[#F6F5FF] px-[360px] gap-4">
        <p>Home</p>
        <p className="text-[#FB2E86]">Электрон бараа</p>
      </div>
      <Products />
    </div>
  );
}
