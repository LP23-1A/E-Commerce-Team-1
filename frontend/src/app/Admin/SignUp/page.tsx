"use client";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { UserContext } from "@/Components/Admin/UserContext";
import { PineCone, RightArrow } from "@/Components/Admin/Icon/index";
import ButtonGoogle from "@/Components/Admin/ButtonGoogle";
import ButtonMicrosoft from "@/Components/Admin/ButtonMicrosoft";
import ButtonApple from "@/Components/Admin/ButtonApple";
import AlreSignedUp from "@/Components/Admin/Alre-SignedUp";
import GoogleSignIn from "@/Components/Admin/GoogleSignIn";
import useSWR from "swr";

const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const USERNAME_REGEX = /^[A-Z].{2,}$/;

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [buttonActive, setButtonActive] = useState(false);
  const router = useRouter();
  const { userDataRef }: any = useContext(UserContext);
  const controlUserForm = (field: string, value: string | number) => {
    userDataRef.current = { ...userDataRef.current, [field]: value };
  };
  const fetcher = (url: string) => fetch(url).then((el) => el.json());
  const { data, error }: any = useSWR(
    "http://localhost:8000/user/getAllUsers",
    fetcher
  );
  const allUsers = data?.allUsers;

  const handleColor = (valueEmail: string, valueName: string) => {
    setEmail(valueEmail);
    setName(valueName);

    valueEmail.trim() !== "" && valueName.trim() !== ""
      ? setButtonActive(true)
      : setButtonActive(false);
  };

  function validateEmail(email: string) {
    return USEREMAIL_REGEX.test(email);
  }

  function validateName(name: string) {
    return USERNAME_REGEX.test(name);
  }

  const NavigateToNext = async () => {
    try {
      if (!allUsers || !Array.isArray(allUsers)) {
        throw new Error("Invalid user data");
      }

      if (name === "" || email === "") {
        toast("🤧 Come on man, fill in the given forms.");
        return;
      }

      if (!validateEmail(email)) {
        toast.error("Email must include symbols and numbers.");
        return;
      }

      if (!validateName(name)) {
        toast(
          "😱 The name must be at least 3 characters long and the first letter must be capitalized"
        );
        return;
      }

      for (const element of allUsers) {
        if (email === element.email) {
          toast.error("The given email already exists");
          return;
        }
      }

      toast("🚀 To The Next section");
      setTimeout(() => {
        router.push("/Admin/InfoAboutStore");
      }, 2000);
    } catch (error: unknown) {
      console.error("An error occurred:", error);
      toast.error("An error occurred. Please try again later.");
    }
  };

  useEffect(() => {
    const handleClick = (event: any) => {
      if (event.key === "Enter") {
        NavigateToNext();
      }
    };
    document.addEventListener("keydown", handleClick);
    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, [NavigateToNext]);

  return (
    <div className="flex w-full flex-row justify-between">
      <PineCone />
      <div className="flex justify-center w-full items-center pr-[250px]">
        <div className="w-[440px] rounded-xl mt-[160px] p-[40px] h-[fit-content] border border-solid border-gray-300 border-1">
          <p className="flex font-bold text-3xl justify-center w-[360px] h-[60px] pb-5 ">
            To Register
          </p>
          <div className="w-[360xp] mt-10 h-[88px] flex flex-col gap-4">
            <p className="font-normal text-base text-black">Your Email</p>
            <input
              value={email}
              onChange={(e) => {
                handleColor(e.target.value, name);
                controlUserForm("userName", e.target.value);
              }}
              className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
              placeholder="Email"
              type="text"
            />
          </div>
          <div className="w-[360xp] h-[88px] flex flex-col gap-4 mt-2">
            <p className="font-normal text-base text-black">Your Name</p>
            <input
              value={name}
              onChange={(e) => {
                handleColor(email, e.target.value);
                controlUserForm("email", e.target.value);
              }}
              className="border border-solid border-gray-300 bg-slate-100 p-2 rounded-lg"
              placeholder="Name"
              type="text"
            />
          </div>
          <button
            style={{
              background: buttonActive ? "black" : "#D6D8DB",
              color: buttonActive ? "white" : "gray",
            }}
            onClick={NavigateToNext}
            className="flex flex-row w-[360px] items-center justify-between rounded-lg mt-2 h-[56px] p-2 transition-transform transform active:scale-95 duration-300 hover:scale-110"
          >
            <div></div>
            Next
            <div className="arrow w-[16px] text-lg h-[24px] justify-center items-center flex">
              <RightArrow />
            </div>
          </button>
          <Toaster position="top-center" />
          <div className="border border-solid border-grey-300 w-[360px] mt-6"></div>
          <ButtonGoogle />
          <ButtonMicrosoft />
          <ButtonApple />
          <div className="border border-solid border-grey-300 w-[360px] mt-10"></div>
          <AlreSignedUp />
          <p className="absolute mt-[100px] ml-[100px] text-slate-400">
            © 2023 Pinecone
          </p>
        </div>
      </div>
      <GoogleSignIn />
    </div>
  );
}
