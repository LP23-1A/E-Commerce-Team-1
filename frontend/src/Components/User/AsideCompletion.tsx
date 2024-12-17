import { UpdatedProInterFace } from "./Interface/UpdatedProduct";

export default function AsideCompletion({ readyData, productData }: any) {

  const TotalPrice = () => {
    let total = 0;
    readyData.forEach((element: UpdatedProInterFace) => {
      total += element.price * element.count;
    });
    return total;
  }

  return (
    productData && (
      <div className="w-[384px] h-[243px] rounded bg-[#F4F4FC] flex flex-col gap-[40px] p-[20px] ">
        <div className="w-full flex justify-between border-solid border-b-2 p-[5px] border-gray-400 items-center">
          <div className="non-italic font-semibold non-italic text-[#1D3178]">
            The Number of Product:
          </div>
          <h5 className="text-lg text-center font-bold non-italic text-[#151875]">
            {readyData.length}
          </h5>
        </div>
        <div className="w-full flex justify-between border-solid border-b-2 p-[5px] border-gray-400 items-center">
          <div className="non-italic font-semibold non-italic text-[#1D3178]">
            Amount to be paid:
          </div>
          <h5 className="text-lg text-center font-bold non-italic text-[#151875]">
            {TotalPrice()}₮
          </h5>
        </div>
        <button className="bg-[#19D16F] w-full h-[40px] text-white">Buy</button>
      </div>
    )
  );
}
