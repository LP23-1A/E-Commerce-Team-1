"use client";
import PineConeSVG from "@/Components/SVG/PineCone";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth0 } from "@auth0/auth0-react";
import { UserContext } from "./UserContext";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import ThirdLine from "./ThirdLine";

const backEndOfSignUp = "http://localhost:8000/user/postUser";

const experience = [
  "i was selling on instagram",
  "i was selling on facebook",
  "i was selling on youtube",
  "i was selling on other platforms",
  "🔥 Others",
];
const commodity = [
  "👚 women clothes",
  "👗 dress",
  "👢 women boot",
  "🥾 Hiking Boot",
  "🔥 Others",
];

export default function ThirdStepOfSignUp({ prevStep }: any) {
  const [buttonActive, setButtonActive] = useState(false);
  const { user } = useAuth0();
  const { userDataRef }: any = useContext(UserContext);
  const [haveSkill, setHaveSkill] = useState("");
  const [productType, setProductType] = useState("");
  console.log(userDataRef.current.district, "from third");

  const router = useRouter();

  const manageSkill = (event: any) => {
    const valueSkill = event.target.value;
    setHaveSkill(valueSkill);
  };

  const manageProductType = (event: any) => {
    const valueProductType = event.target.value;
    setProductType(valueProductType);
  };

  const registerClient = async () => {
    try {
      if (!haveSkill || !productType) {
        toast.error("Please choose the given options");
      } else {
        const response = await axios.post(backEndOfSignUp, {
          userName: user?.name ?? userDataRef?.current.userName,
          email: user?.email ?? userDataRef?.current.email,
          khoroo: userDataRef.current.khoroo,
          district: userDataRef.current.district,
          phoneNumber: userDataRef.current.phoneNumber,
          nameOfStore: userDataRef.current.nameOfStore,
          typeOfProduct: productType,
          skillInSales: haveSkill,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        toast.success("Successfully registered");
        setTimeout(() => {
          router.push(`/DashBoard/${response.data.createdUser._id}`);
          router.push('/Order')
        }, 2000);
      }
    } catch (error) {
      console.error("cannot register Client", error);
      toast.error("An error occured during registration");
    }
  };

  useEffect(() => {
    const isActive: any = haveSkill !== "" && productType !== "";
    setButtonActive(isActive);
  }, [haveSkill, productType]);


  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "Enter") {
        registerClient();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [registerClient]);

  return (
    <>
      <PineConeSVG />
      <ThirdLine />
      <div className="flex mt-[100px] justify-center">
        <div className="w-[452px] h-[296px] mt-[100px]">
          <h3 className="font-bold text-3xl text-black">
            Knowing to each other a bit
          </h3>
          <h5
            className="font-normal mt-[30px] text-base"
            style={{ color: "#121316" }}
          >
            This information will be used to support store configuration
          </h5>
          <div className="flex gap-4 flex-col">
            <div>
              <p className="font-semibold text-base text-black mt-[30px]">
                Have you ever been in sales ?
              </p>
              <select
                value={haveSkill}
                onChange={manageSkill}
                className="border mt-[10px] w-full border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
              >
                <option>Choose</option>
                {experience.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>
            <div>
              <p className="font-semibold text-base text-black mt-[20px]">
                What kind of products do you want to sell ?
              </p>
              <select
                value={productType}
                onChange={manageProductType}
                className="border mt-[10px] w-full border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
              >
                <option>Choose</option>
                {commodity.map((el, i) => (
                  <option key={i}>{el}</option>
                ))}
              </select>
            </div>
            <Toaster position="top-center" />
          </div>

          <div className="flex w-full justify-between mt-8 items-baseline">
            <button
              onClick={prevStep}
              className="w-[48px] flex h-[48px] justify-center items-center text-black bg-slate-100 rounded-full text-2xl transition-transform transform active:scale-95 duration-300 hover:scale-110 hover:bg-black hover:text-white"
            >
              &#8592;
            </button>
            <button
              onClick={registerClient}
              disabled={!buttonActive}
              style={{
                background: buttonActive ? "black" : "#D6D8DB",
                color: buttonActive ? "white" : "#1C2024",
              }}
              className="flex justify-end gap-8 flex-row w-[127px] h-[48px] items-center rounded-lg mt-2 p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110"
            >
              Next
              <p className="arrow w-[24px] text-lg h-[24px] justify-center items-center flex">
                &#8594;
              </p>
            </button>
          </div>
        </div>
        <p className="absolute mt-[800px] ml-[-10px] text-slate-400">
          © 2023 Pinecone
        </p>
      </div>
    </>
  );
}
