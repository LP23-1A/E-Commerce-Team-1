"use client";
import { ChangeEvent, useRef, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
const USEREMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function FormsLogin() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const inputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const valueEmail = event.target.value;
    return valueEmail;
  };

  const inputPassWord = (event: ChangeEvent<HTMLInputElement>) => {
    const valuePassWords = event.target.value;
    return valuePassWords;
  };

  function ValidEmail(email: any) {
    return USEREMAIL_REGEX.test(email);
  }

  const authenticateEmail = () => {
    if (!ValidEmail(emailRef.current?.value)) {
      toast.error("Email must include some symbols and numbers");
    }
  };

  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };

  const validForms =
    emailRef.current?.value.trim() !== "" &&
    passwordRef.current?.value.trim() !== "";

  return (
    <div className="w-full h-[600px] flex flex-col justify-center items-center">
      <div
        className="w-fit h-fit flex flex-col gap-[21px]"
        style={{
          boxShadow: "0px 0px 16px 0px rgba(0, 0, 0, 0.10)",
          padding: "24px 32px",
        }}
      >
        <h2 className="text-center font-extrabold text-3xl text-blackq">
          Log In
        </h2>
        <h6
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          You can log in using the information below
        </h6>
        <div className="flex flex-col gap-[20px]">
          <input
            ref={emailRef}
            onChange={inputEmail}
            placeholder="email"
            className="border-solid rounded-sm border-2 w-[432px] h-[52px]"
            style={{ borderColor: "#C2C5E1" }}
          />
          <div className="relative">
            <input
              onChange={inputPassWord}
              ref={passwordRef}
              placeholder="password"
              type={isVisible ? "text" : "password"}
              className="border-solid rounded-sm border-2 w-[432px] h-[52px]"
              style={{ borderColor: "#C2C5E1" }}
            />
            <button
              className="absolute ml-[-25px] mt-[15px]"
              onClick={toggleVisibility}
            >
              {isVisible ? "👁️" : "👁️‍🗨️"}
            </button>
          </div>
        </div>
        <span
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          Forget my password
        </span>
        <button
          onClick={authenticateEmail}
          className="text-center text-base font-normal border-solid rounded w-[432px] h-[52px] text-white hover:scale-110 duration-300"
          style={{ background: "#FB2E86" }}
        >
          Log In
        </button>
        <span
          className="text-center text-base font-normal"
          style={{ color: "#9096B2" }}
        >
          Sign Up
        </span>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
