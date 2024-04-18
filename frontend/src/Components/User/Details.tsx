"use client";
import { useParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { fetchOneProduct } from "./Api/GetOneProduct";
import { HeartIcon, StarIcon } from "./Icon";
import { CartContexForProduct } from "./CartContext";
import { UpdatedProInterFace } from "./Interface/UpdatedProduct";

export default function Details() {
  const [data, setData] = useState([]);
  const { productData, setProductData } = useContext(CartContexForProduct);
  const params = useParams();
  const ArrayData = [data];

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

  const intoBasket = (comingId: string) => {
    const repeatedProductIndex = productData.findIndex(
      (el: any) => el._id === comingId
    );

    if (repeatedProductIndex !== -1) {
      setProductData(
        productData.map((el: UpdatedProInterFace, index: number) =>
          index === repeatedProductIndex ? { ...el, count: el.count + 1 } : el
        )
      );
    } else {
      setProductData([...productData, { _id: comingId, count: 1 }]);
    }
  };

  return (
    <div>
      {ArrayData.map((el: any, i: number) => {
        return (
          <div
            key={i}
            className="w-full h-[700px] flex justify-center items-center w-fit"
          >
            <div className="flex w-8/12 flex-row">
              <div className="flex flex-col gap-[11px]">
                {[...Array(4)].map((_, index) => (
                  <img
                    key={index}
                    className="w-[151px] h-[155px]"
                    src={el?.images}
                    alt=""
                  />
                ))}
              </div>
              <div>
                <img className="w-[375px] h-[487px]" src={el?.images} alt="" />
              </div>
              <div className="flex flex-col gap-[16px]">
                <h3
                  className="font-extrabold text-4xl not-italic"
                  style={{ color: "#111C85" }}
                >
                  {el?.productName}
                </h3>
                <div className="flex flex-row gap-[10px]">
                  {[...Array(5)].map((_, index) => (
                    <div key={index} className="text-xl">
                      <StarIcon />
                    </div>
                  ))}
                </div>
                <h5
                  className="non-italic font-normal text-3xl"
                  style={{ color: "#151875" }}
                >
                  {el?.price}₮
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
                  in est adipiscing in phasellus non in justo.
                </p>
                <button
                  onClick={() => intoBasket(el._id)}
                  className="flex flex-row text-white bg-slate-100 justify-center gap-4 mt-7 w-[360px] items-center rounded-lg h-[56px] p-2 hover:rounded-full transition-transform transform active:scale-95 hover:scale-110 duration-500 ease-in-out "
                  style={{ background: "#FB2E86" }}
                >
                  Add To Basket
                </button>
                <div>
                  <HeartIcon />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
