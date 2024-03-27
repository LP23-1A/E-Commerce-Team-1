"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";
import { Like } from "./Icon";

const api = `http://localhost:8000/product/getOne`;

export default function detail() {
  const search = useSearchParams();
  const productId = search.get("productId");

  const { data, error } = useSWR(`${api}/${productId}`, async (url) => {
    const res = await axios.get(url);
    return res.data;
  });

  if (error) return <div>Error fetching data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex pl-[360px] p-4 gap-16">
      <div className="flex flex-col gap-4">
        {[...Array(3)].map((_, index) => (
          <img
            key={index}
            src={data.images}
            className="w-[150px] h-[155px] object-contain"
          />
        ))}
      </div>
      <img src={data.images} className="w-[375px] h-[487px] object-contain" />
      <div className="flex flex-col gap-6">
        <h1 className="mt-6 text-[#111C85] font-bold text-3xl">
          {data.productName}
        </h1>
        <p className="text-[#151875] text-2xl">
          {data.price !== null ? data.price.toLocaleString() + "₮" : ""}
        </p>
        <p className="text-[#9295AA] text-lg w-[591px]">{data.description}</p>
        <div className="flex items-center gap-2">
          <button className="w-[100px] h-[35px] bg-[#FB2E86] rounded-sm font-bold text-white text-sm">
            Сагслах
          </button>
          <button className="flex justify-center items-center w-[44px] h-[35px] bg-[#F6F5FF] rounded-sm">
            <Like />
          </button>
        </div>
      </div>
    </div>
  );
}
