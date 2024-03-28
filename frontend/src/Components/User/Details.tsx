"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchOneProduct } from "./Api/GetOneProduct";
import MiniNavbar from "./UserMiniNavbar";
import { ProductInterface } from "./Interface/ProductInterface";
import { HeartIcon, StarIcon } from "./Icon";

export default function Details() {
  const [data, setData] = useState<ProductInterface | null>(null);
  const params = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchOneProduct(params.id);
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [params.id]);

  return (
    <div>
      <MiniNavbar />
      <div className="w-full h-[700px] flex justify-center items-center w-fit">
        <div className="flex w-8/12 flex-row">
          <div className="flex flex-col gap-[11px]">
            <img
              className="w-[151px] h-[155px] border-solid border-2"
              src={data?.images}
              alt=""
            />
            <img
              className="w-[151px] h-[155px] border-solid border-2"
              src={data?.images}
              alt=""
            />
            <img
              className="w-[151px] h-[155px] border-solid border-2"
              src={data?.images}
              alt=""
            />
          </div>
          <div>
            <img className="w-[375px] h-[487px]" src={data?.images} alt="" />
          </div>
          <div className="flex flex-col gap-[16px]">
            <h3
              className="font-extrabold text-4xl not-italic"
              style={{ color: "#111C85" }}
            >
              {data?.productName}
            </h3>
            <div className="flex flex-row gap-[10px]">
              <div className="text-xl">
                <StarIcon />
              </div>
              <div className="text-xl">
                <StarIcon />
              </div>
              <div className="text-xl">
                <StarIcon />
              </div>
              <div className="text-xl">
                <StarIcon />
              </div>
              <div className="text-xl">
                <StarIcon />
              </div>
            </div>
            <h5
              className="non-italic font-normal text-3xl"
              style={{ color: "#151875" }}
            >
              {data?.price}₮
            </h5>
            <div className="flex flex-row gap-[10px]">
              <div
                className="w-[12px] h-[12px] rounded-full"
                style={{ background: "#DE9034" }}
              ></div>
              <div
                className="w-[12px] h-[12px] rounded-full"
                style={{ background: "#E60584" }}
              ></div>
              <div
                className="w-[12px] h-[12px] rounded-full"
                style={{ background: "#5E37FF" }}
              ></div>
            </div>
            <p
              className="text-lg font-normal leading-7 font-mono w-[591px]"
              style={{ color: "#9295AA" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button
              className="flex flex-row text-white bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 hover:scale-110 duration-500 ease-in-out "
              style={{ background: "#FB2E86" }}
            >
              Continue shopping
            </button>
            <div>
              <HeartIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
