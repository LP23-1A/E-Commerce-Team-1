import { FetchAllProducts } from "../Api/FetchAllProducts";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import IsLoading from "../Isloading";
import toast from "react-hot-toast";
import ControlButton1 from "./ControlButton1";
import CircleOne from "./CircleOne";

export default function Page1({ nextPage, previousPage }: any) {
  const { data, isLoading, error } = useSWR("/product/get", FetchAllProducts);
  const router = useRouter();

  if (isLoading) return <IsLoading />;

  if (error) {
    toast.error("Failed to fetch All Products from backend");
    console.error(error);
    return null;
  }

  return (
    <>
      {data &&
        data.slice(1, 2).map((element: any, index: number) => (
          <div key={index} className="flex justify-center items-center w-8/12">
            <div className="w-full flex justify-between">
              <div className="w-5/12 flex flex-col gap-[10px]">
                <div
                  style={{ color: "#FB2E86" }}
                  className="font-bold text-base mb-[5px]"
                >
                  A comfortable environment in your life
                </div>
                <p
                  style={{ fontSize: "53px" }}
                  className="font-extrabold text-black w-[480px] h-[128px] flex justify-center items-center"
                >
                  The very first design of 2024
                </p>
                <h6
                  style={{ color: "#8A8FB9" }}
                  className="font-bold text-base w-[385px] h-[56px]"
                >
                  Officially importing the best product of Sweden country
                </h6>
                <button
                  onClick={() => router.push(`/User/Details/${element._id}`)}
                  style={{ backgroundColor: "#FB2E86", borderRadius: "5px" }}
                  className="w-[163px] h-[50px] text-white"
                >
                  More Detail about
                </button>
              </div>

              <div>
                <img
                  style={{ borderRadius: "10px" }}
                  className="w-4/12 bg-green-400 w-[350px] h-[350px]"
                  src={element.images}
                  alt=""
                />                
              </div>
            </div>
            <ControlButton1 nextPage={nextPage} previousPage={previousPage} />
          </div>
        ))}
    </>
  );
}
