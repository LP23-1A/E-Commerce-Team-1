import { Search } from "./Icon/index";
import Products from "./Products";

export default function ElectronicPro() {
  return (
    <div>
      <div className="flex items-center justify-between px-[200px] py-4">
        <div className="flex items-center gap-10">
          <h1 className="font-semibold text-2xl text-[#0D0E43]">Ecommerce</h1>
          <div className="flex items-center gap-4">
            <select className="text-[#FB2E86]">
              <option value="">Нүүр</option>
            </select>
            <p>Ангилал</p>
          </div>
        </div>
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
      <div className="flex items-center h-[100px] bg-[#F6F5FF] px-[200px] gap-4">
        <p>Home</p>
        <p className="text-[#FB2E86]">Электрон бараа</p>
      </div>
      <Products />
    </div>
  );
}
