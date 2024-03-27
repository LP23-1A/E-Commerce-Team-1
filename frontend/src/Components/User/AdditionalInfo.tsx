import { aspectsOfProducts } from "./utils/AspectOfProduct";
import { qualitiesOfProducts } from "./utils/QualitiesOfProduct";

export default function AdditionalInfo() {
  return (
    <div className="w-12/12 flex flex-col items-start gap-[12px] bg-white" style={{padding:"48px 24px",}}>
      <div className="font-extrabold text-2xl non-italic hover:bg-blue-400">
        Qualities
      </div>
      <div className="flex flex-row gap-[50px]">
        <div className="flex flex-col gap-[10px]">
          {aspectsOfProducts.map((el, i) => {
            return (
              <div
                className="font-semibold text-base non-italic cursor-pointer text-[#8A8FB9] hover:scale-105 transition-transform duration-300 hover:text-black"
                key={i}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col gap-[10px]">
          {qualitiesOfProducts.map((el, i) => {
            return (
              <div
                className="font-semibold text-base non-italic cursor-pointer text-[#8A8FB9] hover:scale-105 transition-transform duration-300 hover:text-black"
                key={i}
              >
                {el}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
