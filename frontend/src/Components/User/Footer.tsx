import { Facebook, Instagram, Twitter } from "./Icon/index";
import info from "./utils/Info";
import sort from "./utils/Sort";

export default function Footer() {
  return (
    <div>
      <div className="flex justify-evenly items-center w-full h-[479px] bg-[#F2F0FF]">
        <div>
          <h1 className="font-bold text-3xl mb-6">eCommerce</h1>
          <div className="mb-6">
            <input
              type="email"
              placeholder="Имэйл хаяг"
              className="h-[44px] p-4 rounded-sm text-[#8A8FB9]"
            />
            <button className="w-[135px] h-[39px] text-white rounded-sm bg-[#FB2E86]">
              Бүртгүүлэх
            </button>
          </div>
          <div className="flex flex-col gap-2 text-[#8A8FB9]">
            <p>Хаяг</p>
            <p>
              Олимпын гудамж, 1-р хороо, Сүхбаатар дүүрэг, Улаанбаатар хот,
              <br />
              Гурван гол - 401 тоот
            </p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Ангилал</h1>
            {sort.map((data, index) => (
              <div
                key={index}
                className="cursor-pointer text-[#8A8FB9] hover:scale-105 transition-transform duration-300 hover:text-black"
              >
                {data.text}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-semibold text-xl">Бусад</h1>
            {info.map((data, ind) => (
              <div
                key={ind}
                className="cursor-pointer text-[#8A8FB9] hover:scale-105 transition-transform duration-300 hover:text-black"
              >
                {data.text}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-around w-full h-[53px] bg-[#E7E4F8]">
        <p style={{ color: "#9DA0AE" }}>©ecommerce</p>
        <div className="flex items-center gap-4">
          <Facebook />
          <Instagram />
          <Twitter />
        </div>
      </div>
    </div>
  );
}
