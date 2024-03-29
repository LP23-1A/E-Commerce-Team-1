"use client";
import Ratings from "./Ratings";

export default function Additional() {
  return (
    <div className="h-[1200px] bg-[#F9F8FE] px-[360px] p-4 flex flex-col gap-4">
      <div className="flex text-[#151875] font-bold text-xl gap-4 items-center">
        <h1>Нэмэлт мэдээлэл</h1>
        <p>Үнэлгээ</p>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-[#1D3178] font-bold">Үнэлгээ нэмэх</h1>
        <div className="w-full bg-white h-[283px] rounded-md p-4 flex flex-col gap-4">
          <div className="flex flex-col">
            <Ratings />
            <input
              type="text"
              className="w-full px-4 border-b-2 border-[#BFC6E0] focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            placeholder="Сэтгэгдэл бичих"
            className="w-full px-4 py-2 border-b-2 border-[#BFC6E0] focus:outline-none focus:border-blue-500"
          />
          <div className="flex justify-end pt-[80px]">
            <button className="w-[100px] h-[35px] bg-[#FB2E86] rounded-sm font-bold text-white text-sm">
              Үнэлэх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
