import useSWR from "swr";
import { FetchAllProducts } from "./Api/FetchAllProducts";

export default function products() {
  const { data, isLoading, error } = useSWR("/product/get", FetchAllProducts);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="flex flex-col gap-8 px-[360px] py-8">
      <div>
        <h1 className="text-[#151875] font-bold">Электрон бараа</h1>
        <p className="text-[#8A8FB9]">127 бүтээгдэхүүн</p>
      </div>
      <div className="flex flex-wrap w-full justify-between">
        {data.map((dat: any, index: number) => (
          <div key={index}>
            <img src={dat.images} alt="" />
            <p className="text-[#151875] font-semibold">{dat.productName}</p>
            <p className="text-[#151875]">
              {dat.price !== null ? dat.price.toLocaleString() + "₮" : ""}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
