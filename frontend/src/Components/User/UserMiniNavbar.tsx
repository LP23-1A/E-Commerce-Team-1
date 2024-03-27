import { Search } from "./Icon/index";

export default function MiniNavbar() {
  return (
    <div className="flex items-center justify-between px-[360px] py-4">
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
          className="border border-inherit border-[2px] h-[40px] p-2"
        />
        <div className="flex items-center justify-center w-[52px] h-[40px] bg-[#FB2E86]">
          <Search />
        </div>
      </div>
    </div>
  );
}
