import { XIcon } from "./Icon";

export default function ProductCartContent({
  productData,
  readyData,
  increaseCount,
  decreaseCount,
  removeProduct,
}: any) {
  const calculateTotalIndiviualProduct = (a: number, b: number) => {
    return a * b;
  };

  return (
    <div className="flex flex-col gap-[50px]">
      {productData &&
        readyData.map((el: any, i: number) => {
          return (
            <div key={i}>
              <div className="flex flex-row justify-between">
                <div className="w-[718px] gap-[100px] flex flex-row border-solid border-b-2 border-gray-100 items-center pb-[15px]">
                  <div className="flex flex-row gap-[25px] w-[200px] relative">
                    <img
                      className="w-[83px] h-[87px] rounded border-solid border-2"
                      src={el.images}
                      alt=""
                    />
                    <div className="flex flex-col gap-[30px]">
                      <div className="font-extrabold non-italic text-sm text-[#000] w-[95px] h-[17px]">
                        {el.productName}
                      </div>
                      <div className="font-extrabold non-italic text-[#A1A8C1] text-sm">
                        Color: Brown
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        removeProduct(el._id);
                      }}
                      className="w-[12px] h-[12px] absolute ml-[70px] mt-[-5px] hover:scale-125 active:rotate-180 transition-transform duration-300 focus:outline-none"
                    >
                      <XIcon />
                    </button>
                  </div>
                  <h5 className="text-sm text-center font-bold non-italic text-[#151875] w-[100px]">
                    {el.price}₮
                  </h5>
                  <div className="flex w-[100px] justify-center">
                    <button
                      onClick={() => {
                        decreaseCount(el._id);
                      }}
                      className="bg-[#E7E7EF] w-[20px] h-[20px] flex items-center justify-center"
                    >
                      -
                    </button>
                    <div className="font-extrabold non-italic text-xs text-[#BEBFC2] w-[25px] flex justify-center items-center bg-slate-100">
                      {el.count}
                    </div>
                    <button
                      onClick={() => increaseCount(el._id)}
                      className="bg-[#E7E7EF] w-[20px] h-[20px] flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                  <div>
                    {calculateTotalIndiviualProduct(el.price, el.count)}₮
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div className="w-full flex-col flex items-end">
        <button className="w-[173px] h-[39px] bg-[#FB2E86] text-white rounded font-extrabold non-italic text-base">
          Remove Cards
        </button>
      </div>
    </div>
  );
}
