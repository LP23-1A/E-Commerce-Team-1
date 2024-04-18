import useSWR from "swr";
import { FetchAllProducts } from "./Api/FetchAllProducts";
import { ProductInterface } from "./Interface/ProductInterface";
import IsLoading from "./Isloading";

export default function SpecialProduct() {
  const { data, isLoading, error } = useSWR("/product/get", FetchAllProducts);

  isLoading ? <IsLoading /> : null;
  if (error) console.error(error);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 p-[50px]">
        <h5
          className="font-extrabold non-italic text-[#1A0B5B] w-[full] text-center"
          style={{ fontSize: "42px" }}
        >
          Special Product
        </h5>
        <div className="flex flex-row justify-between mt-[50px]">
          {data?.slice(0, 4).map((el: ProductInterface, i: number) => {
            return (
              <div
                style={{
                  background: "#FFF",
                  boxShadow: "0px 0px 25px 0px rgba(0, 0, 0, 0.10)",
                }}
                key={i}
                className="w-[270px] h-[361px] flex-col flex items-center"
              >
                <div className="w-[270px h-[236px]">
                  <img className="w-[176px] h-[191px]" src={el.images} alt="" />
                </div>
                <div className="flex w-full h-full flex-col">
                  <h5 className="non-italic text-center text-lg font-bold text-[#FB2E86]">
                    {el.productName}
                  </h5>
                  <h5 className="non-italic text-center text-lg font-bold text-[#151875] mt-[35px]">
                    {el.price}₮
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-[20px] w-[full] justify-center items-center mt-[50px]">
          {[...Array(4)].map((_, index) => (
             <button key={index} className="w-[91px] h-[4px] rounded-3xl bg-pink-200 hover:bg-pink-500 hover:scale-125 transition-transform duration-300"></button>
          ))}                                    
        </div>
      </div>
    </div>
  );
}
