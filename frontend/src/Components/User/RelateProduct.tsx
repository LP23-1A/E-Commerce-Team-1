"use client";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { FetchAllProducts } from "./Api/FetchAllProducts";
import { Bucket, SearchPlus, Like } from "./Icon/index";
import { useRouter } from "next/navigation";
interface Product {
  _id: string;
  images: string;
  productName: string;
  price: number | null;
}

export default function Relate() {
  const router = useRouter();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { data, isLoading, error } = useSWR("/product/get", FetchAllProducts);
  const [shuffledData, setShuffledData] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      const shuffled = [...data].sort(() => Math.random() - 0.5);
      setShuffledData(shuffled);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  const selectedData = shuffledData.slice(0, 4);

  return (
    <div className="flex flex-col gap-4 px-[360px] py-8">
      <h1 className="text-[#101750] font-bold text-2xl">
        Холбоотой бүтээгдэхүүн
      </h1>
      <div className="flex flex-col gap-8">
        <div className="flex flex-wrap w-full justify-between gap-6">
          {selectedData.map((dat: Product, index: number) => (
            <div
              key={index}
              className="relative text-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                router.push(`/User/ProductDetail?productId=${dat._id}`)
              }
            >
              <img
                src={dat.images}
                className="w-[200px] h-[200px] object-contain"
              />
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex justify-start items-center">
                  <div className="flex flex-col gap-2 pl-2 hover:scale-105 transition-transform duration-300 hover:text-black cursor-pointer">
                    <Bucket />
                    <SearchPlus />
                    <Like />
                  </div>
                </div>
              )}
              <p className="text-[#151875] font-semibold">{dat.productName}</p>
              <p className="text-[#151875]">
                {dat.price !== null ? dat.price.toLocaleString() + "₮" : ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
