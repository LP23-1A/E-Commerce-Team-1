export default function CartHeading() {
  return (
    <div className="flex flex-row justify-between mb-[30px]">
      <div className="flex gap-[100px] flex-row w-[718px]">
        <h4 className="font-extrabold text-xl text-[#1D3178] non-italic w-[200px]">
          Product
        </h4>
        <h4 className="font-extrabold text-xl text-[#1D3178] non-italic w-[100px]">
          Price
        </h4>
        <h4 className="font-extrabold text-xl text-[#1D3178] non-italic w-[100px]">
          Quantity
        </h4>
        <h4 className="font-extrabold text-xl text-[#1D3178] non-italic">
          ToTal
        </h4>
      </div>
      <h4 className="font-extrabold w-[384px] text-center text-xl text-[#1D3178] non-italic">
        Pay Total Price
      </h4>
    </div>
  );
}
