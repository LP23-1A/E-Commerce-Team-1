import Bullet from "./Icon/BulletIcon";
import SettingsIcon from "./Icon/SettingsIcon";

const data = [
  {
    price: "12000",
    sold: "2",
  },
  {
    price: "95000",
    sold: "3",
  },
  {
    price: "59000",
    sold: "4",
  },
  {
    price: "354000",
    sold: "5",
  },
];

export default function Product() {
  return (
    <div className="px-[24px] py-[16px] bg-[#FFFFFF] w-[100%] rounded-[12px] flex flex-col gap-[12px]">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-[18px]">Шилдэг бүтээгдэхүүн</h1>
        <Bullet />
      </div>
      <div>
        <div className="bg-[#ECEDF0] flex justify-between px-[24px] py-[16px]">
          <div className=" text-[12px] font-semibold">№</div>
          <div className=" text-[12px] font-semibold">Бүтээгдэхүүн</div>
          <div className=" text-[12px] font-semibold">Зарагдсан</div>
          <div className=" text-[12px] font-semibold">Үнэ</div>
        </div>
        <>
          {data.map((el) => {
            return (
              <div className="px-[24px] py-[16px] text-[12px] flex justify-between items-center">
                <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                  {" "}
                  tooo
                </p>
                <div className=" flex items-center gap-[12px] px-[8px] py-[12px]">
                  <SettingsIcon />
                  <div>
                    <p className="text-[#121316] font-semibold text-[14px]">
                      WOMEN'S HORSEBIT MULE
                    </p>
                    <p className="text-[#3F4145] font-normal text-[14px]">
                      #12345678
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-[#121316] font-normal py-[16px] px-[24px]">
                  {el.sold}
                </p>
                <p className="text-[14px] text-[#121316] font-normal  py-[16px] px-[24px]">
                  {el.price}$
                </p>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
}
